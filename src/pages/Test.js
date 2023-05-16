import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function Test({ children }) {
  const [items, setItems] = useState(false);
  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0 });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });

  alert();

  return (
    <div className="h-screen w-screen bg-rose-500">
      <div className="pt-10 flex justify-center">
        <button
          className="mt-10 px-5 py-3 rounded-lg bg-white text-black font-medium"
          onClick={() =>
            setItems((prevState) =>
              prevState.length
                ? []
                : [
                    { y: -100, delay: 200 },
                    { y: -50, delay: 400 },
                    { y: 0, delay: 600 },
                  ],
            )
          }
        >
          {items.length ? 'mount' : 'unmount'}
        </button>
      </div>
      <div className="flex flex-col justify-center items-center mt-56">
        {transition(
          (style, item) => item && <animated.div style={style} className="w-40 h-40 bg-white rounded-lg shadow-lg" />,
        )}
      </div>
    </div>
  );
}

export default Test;
