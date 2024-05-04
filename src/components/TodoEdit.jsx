import React from "react";
import { MdModeEdit } from "react-icons/md";
import { useTodos } from "../hooks/useTodos";

export const TodoEdit = (props) => {
  const [disabled, setDisabled] = React.useState(true);
  const [inputValue, setInputValue] = React.useState(props.text);
  const focusInputRef = React.useRef();
  const {
    stateUpdaters: { editTodo },
  } = useTodos();
  const onSubmitUpdate = (event) => {
    event.preventDefault();
    const id = props.id;
    const newText = inputValue;
    editTodo(id, newText.trim());
    setDisabled(!disabled);
    focusInputRef.current.focus();
  };

  const onChange = (event) => {
    setInputValue(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };
  return (
    <form
      onSubmit={onSubmitUpdate}
      action=""
      className="w-full flex items-center"
    >
      <textarea
        className={`box-text w-[95%] text-white bg-transparent text-base break-words pr-8 border-none outline-none overflow-hidden resize-none  ${
          props.completed && "line-through opacity-20"
        }`}
        value={inputValue}
        onChange={onChange}
        readOnly={disabled}
        ref={focusInputRef}
        required
      />
      <button type="submit">
        <MdModeEdit
          size="1.8rem"
          className="absolute fill-white/70 top-1 right-10"
        />
      </button>
    </form>
  );
};
