import styled from 'styled-components';
import { Link } from 'react-router-dom';

const $Link = styled(Link)`
  ${({ theme }) => theme.mixins.flexBox({ justify: 'center', align: 'center' })};
  min-width: 20rem;
  height: 4.6rem;
  padding: 0 1.5rem;
  font-size: ${({ theme }) => theme.font.size.base};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.palette.primary.initial};
  border-radius: 2.3rem;
  :hover {
    background: ${({ theme }) => theme.palette.primary.hover};
  }
  :disabled {
    background: ${({ theme }) => theme.palette.primary.disabled};
  }
`;

export { $Link };
