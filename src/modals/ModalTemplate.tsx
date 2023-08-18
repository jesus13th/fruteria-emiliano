import React, { ReactNode } from "react";
import './css/modal-template.css';

interface ModalProps{
    isOpen:boolean;
    onClose: ()=> void;
    title:string;
    children:ReactNode;
}
const Modal: React.FC<ModalProps>= ({isOpen, onClose, title, children}) => {
    if(!isOpen)
        return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <span>{title}</span>
                    <button onClick={onClose}>X</button>
                </div>
                <hr />
                {children}
            </div>
        </div>
    )
}
export default Modal;