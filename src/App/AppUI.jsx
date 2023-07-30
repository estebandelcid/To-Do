import React from "react";
import { TodoCounter } from "../components/TodoCounter.jsx";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { ButtonCreateTodo } from "../components/ButtonCreateTodo";
import TodosLoading from "../components/TodosLoading";
import EmptyTodos from "../components/EmptyTodos.jsx";
import { TodoContext } from "../components/TodoContext.jsx";
import Modal from "../components/Modal.jsx";
import MobileButtonCreateTodo from "../components/MobileButtonCreateTodo";
import TodoForm from "../components/TodoForm";

const AppUI = () => {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <div className="grid h-screen w-screen place-items-center fixed">
        <div className=" grid lg:grid-cols-2 grid-cols-1 w-[90%] justify-items-center ">
          <div className=" max-lg:hidden grid grid-rows-1 h-[290px] p-8 place-items-center rounded-lg">
            <TodoForm />
          </div>

          <div className="flex flex-col h-[90%] w-full space-y-12  place-items-center items-center">
            <div className="space-y-6">
              <TodoCounter />
              <TodoSearch />
            </div>
            <div className=" grid place-content-center min-w-[350px] w-full max-w-md h-[350px] lg:max-h-80 lg:h-[500px] bg-neutral-600 rounded-lg bg-opacity-10 backdrop-blur-3xl ">
              <TodoList>
                {loading && <TodosLoading />}

                {error && <p>Hubo un error, lo sentimos.😬</p>}

                {!loading && searchedTodos == 0 && <EmptyTodos />}

                {searchedTodos.map((todo) => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>
            </div>

            <MobileButtonCreateTodo setOpenModal={setOpenModal} />

            {openModal && (
              <Modal>
                <TodoForm />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppUI;
