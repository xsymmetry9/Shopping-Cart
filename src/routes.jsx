import App from "./App";
import ItemDetailPage from "./pages/ProductDetail";
import Store from "./pages/Store";

const routes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/item/:id",
      element: <ItemDetailPage/>
    },
    {
      path:"/store",
      element: <Store />
    }
  ];

export default routes;