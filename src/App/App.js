import React from "react";
import { useTodos } from "../hooks/useTodos.js";
import { TodoCounter } from "../components/TodoCounter.jsx";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodosLoading } from "../components/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos.jsx";
import { Modal } from "../components/Modal.jsx";
import { MobileButtonCreateTodo } from "../components/MobileButtonCreateTodo";
import { TodoForm } from "../components/TodoForm";
import { EmptySearch } from "../components/EmptySearch.jsx";

function App() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    addTodo,
    searchValue,
    setSearchValue,
  } = useTodos();
  return (
    <>
      <div className="grid h-screen w-screen place-items-center ">
        <div className=" grid grid-cols-1 w-[80%] justify-items-center ">
          <div className="flex flex-col h-[80%] w-full space-y-12 place-items-center items-center">
            <div className="w-full justify-center space-y-6">
              <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}
                loading={loading}
              />
              <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                loading={loading}
              />
            </div>
            <div className="flex justify-center min-w-[300px] w-full h-[300px] lg:max-h-[24rem] bg-texture bg-white/5 border-2 border-white border-opacity-[0.03] rounded-lg backdrop-filter backdrop-blur-3xl">
              <TodoList
                loading={loading}
                error={error}
                totalTodos={totalTodos}
                searchedTodos={searchedTodos}
                searchValue={searchValue}
                onLoading={() => <TodosLoading />}
                onError={() => (
                  <p>There was an error, please reload the page.</p>
                )}
                onEmptyTodos={() => <EmptyTodos />}
                onEmptySearch={() => <EmptySearch searchValue={searchValue} />}
                render={todo => (
                  <TodoItem
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)} 
                  />
                )}
              />
            </div>

            <MobileButtonCreateTodo setOpenModal={setOpenModal} />

            {openModal && (
              <Modal>
                <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
              </Modal>
            )}
          </div>

          <div className=" max-md:hidden w-full rounded-lg ">
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
