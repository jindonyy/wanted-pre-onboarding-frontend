import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Header = styled.header``;

const Contents = styled.main`
  max-width: 1400px;
  min-width: ${({ theme }) => theme.size.pc};
  margin: 0 auto;
`;

const Footer = styled.footer``;

export { Wrapper, Header, Contents, Footer };
