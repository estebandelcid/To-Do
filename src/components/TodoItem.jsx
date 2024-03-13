import { VscCheck, VscClose } from 'react-icons/vsc'

export const TodoItem = (props) => {
    return (
      <li className={`relative flex w-[95%] min-w-60 border mb-4 p-2 rounded-lg items-center duration-20 ${props.completed && 'opacity-80'}`}
      >
        <span onClick={props.onComplete}>
          <VscCheck
            size="1.5rem"
            className={`fill-white/70 mr-2 hover:fill-green-500 hover:scale-110 duration-300 ${
              props.completed && "fill-green-500/90"
            }`}
          />
        </span>
        <p
          className={`w-[97%] text-white break-words pr-8  ${
            props.completed && "line-through opacity-20"
          }`}
        >
          {props.text}
        </p>

        <span onClick={props.onDelete} className='absolute right-2'>
          <VscClose
            size="2rem"
            className="fill-white/70 hover:fill-red-700 hover:scale-110 duration-300"
          />
        </span>
      </li>
    );
}
