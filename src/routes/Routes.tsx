import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Products from '../pages/productsPage/Products';
import ProductDetails from '../pages/productDetails/ProductDetails';
import Cart from '../pages/cart/Cart';
import CheckOut from '../pages/checkout/CheckOut';
import CheckOutProtected from '../protectedRoutes/CheckOutProtected';
import Success from '../pages/Success/Success';
import About from '../pages/about/About';
import ProductsManagement from '../pages/productManagement/ProductsManagement';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/products-management",
                element: <ProductsManagement />,
            },
            {
                path: "/products/:id",
                element: <ProductDetails />
            },
            {
                path: "/carts",
                element: <Cart />
            },
            {
                path: "/checkout/success",
                element: <Success />
            },
            {
                path: "/checkout",
                element: <CheckOutProtected>
                    <CheckOut />
                </CheckOutProtected>
            }
        ]
    },
]);

export default router;