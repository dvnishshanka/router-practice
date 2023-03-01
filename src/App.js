import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetailsPage from "./pages/ProductDetails";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // path: ''
      { path: "products", element: <Product /> },
      { path: "products/:id", element: <ProductDetailsPage /> },
    ],
  },
]);

//Alternative method
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Product />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
