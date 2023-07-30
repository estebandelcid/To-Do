
const TodoList = (props) => {
    return (
      <ul className="  w-[26rem] flex flex-col items-center pt-8 pb-4  overscroll-y-contain overflow-y-auto scroll-smooth no-scrollbar rounded-lg">
        {props.children}
      </ul>
    );
}

export {TodoList}