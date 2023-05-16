import { useEffect, useState } from 'react';

function EditOptions({ options, setSelected, selected, edit, toggleEdit }) {
  const [active, setActive] = useState(false);
  const [newOptions, setNewOptions] = useState(options);

  useEffect(() => {
    setNewOptions(options.filter((option) => option !== selected).sort());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setNewOptions(options.filter((option) => option !== selected).sort());
    // eslint-disable-next-line
  }, [selected]);

  useEffect(() => {
    if (!edit) {
      setActive(false);
    }
  }, [edit]);

  return (
    <button
      onClick={() => {
        setActive((prevState) => {
          return !prevState;
        });
        toggleEdit();
      }}
      className={
        (active && edit ? 'border-primary' : 'border-gray-100') +
        ' w-[500px] flex items-center h-12 px-5 relative border border-solid rounded-[5px]'
      }
    >
      <div className="flex justify-between w-full">
        <p className={(active && edit ? 'text-primary' : ' text-black') + ' font-inter font-medium leading-6 pointer'}>
          {selected}
        </p>
        <img src={active && edit ? '/images/icons/arrow-active.svg' : '/images/icons/arrow-inactive.svg'} alt="" />
      </div>
      <div
        className={
          (active && edit ? 'opacity-100' : 'opacity-0 pointer-events-none -translate-y-4') +
          ' absolute w-full top-full mt-2 left-0 border-[0.5px] py-2 bg-white border-solid border-gray-150 sidebar-shadow flex flex-col z-10 transition-all duration-150 rounded-[5px]'
        }
      >
        {newOptions.map((option, idx) => {
          return (
            <div
              key={idx}
              onClick={() => setSelected(option)}
              className="py-2 text-left pl-5 w-full text-mainText font-inter font-semibold leading-6 hover:bg-gray-200 hover:text-primary"
            >
              {option}
            </div>
          );
        })}
      </div>
    </button>
  );
}

export default EditOptions;
