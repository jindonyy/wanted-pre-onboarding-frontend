import styled from 'styled-components';

const $Message = styled.p`
  font-size: ${({ theme }) => theme.font.size.xSmall};
  color: ${({ theme }) => theme.color.red[100]};
`;

export { $Message };
