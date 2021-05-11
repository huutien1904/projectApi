import React from "react";
import HomePage from "./pages/Homepage/HomePage";
import NotFound from "./pages/NotFoundPage/NotFound";
import ProductList from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";
import Login from "./pages/Login/Login";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ProductList />,
  },
  {
    path: "/product/add",
    exact: false,
    main: () => <ProductActionPage />,
  },
  {
    path: "/login",
    exact: false,
    main: () => <Login />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
