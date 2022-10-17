import ROUTE_URL from '@/router/routeURL';
import AuthRoute from '@/router/AuthRoute';
import Login from '@/pages/Login';

export const routes = [
  {
    element: <AuthRoute />,
    children: [
      { path: ROUTE_URL.BASE, element: <Login /> },
      { path: ROUTE_URL.LOGIN, element: <Login /> }
    ]
  }
];
