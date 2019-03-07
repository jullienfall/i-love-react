import App from './App';
import Home from './components/pages/home';
import Books from './components/pages/books';
import Contact from './components/pages/contact';
import AddBook from './components/pages/addBook';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/books',
        component: Books,
      },
      {
        path: '/contact',
        component: Contact,
      },
      {
        path: '/add-book',
        component: AddBook,
      }
    ],
  },
];

export default routes;
