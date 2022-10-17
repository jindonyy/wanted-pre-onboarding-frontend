import ROUTE_URL from '@/router/routeURL';
import AuthRoute from '@/router/AuthRoute';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';

export const routes = [
  {
    element: <AuthRoute />,
    children: [
      { path: ROUTE_URL.BASE, element: <SignUp /> },
      { path: ROUTE_URL.SIGNUP, element: <SignUp /> },
      { path: ROUTE_URL.LOGIN, element: <Login /> }
    ]
  }
];
