import React from 'react'
import ReactDom from 'react-dom'

function Modal ({children}) {
    return ReactDom.createPortal(
        <div 
        className=' fixed flex justify-center items-center  text-neutral-100 top-0 right-0 left-0 bottom-0 bg-transparent'
        >
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export default Modal;