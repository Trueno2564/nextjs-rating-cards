import React from 'react'
import { IoCloseCircle } from "react-icons/io5";

function Modal({ isVisible, onClose, children }) {
    if(!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
            <div className='w-[1000px]  h-[600px] flex flex-col'>
                <div className='bg-white p-2 rounded text-black flex flex-row-reverse'>
                    <button className='text-white text-xl  cursor-pointer absolute' onClick={() => onClose()}><IoCloseCircle style={{color: 'black',fontSize: '30px'}}/></button>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
