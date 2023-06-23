import React, { useCallback, useEffect, useState } from 'react';
import useMountTransition from '~/utils/useMountTransition';

const ModalAddProduct = React.memo(({ handleClose, edit, toggleEdit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [SKU, setSKU] = useState('');
  const [productCode, setProductCode] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [weight, setWeight] = useState('');
  const [material, setMaterial] = useState('');
  const [color, setColor] = useState('');

  const vendors = ['Vendor A', 'Vendor B', 'Vendor C', 'Vendor D'];
  const [selectedVendors, setSelectedVendors] = useState([]);
  const [availableVendors, setAvailableVendors] = useState(vendors);
  const [selectState, setSelecState] = useState(false);

  const hasTransitionedIn = useMountTransition(selectState, 200);

  const handleSelectChange = (vendor) => {
    setSelectedVendors((prevState) => [...prevState, vendor].sort());

    const remainingOptions = availableVendors.filter((option) => option !== vendor);
    setAvailableVendors(remainingOptions);
  };

  const handleRemoveOption = (vendor) => {
    const updatedVendors = selectedVendors.filter((selectedOption) => selectedOption !== vendor);
    setSelectedVendors(updatedVendors);
    setAvailableVendors([...availableVendors, vendor].sort());
  };

  useEffect(() => {
    if (!edit) {
      setSelecState(false);
    }
  }, [edit]);

  const handleClick = useCallback(() => {
    setSelecState((prevState) => !prevState);
    toggleEdit();
  }, [toggleEdit]);

  return (
    <div
      className="w-[939px] max-h-[80vh] bg-white rounded-lg py-12 pl-14 pr-11 overflow-y-scroll"
      onClick={(ev) => ev.stopPropagation()}
    >
      <div className="flex justify-between w-full">
        <h1 className="font-inter font-semibold text-2xl text-black">Create a new product</h1>
        <img src="/images/icons/close.svg" alt="" onClick={handleClose} className="cursor-pointer p-2 hover:" />
      </div>
      <div className="flex justify-center mt-9">
        <div className="flex flex-col items-center justify-center h-[180px] w-[389px] bg-[#F4F7FF] border border-dashed border-spacing-4 border-primary rounded-md">
          <img src="/images/upload.png" className="h-10 cursor-pointer" alt="" />
          <p className="mt-[14px] text-xs font-inter">
            <span className="text-primary cursor-pointer">Click to upload</span> or drag and drop
          </p>
          <p className="mt-1 text-center text-xs font-inter">
            SVG, PNG, JPG or GIF
            <br />
            (max, 800 X 800px)
          </p>
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-5">
        <input
          type="text"
          placeholder="Name"
          className="w-full font-inter p-4 outline-none border border-solid border-[#F0F0F0] rounded-[5px] placeholder:text-[#637381]"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full font-inter p-4 outline-none border border-solid border-[#F0F0F0] rounded-[5px] placeholder:text-[#637381]"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <button
          onClick={handleClick}
          className={`relative flex justify-between items-center gap-4 w-full font-inter p-4 outline-none border border-solid ${
            selectState ? 'border-primary' : 'border-[#F0F0F0]'
          } rounded-[5px]`}
        >
          <div className="flex gap-3">
            {selectedVendors.length === 0 ? (
              <p className="text-[#637381]">Vendor</p>
            ) : (
              selectedVendors.map((vendor) => (
                <div
                  key={vendor}
                  className="py-[6px] px-[10px] flex gap-1 bg-[#EEEEEE] rounded-[3px]"
                  onClick={(ev) => ev.stopPropagation()}
                >
                  <div>{vendor}</div>
                  <img
                    src="/images/icons/close.svg"
                    alt=""
                    className="w-4"
                    onClick={() => handleRemoveOption(vendor)}
                  />
                </div>
              ))
            )}
          </div>
          <img
            src="/images/icons/arrow.svg"
            alt=""
            className={`transform ${selectState ? 'rotate-90' : 'rotate-0'} transition-all`}
          />
          {availableVendors.length !== 0 && (selectState || hasTransitionedIn) && (
            <div
              className={`multiple-select-box ${hasTransitionedIn && 'in'} ${selectState && 'visible'}`}
              onClick={(ev) => ev.stopPropagation()}
            >
              {availableVendors.map((vendor) => {
                return (
                  <div
                    value={vendor}
                    key={vendor}
                    onClick={() => handleSelectChange(vendor)}
                    className="text-[#637381] hover:text-primary hover:bg-[#F5F7FD] cursor-pointer p-4 text-left"
                  >
                    {vendor}
                  </div>
                );
              })}
            </div>
          )}
        </button>
        <div className="flex gap-14">
          <input
            type="text"
            placeholder="SKU"
            className="w-full font-inter p-4 outline-none border border-solid border-[#F0F0F0] rounded-[5px] placeholder:text-[#637381]"
            value={SKU}
            onChange={(ev) => setSKU(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Product Code"
            className="w-full font-inter p-4 outline-none border border-solid border-[#F0F0F0] rounded-[5px] placeholder:text-[#637381]"
            value={productCode}
            onChange={(ev) => setProductCode(ev.target.value)}
          />
        </div>
        <div className="flex gap-14">
          <input
            type="text"
            placeholder="Category"
            className="w-full font-inter p-4 outline-none border border-solid border-[#F0F0F0] rounded-[5px] placeholder:text-[#637381]"
            value={category}
            onChange={(ev) => setCategory(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Brand"
            className="w-full font-inter p-4 outline-none border border-solid border-[#F0F0F0] rounded-[5px] placeholder:text-[#637381]"
            value={brand}
            onChange={(ev) => setBrand(ev.target.value)}
          />
        </div>
        <div className="flex gap-14">
          <input
            type="text"
            placeholder="Dimensions"
            className="w-full font-inter p-4 outline-none border border-solid border-[#F0F0F0] rounded-[5px] placeholder:text-[#637381]"
            value={dimensions}
            onChange={(ev) => setDimensions(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Weight"
            className="w-full font-inter p-4 outline-none border border-solid border-[#F0F0F0] rounded-[5px] placeholder:text-[#637381]"
            value={weight}
            onChange={(ev) => setWeight(ev.target.value)}
          />
        </div>
        <div className="flex gap-14">
          <input
            type="text"
            placeholder="Material"
            className="w-full font-inter p-4 outline-none border border-solid border-[#F0F0F0] rounded-[5px] placeholder:text-[#637381]"
            value={material}
            onChange={(ev) => setMaterial(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Color"
            className="w-full font-inter p-4 outline-none border border-solid border-[#F0F0F0] rounded-[5px] placeholder:text-[#637381]"
            value={color}
            onChange={(ev) => setColor(ev.target.value)}
          />
        </div>
      </div>
      <button className="flex justify-center items-center h-14 w-full mt-10 rounded-[5px] placeholder:text-[#637381] text-white font-roboto leading-5 bg-primary">
        Submit
      </button>
    </div>
  );
});

export default ModalAddProduct;
