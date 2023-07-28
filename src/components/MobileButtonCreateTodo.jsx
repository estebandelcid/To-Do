

const MobileButtonCreateTodo = ({setOpenModal}) => {
    return (
       <button 
       className="w-12 h-12 fixed bottom-4 right-4 bg-[#72367c] rounded-full text-white rotate-0 ease duration-200 hover:rotate-180 flex justify-center items-center border-none z-10"
       onClick={
        //    (event) => {
        //        console.log('Your click')
        //        console.log(event)
        //        console.log(event.target)
        //    }
        () => {
           setOpenModal(state => !state)
       }}
       >
           +
       </button>
    )
}

export default MobileButtonCreateTodo;