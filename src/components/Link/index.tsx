import { $Link } from '@/components/Link/Link.styled';
import ROUTE_URL from '@/router/routeURL';

type ButtonProps = {
  children: React.ReactNode;
  to: keyof typeof ROUTE_URL;
};

export default function Link({ children, to, ...rest }: ButtonProps) {
  return (
    <$Link to={ROUTE_URL[to]} {...rest}>
      {children}
    </$Link>
  );
}
