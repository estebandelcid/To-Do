import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = ({children}) => {
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
    todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    return saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    return saveTodos(newTodos);
  };
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false,
    })
    return saveTodos(newTodos)
  }
  return (
  <TodoContext.Provider value={
    {   
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
    }
  }>
      {children}
  </TodoContext.Provider>
  )
};


export { TodoContext, TodoProvider };
