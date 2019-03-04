import App from './App';
import Home from './components/home';
import Form from './components/form';
import Contact from './components/contact';

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
        path: '/form',
        component: Form,
      },
      {
        path: '/contact',
        component: Contact,
      }
    ],
  },
];

export default routes;
