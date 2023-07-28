import React from 'react'
import { TodoCounter } from '../components/TodoCounter.jsx';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { ButtonCreateTodo } from '../components/ButtonCreateTodo';
import engranes from '../assets/engranajes.png'
import { CreateBar } from '../components/CreateBar';
import TodosLoading from '../components/TodosLoading'
import EmptyTodos from '../components/EmptyTodos.jsx';
import { TodoContext } from '../components/TodoContext.jsx';
import Modal from '../components/Modal.jsx';
import MobileButtonCreateTodo from '../components/MobileButtonCreateTodo'
import TodoForm from '../components/TodoForm'

const AppUI = () => {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
 } = React.useContext(TodoContext)
    return (
        <>
        <div className="grid h-screen w-full place-items-center ">
        <div className="grid grid-cols-2 w-[90%] justify-items-center">
          <div className="grid grid-rows-3 h-[90%]  bg-white p-8 items-center place-self-center rounded-lg shadow-xl">
            <p className=" text-3xl mb-4 text-[#72367c] font-bold">
              Create new Task
            </p>
            <CreateBar />
            {/* <TodoForm /> */}
            <ButtonCreateTodo />
            <div className="flex self-center mt-4 ">
              <img
                src={engranes}
                alt="meeting-ideas"
                className="object-cover h-[350px] mb-4"
              />
            </div>
          </div>

          <div className="flex flex-col h-[90%]  space-y-12  place-self-center">
            <div className="space-y-6">
              <TodoCounter/>
              <TodoSearch/>
            </div>
                  <TodoList>
                  {loading && <TodosLoading />}

                  {error && <p>Hubo un error, lo sentimos.😬</p>}

                  {(!loading && searchedTodos == 0) && <EmptyTodos />}

                  {searchedTodos.map((todo) => (
                    <TodoItem
                      key={todo.text}
                      text={todo.text}
                      completed={todo.completed}
                      onComplete={()  => completeTodo(todo.text)}
                      onDelete={() => deleteTodo(todo.text)}
                    />
                  ))}
                  </TodoList>
                  <MobileButtonCreateTodo 
                  setOpenModal={setOpenModal}
                  />

                  {openModal && 
                   ( <Modal>
                      <TodoForm />
                    </Modal>)
                  }
          </div>
        </div>
      </div>
        </>
    )
}

export default AppUI;