import { ReactNode } from 'react';
import { $Container, $Header, $Contents, $Footer } from '@/pages/Layout/Layout.style';

interface LayoutProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

function Layout({ header, children, footer, ...rest }: LayoutProps) {
  return (
    <$Container {...rest}>
      {header && <$Header>{header}</$Header>}
      <$Contents>{children}</$Contents>
      {footer && <$Footer>{footer}</$Footer>}
    </$Container>
  );
}

export default Layout;
