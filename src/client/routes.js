import App from './App';
import Home from './components/pages/home';
import Books from './components/pages/books';
import Contact from './components/pages/contact';

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
      }
    ],
  },
];

export default routes;
