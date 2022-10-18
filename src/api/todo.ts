import { FETCH_OPTION, requestAPI } from '@/api/core';

type Todo = {
  todo: string;
};

interface TodoToUpdate extends Todo {
  isCompleted: boolean;
}

const getAuthorization = () => {
  const accessToken = localStorage.getItem('accessToken')?.split('"')[1];
  const authHeader = {
    Authorization: `Bearer ${accessToken}`
  };

  return authHeader;
};

export const fetchTodoToCreate = async (todo: Todo) => {
  const authHeader = getAuthorization();

  const response = await requestAPI(`/todos`, FETCH_OPTION.POST<Todo>(todo, authHeader));

  return response;
};

export const fetchTodosToGet = async () => {
  const authHeader = getAuthorization();
  const response = await requestAPI(`/todos`, FETCH_OPTION.GET(authHeader));

  return response;
};

export const fetchTodoToUpdate = async (todo: TodoToUpdate, id: number) => {
  const authHeader = getAuthorization();
  const response = await requestAPI(
    `/todos/:${id}`,
    FETCH_OPTION.PUT<TodoToUpdate>(todo, authHeader)
  );

  return response;
};

export const fetchTodoToDelete = async (id: number) => {
  console.log(id);
  const authHeader = getAuthorization();
  const response = await requestAPI(`/todos/:${id}`, FETCH_OPTION.DELETE(authHeader));

  return response;
};
