import React, { useState } from 'react';

function Modal({ children, active, handleClose }) {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit((prevState) => !prevState);
  };

  const closeModal = () => {
    if (edit) {
      toggleEdit();
    } else {
      handleClose();
    }
  };

  return (
    <div
      className={
        (active ? 'opacity-100' : 'opacity-0 pointer-events-none ') +
        ' fixed inset-0 bg-black  bg-opacity-60 flex items-center justify-center z-30 transition-all duration-150'
      }
      onClick={closeModal}
    >
      {React.cloneElement(children, { edit: edit, toggleEdit: toggleEdit })}
    </div>
  );
}

export default Modal;
