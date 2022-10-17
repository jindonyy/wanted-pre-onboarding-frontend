import styled from 'styled-components';

const $Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export { $Title };
