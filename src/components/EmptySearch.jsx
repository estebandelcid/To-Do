export const EmptySearch = ({ searchValue }) => {
  return (
    <div className=" flex w-11/12 h-12 justify-center border mb-4 p-2 rounded-lg items-center font-bold ">
      <p className="text-center text-white">
        {`No results for: ${searchValue}`}
      </p>
    </div>
  );
};
