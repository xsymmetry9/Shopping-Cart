import App from "./App";
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import {loader as storeLoader} from "./loader";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";

const routes = [
    {
      path: "/",
      element: <App />,
      loader: storeLoader,
      children: [
        { index: true, element: <Homepage /> },
        { path: "store", element: <Store />, loader: storeLoader },
        { path: "store:/id", element: <ProductDetail />, loader: storeLoader},
        { path: "/store/cart", element: <Cart />}
      ]
    },

  ];

export default routes;