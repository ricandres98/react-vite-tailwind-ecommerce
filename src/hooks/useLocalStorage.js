import React, { useState } from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue);

  React.useEffect(() => {
    const itemAtLocalStorage = JSON.parse(localStorage.getItem(itemName));

    if (itemAtLocalStorage) {
      setItem(itemAtLocalStorage);
    } else {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
    }
  }, [itemName]);

  const saveItem = (payload) => {
    localStorage.setItem(itemName, JSON.stringify(payload));
    setItem(payload);
  };

  return {
    item,
    saveItem,
  };
};

export { useLocalStorage };
