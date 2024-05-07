import { VscCheck, VscClose } from 'react-icons/vsc'
import { TodoEdit } from './TodoEdit';

export const TodoItem = (props) => {
    return (
      <li className={`relative flex w-[95%] min-w-60 border mb-4 p-2 rounded-lg items-center duration-20 ${props.completed && 'opacity-80 transition-opacity'}`}
      >
        <span onClick={props.onComplete}>
          <VscCheck
            size="1.5rem"
            className={`fill-white/70 mr-2 hover:fill-green-500 hover:scale-110 duration-300 cursor-pointer ${
              props.completed && "fill-green-500/90"
            }`}
          />
        </span>
        <TodoEdit id={props.id} text={props.text} completed={props.completed} editTodo={props.editTodo}/>
        {/* <p
          className={`w-[97%] text-white text-base break-words pr-8  ${
            props.completed && "line-through opacity-20"
          }`}
        >
          {props.text}
        </p> */}
        
        <span onClick={props.onDelete} className='absolute right-2'>
          <VscClose
            size="2rem"
            className="fill-white/70 hover:fill-red-700 hover:scale-110 duration-300 cursor-pointer"
          />
        </span>
      </li>
    );
}
