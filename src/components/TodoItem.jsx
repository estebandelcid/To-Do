import {TiTick, TiTimes} from 'react-icons/ti'

const TodoItem = (props) => {
    return (
       <li className="flex w-[20rem] justify-between bg-slate-100 mb-4 p-2 rounded-lg items-center">
           <span
           onClick={props.onComplete}

           >
               <TiTick 
               size='2rem' 
               className={`fill-orange-300 hover:fill-green-500 hover:scale-110 duration-300 ${props.completed && ' fill-green-500'  }`}
               />

            </span>
           <p className={`${props.completed && 'line-through opacity-20'}`}>{props.text}</p>


           
           <span
           onClick={props.onDelete}
           >
               <TiTimes size='2rem' className='fill-neutral-500 hover:fill-red-700 hover:scale-110 duration-300' />
           </span>
       </li>
    )
}

export {TodoItem}