import styled from 'styled-components';
import { $TextInputWrap } from '@/components/common/TextInput/TextInput.styled';

const $Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const $Form = styled.form`
  margin-top: 40px; ;
`;

const $InputWrap = styled($TextInputWrap)`
  & + & {
    margin-top: 1.5rem;
  }
`;

const $ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
`;

export { $Contents, $Form, $InputWrap, $ButtonWrapper };
