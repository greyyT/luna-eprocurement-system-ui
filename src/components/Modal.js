import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function Modal({ children, active, handleClose }) {
  const [edit, setEdit] = useState(false);

  const transition = useTransition(active, {
    from: { opacity: 0, duration: 200 },
    enter: { opacity: 1, duration: 200 },
    leave: { opacity: 0, duration: 200 },
  });

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
    <>
      {transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="fixed inset-0 bg-black  bg-opacity-60 flex items-center justify-center z-30 transition-all duration-150"
              onClick={closeModal}
            >
              {React.cloneElement(children, { edit: edit, toggleEdit: toggleEdit })}
            </animated.div>
          ),
      )}
    </>
  );
}

export default Modal;
