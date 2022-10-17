import { ReactNode } from 'react';
import { Wrapper, Header, Contents, Footer } from '@/pages/Layout/Layout.style';

interface LayoutProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

function Layout({ header, children, footer, ...rest }: LayoutProps) {
  return (
    <Wrapper {...rest}>
      {header && <Header>{header}</Header>}
      <Contents>{children}</Contents>
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  );
}

export default Layout;
