export const TodoList = (props) => {
  return (
    <ul className="w-11/12 flex flex-col items-center pt-8 pb-4 overscroll-y-contain overflow-y-auto scroll-smooth contenedor rounded-lg">
      {props.children}
    </ul>
  );
};
