import { createPortal } from "react-dom";
import { useEffect } from "react";
import { BackDrop, Mod } from './Modal.styled'



const modalRoot = document.querySelector('#modal-root')
const body = document.querySelector('body');


export function Modal({children,onToggle}) {



useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    body.classList.add('hidden-scroll');

    return () => {
    window.removeEventListener('keydown', onKeyDown);
    body.classList.remove('hidden-scroll');
    };
}, []);

const onKeyDown = e => {
    if (e.code === 'Escape') {
   onToggle();
  }
};

const onClickBackDrop = e => {
  if (e.target === e.currentTarget) {
    onToggle();
  }
};

return createPortal(
  <BackDrop onClick={onClickBackDrop}>
    <Mod>
      {children}
    </Mod>
  </BackDrop>,
  modalRoot
);
}