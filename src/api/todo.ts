import { FETCH_OPTION, requestAPI } from '@/api/core';

type TodoToCreate = {
  todo: string;
};

type TodoToUpdate = {
  todo: string;
  isCompleted: boolean;
};

const getAuthorization = () => {
  const accessToken = localStorage.getItem('accessToken')?.split('"')[1];
  const authHeader = {
    Authorization: `Bearer ${accessToken}`
  };

  return authHeader;
};

export const fetchTodoToCreate = async (todo: TodoToCreate) => {
  const authHeader = getAuthorization();
  const response = await requestAPI(`/todos`, FETCH_OPTION.POST<TodoToCreate>(todo, authHeader));

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
    `/todos/${id}`,
    FETCH_OPTION.PUT<TodoToUpdate>(todo, authHeader)
  );

  return response;
};

export const fetchTodoToDelete = async (id: number) => {
  const authHeader = getAuthorization();
  const response = await requestAPI(`/todos/${id}`, FETCH_OPTION.DELETE(authHeader));

  return response;
};
