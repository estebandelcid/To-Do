import React from "react";
import { MdModeEdit } from "react-icons/md";

export const TodoEdit = (props) => {
  const [disabled, setDisabled] = React.useState(true);
  const initialValue = props.text;
  const [inputValue, setInputValue] = React.useState(initialValue);
  const focusInputRef = React.useRef(null);

  const handleClick = () => {
    focusInputRef.current.focus();
    setDisabled(!disabled);
  };
  const onSubmitUpdate = (event) => {
    event.preventDefault();
    const id = props.id;
    const newText = inputValue;
    props.editTodo(id, newText.trim());
    handleClick();
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };
  React.useEffect(() => {
    const adjustTextareaHeight = () => {
      const textareaElements = document.querySelectorAll(".box-text");
      textareaElements.forEach((element) => {
        element.style.height = `${element.scrollHeight}px`;
      });
    };
    adjustTextareaHeight();
    window.addEventListener("resize", adjustTextareaHeight);
    return () => {
      window.removeEventListener("resize", adjustTextareaHeight);
    };
  }, []);
  
  return (
    <form onSubmit={onSubmitUpdate} className="w-full flex items-center">
      <textarea
        className={`box-text relative w-[90%] text-white bg-transparent text-base break-words pr-8 border-none outline-none overflow-hidden resize-none  ${
          props.completed && "line-through opacity-20 transition-all "
        }`}
        name="updateText"
        type="text"
        rows="1"
        value={inputValue}
        onChange={onChange}
        readOnly={disabled}
        ref={focusInputRef}
        required
      />
      {disabled && (
        <button
          type="button"
          onClick={handleClick}
          className="absolute right-10 cursor-pointer"
        >
          <span>
            <MdModeEdit
              size="2rem"
              className="fill-white/70 hover:fill-[#ff2776] hover:scale-110 duration-300"
            />
          </span>
        </button>
      )}
      {!disabled && (
        <button
          type="submit"
          className="absolute right-10 bottom-2 text-white/60 border border-white rounded-md px-2 hover:bg-white/10 hover:text-white/80 duration-300"
        >
          Save
        </button>
      )}
    </form>
  );
};
