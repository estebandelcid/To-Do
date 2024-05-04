import React from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [synchronizedItem, setSynchronizedItem] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = [];
        } else {
          parsedItems = JSON.parse(localStorageItems);
          setItem(parsedItems);
        }
        setLoading(false);
        setSynchronizedItem(true);
      } catch (error) {
        setLoading(false);
        setError(true + "Error");
      }
      return () => {};
    }, 1000);
  }, [synchronizedItem]);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  };

  const synchronize = () => {
    setLoading(true);
    setSynchronizedItem(false);
  };
  return { item, saveItems, loading, error, setLoading, synchronize };
};
