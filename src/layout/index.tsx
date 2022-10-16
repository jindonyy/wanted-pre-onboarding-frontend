import { ReactNode } from 'react';
import { Wrapper, Header, Contents, Footer } from './index.style';

interface LayoutProps {
  header: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

function Layout({ header, children, footer, ...props }: LayoutProps) {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Contents>{children}</Contents>
      {footer && <Footer>{footer}</Footer>}
    </Wrapper>
  );
}

export default Layout;
