import { useEffect, useState } from 'react';
import { $Contents, $List } from '@/pages/TodoList/TodoList.styled';
import { fetchTodosToGet } from '@/api/todo';
import Layout from '@/pages/Layout';
import PageTitle from '@/components/PageTitle';
import CreateTodoArea from '@/pages/TodoList/CreateTodoArea';
import ListItem, { Todo } from '@/pages/TodoList/ListItem';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [modificationIndex, setModificationIndex] = useState<number | null>(null);

  const getTodos = async () => {
    const response = await fetchTodosToGet();
    setTodos(response);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Layout>
      <$Contents>
        <PageTitle>To Do List</PageTitle>
        <CreateTodoArea getTodos={getTodos} />
        <$List>
          {todos.map((todo: Todo, index: number) =>
            modificationIndex === index ? (
              <ListItem.Modification
                key={todo.id}
                todo={todo}
                getTodos={getTodos}
                cancelModification={() => setModificationIndex(null)}
              />
            ) : (
              <ListItem.Default
                key={todo.id}
                todo={todo}
                setModificationMode={() => setModificationIndex(index)}
                getTodos={getTodos}
              />
            )
          )}
        </$List>
      </$Contents>
    </Layout>
  );
}
