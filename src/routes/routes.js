import { createBrowserRouter } from "react-router-dom";
import AddCart from "../component/AddCart/AddCart";
import CheckOutPage from "../component/CheckOutPage/CheckOutPage";
import Compare from "../component/Compare/Compare";
import ProductDetailsCard from "../component/ProductCard/ProductDetailsCard";
import WishList from "../component/WishList/WishList";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddOffer from "../layout/DashBoard/AddOffer";
import AddProduct from "../layout/DashBoard/AddProduct";
import AllUsers from "../layout/DashBoard/AllUsers";
import DashBoard from "../layout/DashBoard/DashBoard";
import MyProfile from "../layout/DashBoard/MyProfile";
import MyReview from "../layout/DashBoard/MyReview";
import MyWallet from "../layout/DashBoard/MyWallet";
import Main from "../layout/main/Main";
import About from "../pages/About";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import OfferModal from "../pages/OfferModal/OfferModal";
import Singup from "../pages/Singup/Singup";
import PrivateRoute from "../utilites/PrivateRoute";

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
            }, {
                path: "/blogs",
                element: <Blogs />
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
                path: "/product-details/:id",
                element: <ProductDetailsCard />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/product-details/${params.id}`)

            },
            {
                path: "/cart",
                element: <AddCart />
            },
            {
                path: "/checkout",
                element: <PrivateRoute> <CheckOutPage /></PrivateRoute>
            },


            {
                path: "*",
                element: <ErrorPage />
            },
        ]
    },

    {
        path: "/dashboard",
        element: <DashBoard />,

        children: [
            {
                path: "my-profile",
                element: <MyProfile />,
            },
            {
                path: "my-review",
                element: <MyReview />,
            },
            {
                path: "all-users",
                element: <AllUsers />,
            },
            {
                path: "add-product",
                element: <AddProduct />,
            }, {
                path: "add-offer",
                element: <AddOffer />,
            },
            {
                path: "my-wallet",
                element: <MyWallet />,
            },
        ]

    },





])

export default routes