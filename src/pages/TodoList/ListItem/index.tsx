import {
  $ListItem,
  $Form,
  $TodoText,
  $ModificationInput,
  $ListButtonWrap
} from '@/pages/TodoList/ListItem/ListItem.styled';
import Button from '@/components/common/Button';
import { debounce } from '@/utils/eventDelay';
import { INPUT_DELAY } from '@/constants/time';
import { FormEvent, useState } from 'react';
import useInputValue from '@/hooks/useInputValue';
import { hasFetchError } from '@/utils/error';
import { fetchTodoToDelete, fetchTodoToUpdate } from '@/api/todo';

export type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

type DefaultProp = {
  todo: Todo;
  setModificationMode: () => void;
  getTodos: () => Promise<void>;
};

function Default({ todo, setModificationMode, getTodos }: DefaultProp) {
  const deleteTodo = async () => {
    const response = await fetchTodoToDelete(todo.id);

    if (!hasFetchError(response.statusCode)) getTodos();
  };

  return (
    <$ListItem>
      <$Form>
        <$TodoText>{todo.todo}</$TodoText>
        {todo.isCompleted ? '✅' : '❎'}
        <$ListButtonWrap>
          <Button size="small" onClick={setModificationMode}>
            수정
          </Button>
          <Button size="small" color="white" onClick={deleteTodo}>
            삭제
          </Button>
        </$ListButtonWrap>
      </$Form>
    </$ListItem>
  );
}

type ModificationProp = {
  todo: Todo;
  cancelModification: () => void;
  getTodos: () => Promise<void>;
};

function Modification({ todo, cancelModification, getTodos }: ModificationProp) {
  const { inputValue, updateInputValue } = useInputValue({
    modify: todo.todo
  });
  const [isCompleted, setCompleted] = useState(todo.isCompleted);

  const updateTodo = async () => {
    const payload = {
      todo: inputValue.modify,
      isCompleted
    };
    const response = await fetchTodoToUpdate(payload, todo.id);

    if (!hasFetchError(response.statusCode)) getTodos();
  };

  const handleSubmitButton = (event: FormEvent) => {
    event.preventDefault();

    updateTodo();
    cancelModification();
  };

  return (
    <$ListItem>
      <$Form onSubmit={(event: FormEvent) => handleSubmitButton(event)}>
        <$ModificationInput
          type="text"
          name="modify"
          defaultValue={inputValue.modify}
          onChange={debounce(updateInputValue, INPUT_DELAY)}
        />
        <$ListButtonWrap>
          <Button size="small" color="black" onClick={() => setCompleted(!isCompleted)}>
            {isCompleted ? '완료' : '미완료'}
          </Button>
          <Button type="submit" size="small">
            제출
          </Button>
          <Button size="small" color="white" onClick={cancelModification}>
            취소
          </Button>
        </$ListButtonWrap>
      </$Form>
    </$ListItem>
  );
}

const ListItem = {
  Default,
  Modification
};

export default ListItem;
