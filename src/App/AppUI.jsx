import React from "react";
import { TodoCounter } from "../components/TodoCounter.jsx";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import TodosLoading from "../components/TodosLoading";
import EmptyTodos from "../components/EmptyTodos.jsx";
import { TodoContext } from "../context/TodoContext.js";
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
      <div className="grid h-screen w-screen place-items-center ">

        <div className=" grid grid-cols-1 w-[80%] justify-items-center ">
         
          <div className="flex flex-col h-[80%] w-full space-y-12 place-items-center items-center">
            <div className="w-full justify-center space-y-6">
              <TodoCounter />
              <TodoSearch />
            </div>
            <div className="flex justify-center min-w-[300px] w-full h-[300px] lg:max-h-[24rem] bg-texture bg-white/5 border-2 border-white border-opacity-[0.03] rounded-lg backdrop-filter backdrop-blur-3xl"
            >
              <TodoList>
                {loading && <TodosLoading />}

                {error && <p>Hubo un error, lo sentimos.</p>}

                {!loading && searchedTodos.length === 0 && <EmptyTodos />}

                {searchedTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
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

          <div className=" max-md:hidden w-full rounded-lg ">
            <TodoForm />
          </div>

        </div>
      </div>
    </>
  );
};

export default AppUI;
