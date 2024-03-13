import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTodos = () => {
  const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text
      .toLowerCase()
      .trim()
      .includes(searchValue.toLocaleLowerCase().trim())
  );

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    return saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    return saveTodos(newTodos);
  };
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.unshift({
      text,
      completed: false,
      id: crypto.randomUUID(),
    });
    return saveTodos(newTodos);
  };

  return {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    addTodo,
    loading,
    error,
    openModal,
    setOpenModal,
  };
};
