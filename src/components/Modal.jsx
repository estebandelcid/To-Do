import React from 'react'
import ReactDom from 'react-dom'

function Modal ({children}) {
    return ReactDom.createPortal(
      <div className="w-full fixed flex flex-col justify-center items-center lg:hidden  text-neutral-100 top-0 right-0 left-0 bottom-0 bg-neutral-700 bg-opacity-10 backdrop-blur-xl">
        {children}
      </div>,
      document.getElementById("modal")
    );
}

export default Modal;