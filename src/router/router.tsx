import { createBrowserRouter } from "react-router-dom";
import { Lazy404, LazyCategory, LazyHome } from "../utils/LazyLoad";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyHome />,
    errorElement: <Lazy404 />,
  },
  {
    path: "/category/:path",
    element: <LazyCategory />,
  },
]);

export default router;
