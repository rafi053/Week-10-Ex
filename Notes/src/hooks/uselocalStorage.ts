import { useState, useEffect } from 'react';

interface UseLocalStorageState {
  key: string;
  initialValue: any;
}

const useLocalStorage = ({ key, initialValue }: UseLocalStorageState) => {
  const [value, setValue] = useState(initialValue);

  const getValueFromLocalStorage = () => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      } else {
        return initialValue;
      }
    } catch (error) {
      return initialValue;
    }
  };

  const saveValueToLocalStorage = (value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromLocalStorage = () => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setValue(getValueFromLocalStorage());
  }, []);

  useEffect(() => {
    saveValueToLocalStorage(value);
  }, [value]);

  return {value, saveValueToLocalStorage, removeFromLocalStorage, getValueFromLocalStorage};
   
 

 
};

export default useLocalStorage;