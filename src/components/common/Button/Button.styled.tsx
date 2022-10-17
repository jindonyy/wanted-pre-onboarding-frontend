import styled from 'styled-components';

const $Button = styled.button`
  ${({ theme }) => theme.mixins.flexBox({ justify: 'center', align: 'center' })};
  height: 3.6rem;
  padding: 0 1.4rem;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.palette.primary.initial};
  border-radius: 1.8rem;
  :hover {
    background: ${({ theme }) => theme.palette.primary.hover};
  }
  :disabled {
    background: ${({ theme }) => theme.palette.primary.disabled};
  }
`;

export { $Button };
