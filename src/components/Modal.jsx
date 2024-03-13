import React from 'react'
import ReactDom from 'react-dom'

export function Modal ({children}) {
    return ReactDom.createPortal(
      <div className="md:hidden w-full fixed flex flex-col justify-center items-center   text-neutral-100 top-0 right-0 left-0 bottom-0 bg-neutral-700 bg-opacity-10 backdrop-blur-3xl z-20">
        {children}
      </div>,
      document.getElementById("modal")
    );
}
