import { useState, useEffect } from "react";

const useLocalStorage = (key, initialData) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem(key);

    if (!storedData) {
      localStorage.setItem(key, JSON.stringify(initialData));
      setData(initialData);
    } else {
      setData(JSON.parse(storedData));
    }
  }, [key, initialData]);

  const updateLocalStorage = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, updateLocalStorage];
};

export default useLocalStorage;
