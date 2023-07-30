import {TiTick, TiTimes} from 'react-icons/ti'

const TodoItem = (props) => {
    return (
      <li className={`flex lg:w-[22rem] w-[20rem] justify-between bg-neutral-700 mb-4 p-2 rounded-lg items-center hover:scale-105 duration-200 ${props.completed && ' opacity-80'}`}>
        <span onClick={props.onComplete}>
          <TiTick
            size="2rem"
            className={`fill-[#2101a3] hover:fill-[#23a900] hover:scale-110 duration-300 ${
              props.completed && " fill-[#23a900]"
            }`}
          />
        </span>
        <p
          className={`text-neutral-100  ${
            props.completed && "line-through opacity-20"
          }`}
        >
          {props.text}
        </p>

        <span onClick={props.onDelete}>
          <TiTimes
            size="2rem"
            className="fill-neutral-500 hover:fill-red-700 hover:scale-110 duration-300"
          />
        </span>
      </li>
    );
}

export {TodoItem}