import { lazy } from "react";
import Category from "../pages/category";
import NotFoundPage from "../pages/404Page";

const Home = lazy(() => import("../pages/home/index"));

export const LazyHome = () => <Home />;

export const LazyCategory = () => <Category />;

export const Lazy404 = () => <NotFoundPage />;
