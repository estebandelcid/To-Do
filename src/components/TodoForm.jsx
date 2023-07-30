import React from "react";
import { TodoContext } from "../components/TodoContext";

const TodoForm = () => {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue.trim());
    setOpenModal(false);
    setNewTodoValue("");
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <>
      <h2 className="text-5xl mb-4 text-neutral-100 font-bold">
        Create new Task
      </h2>
      <form
        className="lg:w-[20rem] w-[90%] max-w-[20rem]
          lg:bg-transparent lg:items-start  px-8 lg:px-0 py-10 lg:py-0 flex justify-center items-center flex-col rounded-lg "
        id="myForm"
        onSubmit={onSubmit}
      >
        <label className="text-center font-bold text-neutral-100 mb-7">
          Task name
        </label>
        <input
          className=" w-full lg:w-full lg:min-h-10 max-h-16 bg-neutral-800 rounded-lg shadow-md text-neutral-100 text-center p-2 outline-none focus:outline-neutral-500 "
          placeholder="Study first course of Node.js"
          value={newTodoValue}
          onChange={onChange}
          required
        />
        <div className="flex justify-between items-center w-full mt-4">
          <button
            className=" cursor-pointer inline-block text-xl text-neutral-800 font-normal w-28 h-12 rounded-lg hover:border-2 border-red-800 hover:text-red-700 hover:border-solid lg:hidden"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>

          {/* change button */}
          <div
            className="w-28 h-12 rounded-lg animate-bmove"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1910236/pexels-photo-1910236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundSize: "200%",
            }}
          >
            <button
              className=" w-full h-full cursor-pointer inline-block text-neutral-100 font-bold rounded-lg border-none backdrop-blur-lg"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoForm;

// bg-[#4d017c]
// bg-gradient-to-r from-purple-500 to-pink-500
