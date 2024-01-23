import { ReactNode } from "react";
import styles from "./index.module.scss";

const Loader = (): ReactNode => {
  return <div className={styles.loader}></div>;
};

export default Loader;
