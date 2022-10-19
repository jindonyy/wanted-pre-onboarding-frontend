import Button from '@/components/Button';
import { debounce } from '@/utils/eventDelay';
import { INPUT_DELAY } from '@/constants/time';
import useInputValue from '@/hooks/useInputValue';
import { $Form, $AddInput } from '@/pages/TodoList/CreateTodoArea/CreateTodoArea.styled';
import { FormEvent } from 'react';
import { fetchTodoToCreate } from '@/api/todo';
import { hasFetchError } from '@/utils/error';

type CreateTodoAreaProp = {
  getTodos: () => Promise<void>;
};

export default function CreateTodoArea({ getTodos }: CreateTodoAreaProp) {
  const { inputValue, updateInputValue } = useInputValue({
    create: ''
  });

  const createTodo = async () => {
    const payload = {
      todo: inputValue.create
    };
    const response = await fetchTodoToCreate(payload);

    if (!hasFetchError(response.statusCode)) getTodos();
  };

  const handleCreateButton = (event: FormEvent) => {
    event.preventDefault();

    createTodo();
  };

  return (
    <$Form name="todo" onSubmit={handleCreateButton}>
      <$AddInput
        name="create"
        placeholder="할 일을 추가해주세요."
        required
        defaultValue={inputValue.create}
        onChange={debounce(updateInputValue, INPUT_DELAY)}
      />
      <Button type="submit" size="small">
        추가 +
      </Button>
    </$Form>
  );
}
