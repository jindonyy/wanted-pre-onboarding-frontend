import styled from 'styled-components';

const $TextInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const $Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.small};
`;

const $TextInput = styled.input`
  width: 25rem;
  padding: 0.8rem 1rem;
  border: ${({ theme }) => `1px solid ${theme.color.grey[300]}`};
  border-radius: 0.3rem;
  &::placeholder {
    color: ${({ theme }) => theme.palette.placeholder};
  }
`;

export { $TextInputWrap, $Label, $TextInput };
