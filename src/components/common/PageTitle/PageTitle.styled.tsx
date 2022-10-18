import styled from 'styled-components';

const $PageTitle = styled.h1`
  margin-bottom: 4rem;
  font-size: ${({ theme }) => theme.font.size.xLarge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export { $PageTitle };
