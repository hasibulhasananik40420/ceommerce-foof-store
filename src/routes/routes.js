import { createBrowserRouter } from "react-router-dom";
import AddCart from "../component/AddCart/AddCart";
import CheckOutPage from "../component/CheckOutPage/CheckOutPage";
import Compare from "../component/Compare/Compare";
import ProductDetailsCard from "../component/ProductCard/ProductDetailsCard";
import WishList from "../component/WishList/WishList";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../layout/main/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Singup from "../pages/Singup/Singup";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },

            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/singup",
                element: <Singup />
            }, {
                path: "/wishlist",
                element: <WishList />
            }, {
                path: "/compare",
                element: <Compare />
            }, {
                path: "/product-details",
                element: <ProductDetailsCard />
            },
            {
                path: "/cart",
                element: <AddCart />
            }, {
                path: "/checkout",
                element: <CheckOutPage />
            },
            {
                path: "*",
                element: <ErrorPage />
            },
        ]
    }
])

export default routes