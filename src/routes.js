import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Auth from './pages/Auth'
import Product from './pages/Product'
import Shop from './pages/Shop'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Compotent: Admin
    },
    {
        path: BASKET_ROUTE,
        Compotent: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Compotent: Shop
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Compotent:  <Product/>
    },
    {
        path: LOGIN_ROUTE,
        Compotent: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Compotent: <Auth/>
    }
]