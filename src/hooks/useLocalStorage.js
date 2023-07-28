import React from 'react'

const useLocalStorage = (itemName, initialValue) => {
  
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    

    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItems = localStorage.getItem(itemName)
          let parsedItems;
          if(!localStorageItems) {
              localStorage.setItem(itemName, JSON.stringify(initialValue))
              parsedItems = []
          } else{
              parsedItems = JSON.parse(localStorageItems)
              setItem(parsedItems)
          }
          setLoading(false)
        } catch(error){
          setLoading(false)
          setError(true + 'Hubo un error')
        }
      }, 2000);
      
      
    }, [])
  
    
  
    const saveItems = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems))
      setItem(newItems)
    }
  
    return {item, saveItems, loading, setLoading}
  }

  export default useLocalStorage;

  
  // const defaultTodos = [
//   {text: 'Estudiar Backend', completed: false},
//   {text: 'Ver introducción de Bootstrap', completed: false},
//   {text: 'Crear una nueva App con Next', completed: true},
//   {text: 'Servir la cena', completed: false},
//   {text: 'Practica del Ingles de una hora diaria', completed: true},
// ]