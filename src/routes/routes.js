import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";

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
                path: "/contact",
                element: <Contact />
            },
        ]
    }
])

export default routes