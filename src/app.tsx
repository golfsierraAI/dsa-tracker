import { Suspense, useEffect, useState } from "react";
import styles from "./app.module.scss";
import { APIContext } from "./context/apiContext";
import { ApiType } from "./types/types";
import { fetchData } from "./services/apiService";
import { AxiosError } from "axios";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import Loader from "./pages/loading";

function App() {
  const [data, setData] = useState<ApiType | null>(null);
  const [error, setError] = useState<null | string>(null);
  const fetchAndUpdateData = async () => {
    try {
      const response = await fetchData();
      setData(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError("Server Error");
      }
    }
  };

  useEffect(() => {
    fetchAndUpdateData();
  }, []);

  return (
    <APIContext.Provider value={data ?? error}>
      <div className={styles.root}>
        <Suspense fallback={<Loader />}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </APIContext.Provider>
  );
}

export default App;
