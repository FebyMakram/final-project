import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound/NotFound";
import Layout from "./Components/Layout/Layout";
import Cart from "./Components/Cart/Cart";
import ProductDetails from './Components/ProductDetails/ProductDetails';
import CheckOut from "./Components/CheckOut/CheckOut";
import CartSidebar from "./Components/CartSidebar/CartSidebar";
import {Toaster } from 'react-hot-toast'

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "contact", element: <Contact /> },
        { path: "cart", element: <Cart /> },
        { path:"productDetails/:id", element:<ProductDetails/>},
        {path :'checkOut' , element :<CheckOut/>},
        {path: 'cartSidebar' , element:<CartSidebar/>},
        
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <>
     <Toaster position="top-center"/>
      <RouterProvider router={routes}></RouterProvider>
      
    </>
  );
}

export default App;
