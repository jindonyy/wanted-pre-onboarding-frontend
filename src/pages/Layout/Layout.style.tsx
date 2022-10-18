import styled from 'styled-components';

const $Container = styled.div`
  position: relative;
  width: 100%;
`;

const $Header = styled.header``;

const $Contents = styled.main`
  max-width: 140rem;
  min-width: ${({ theme }) => theme.size.pc};
  margin: 0 auto;
`;

const $Footer = styled.footer``;

export { $Container, $Header, $Contents, $Footer };
