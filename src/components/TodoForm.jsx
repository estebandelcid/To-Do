import React from "react";
import { VscClose } from "react-icons/vsc";

export const TodoForm = ({ addTodo, setOpenModal }) => {
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
      <h2 className="text-5xl mb-4 text-white font-bold md:hidden">
        Create new Task
      </h2>
      <form
        className="w-full md:items-start md:flex-row md:px-0 py-10 flex justify-between items-center flex-col rounded-lg"
        id="myForm"
        onSubmit={onSubmit}
      >
        <p className="text-center font-bold text-white mb-7 md:hidden">
          Task name
        </p>

        <textarea
          className="md:hidden w-[90%] h-28 min-h-[44px] max-h-60 bg-white/5 bg-opacity-40 bg-texture backdrop-blur-3xl rounded-lg  text-white p-2 outline-none focus:placeholder:text-white/20 border-2 border-white border-opacity-[0.02]"
          placeholder="Study first course of Node.js"
          value={newTodoValue}
          onChange={onChange}
          required
        />
        <div className="relative w-[87%] flex items-center text-white/60 focus-within:text-white/30">
          <VscClose
            size="2rem"
            className="hidden md:flex absolute ml-3 pointer-events-none z-10 rotate-45"
          />
          <input
            className="hidden md:flex w-full h-11 min-h-[44px] max-h-24 justify-center items-center bg-white/5 bg-opacity-40 bg-texture backdrop-blur-2xl rounded-lg text-white  pl-12 p-2 outline-none placeholder:font-bold placeholder:text-lg focus:placeholder:text-white/20 border-2 border-white border-opacity-[0.02]"
            placeholder="Create new Task"
            autoComplete="on"
            autoCorrect="on"
            value={newTodoValue}
            onChange={onChange}
            required
          />
        </div>

        <div className="flex justify-between items-center mt-4 space-x-4 md:w-[10%] md:mt-0 md:justify-end md:space-x-0">
          <button
            className="cursor-pointer inline-block text-xl text-white font-bold w-28 h-12 rounded-lg hover:bg-white/10 hover:text-white/80 transition duration-300 md:hidden"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <div
            className="w-28 h-11 rounded-lg animate-bmove bg-button"
            style={{
              // backgroundImage:
              // 'url(../assets/bbutton.jpg)',
              backgroundSize: "200%",
            }}
          >
            <button
              className="w-full h-full cursor-pointer inline-block text-white font-bold rounded-lg border-none backdrop-blur-lg bg-texture"
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
