import styled from 'styled-components';
import TextInput from '@/components/TextInput';

const $Form = styled.form`
  ${({ theme }) => theme.mixins.flexBox({ justify: 'center' })};
  gap: 1rem;
  width: 40rem;
  margin-top: 4rem;
`;

const $AddInput = styled(TextInput)`
  flex: 1;
`;

export { $Form, $AddInput };
