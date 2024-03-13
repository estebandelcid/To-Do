export const MobileButtonCreateTodo = ({ setOpenModal }) => {
  return (
    <button
      className="md:hidden w-16 h-16 fixed bottom-4 right-4 rounded-full text-white grid place-content-center border-none text-xl font-bold z-10 bg-gradient-to-r from-[#9e57f4] to-[#2101a3] animate-bmove bg-[length:100px_100px]"
      onClick={
        //    (event) => {
        //        console.log('Your click')
        //        console.log(event)
        //        console.log(event.target)
        //    }
        () => {
          setOpenModal((state) => !state);
        }
      }
    >
      +
    </button>
  );
};
