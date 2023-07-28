import React from "react";
import { TodoContext } from "../components/TodoContext";

const TodoForm = () => {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue.trim());
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form
      className="w-[90%] max-w-[300px] bg-neutral-100 px-8 py-10 flex justify-center items-center flex-col rounded-lg "
      onSubmit={onSubmit}
    >
      <label className="text-center font-bold text-black mb-7">
        Write your new ToDo!
      </label>
      <textarea
        className="bg-neutral-100 border-solid border-2 border-neutral-700 rounded-lg shadow-md text-black text-xl text-center p-3 h-24 w-[calc(100%-25px)] placeholder:text-neutral-300 font-normal focus:outline-[#72367c]"
        placeholder="Study first course of Node.js"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="flex justify-between items-center w-full mt-4">
        <button
          className=" cursor-pointer inline-block text-xl text-neutral-800 font-normal w-28 h-12 rounded-lg border-none hover:text-red-700 hover:bg-red-300 hover:border-solid"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="bg-[#72367c] cursor-pointer inline-block text-xl font-normal w-28 h-12 rounded-lg border-none"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
