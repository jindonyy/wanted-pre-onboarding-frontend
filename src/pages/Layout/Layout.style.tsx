import styled from 'styled-components';

const $Container = styled.div`
  position: relative;
  width: 100%;
`;

const $Header = styled.header``;

const $Contents = styled.main`
  max-width: ${({ theme }) => `${theme.size.media.pc - 1}px`};
  margin: 0 auto;
  padding: 3rem 1.5rem;
`;

const $Footer = styled.footer``;

export { $Container, $Header, $Contents, $Footer };
