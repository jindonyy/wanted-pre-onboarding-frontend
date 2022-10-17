import { Navigate, Outlet, useLocation } from 'react-router-dom';
import ROUTE_URL from '@/router/routeURL';

export default function AuthRoute() {
  const { pathname } = useLocation();
  const hasAccessToken = () => !!localStorage.getItem('accessToken');
  const isLogin = hasAccessToken();
  const isLoginPage = pathname === ROUTE_URL.BASE || pathname === ROUTE_URL.LOGIN;

  if (!isLogin && !isLoginPage) {
    return <Navigate to={ROUTE_URL.BASE} replace />;
  }

  if (isLogin && isLoginPage) {
    return <Navigate to={ROUTE_URL.TODO_LIST} replace />;
  }

  return <Outlet />;
}
