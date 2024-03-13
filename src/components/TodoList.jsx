export const TodoList = (props) => {
  return (
    <ul className="w-11/12 flex flex-col items-center pt-8 pb-4 overscroll-y-contain overflow-y-auto scroll-smooth contenedor rounded-lg">
      {props.loading && props.onLoading()}
      {props.error && props.onError()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!!props.totalTodos &&
        !props.searchedTodos?.length &&
        props.onEmptySearch(props.searchValue)}
      {(!props.loading && !props.error) && props.searchedTodos.map(props.render)}
    </ul>
  );
};
