import ROUTE_URL from '@/router/routeURL';
import AuthRoute from '@/router/AuthRoute';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';
import Todo from '@/pages/Todo';

export const routes = [
  {
    element: <AuthRoute />,
    children: [
      { path: ROUTE_URL.BASE, element: <Login /> },
      { path: ROUTE_URL.SIGNUP, element: <SignUp /> },
      { path: ROUTE_URL.LOGIN, element: <Login /> },
      { path: ROUTE_URL.TODO, element: <Todo /> }
    ]
  }
];
