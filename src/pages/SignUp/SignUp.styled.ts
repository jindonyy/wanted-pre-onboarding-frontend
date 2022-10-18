import styled from 'styled-components';
import { $TextInputWrap } from '@/components/common/TextInput/TextInput.styled';

const $Contents = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ justify: 'center' })};
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const $InputWrap = styled($TextInputWrap)`
  width: 24rem;
  & + & {
    margin-top: 1.5rem;
  }
`;

const $ButtonWrap = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ justify: 'center' })};
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
`;

export { $Contents, $InputWrap, $ButtonWrap };
