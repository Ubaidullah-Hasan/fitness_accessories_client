import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Products from '../pages/productsPage/Products';
import ProductDetails from '../pages/productDetails/ProductDetails';
import Cart from '../pages/cart/Cart';

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
                path: "/products",
                element: <Products />,
            },
            {
                path: "/products/:id",
                element: <ProductDetails />
            },
            {
                path: "/carts",
                element: <Cart />
            }
        ]
    },
]);

export default router;