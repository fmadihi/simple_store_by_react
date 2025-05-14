import { createContext, useState } from "react";

export const shopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cardItems, setCardItems] = useState([]);
  const addItem = (itemId) => {
    if (!cardItems?.find((item) => item.id === itemId)){
      setCardItems([...cardItems, { id: itemId, count: 1 }]);
    }
 else {
      setCardItems(
        cardItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, count: item.count + 1 };
          }
          else return item
        })
      );
    }

  };
  const removeItem = (itemId) => {
      setCardItems(cardItems.map((item)=>{
          if(item.id === itemId){
              return {...item,count: item.count==0 ?0 :item.count - 1}
          }
          else {return item}
      }))
  };

  const contextValue = { cardItems, addItem, removeItem };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
