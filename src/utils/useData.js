import { useState } from 'react';

const useData = () => {
  const getData = () => {
    const dataString = sessionStorage.getItem('data');
    const userData = JSON.parse(dataString);
    return userData;
  };

  const [data, setData] = useState(getData());

  const saveData = (userData) => {
    localStorage.setItem('data', JSON.stringify(userData));
    setData(userData);
  };

  return {
    data,
    setData: saveData,
  };
};

export default useData;
