import {ShopRoute, HomeRoute, RegisterRoute, AuthRoute,AboutRoute, BooksRoute, NewsRoute, ContactsRoute} from './utils/consts'; //добавляем пути??
import ShopPage from './pages/ShopPage'; //добавляем страницу
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import AuthPage from './pages/AuthPage';
import AboutPage from './pages/AboutPage';
import BooksPage from './pages/BooksPage';
import NewsPage from './pages/NewsPage';
import ContactsPage from './pages/ContactsPage';

export const publicRoutes = [
    {
        path:ShopRoute,
        Element:ShopPage
    },
    {
        path:HomeRoute,
        Element:HomePage
    },
    {
        path:RegisterRoute,
        Element:RegisterPage

    },
    {
        path:AuthRoute,
        Element:AuthPage
    },
    {
        path:AboutRoute,
        Element:AboutPage
    },
    {
        path:BooksRoute,
        Element:BooksPage
    },
    {
        path: NewsRoute,
        Element: NewsPage
    },
    {
        path: ContactsRoute,
        Element: ContactsPage
    },


];

