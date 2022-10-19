import styled from 'styled-components';

const $ListItem = styled.li`
  padding: 1.5rem;
  border-top: ${({ theme }) => `1px solid ${theme.color.grey[300]}`};
  & + & {
    border-top: ${({ theme }) => `1px solid ${theme.color.grey[200]}`};
  }
  :last-child {
    border-bottom: ${({ theme }) => `1px solid ${theme.color.grey[300]}`};
  }
`;

const $Form = styled.form`
  ${({ theme }) => theme.mixins.flexBox({ justify: 'space-between', align: 'center' })}
  gap: 1.5rem;
`;

const $TodoText = styled.p`
  flex: 1;
`;

const $ModificationInput = styled.input`
  flex: 1;
`;

const $ListButtonWrap = styled.div`
  ${({ theme }) => theme.mixins.flexBox({ justify: 'space-between' })}
  gap: 0.8rem;
`;

export { $ListItem, $Form, $TodoText, $ModificationInput, $ListButtonWrap };
