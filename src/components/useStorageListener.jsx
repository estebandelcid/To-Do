import React from "react";

export const useStorageListener = (synchronizeTodos) => {
  const [storage, setStorage] = React.useState(false);

  React.useEffect(() => {
    const onChange = (change) => {
      if (change.key === "TODOS_V1") {
        setStorage(true);
      }
    };
    window.addEventListener("storage", onChange);

    return () => {
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const toggleShow = () => {
    synchronizeTodos();
    setStorage(false);
  };
  return {
    show: storage,
    toggleShow,
  };
};
