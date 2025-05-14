import React from "react";
import { useContext } from "react";
import { shopContext } from "../../context/shopContext";

const Products = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cardItems, addItem, removeItem } = useContext(shopContext);
  const isInCard = cardItems?.some((item) => item.id == id);
  //const isInCard = !!cardItems?.some((item) => item.id === id); // به boolean تبدیل می‌کنه
  return (
    <div className="col-3">
      <img src={productImage} />
      <h5 className="my-1 ">{productName}</h5>
      <div className="my-1">{price} $</div>
      <button className="btn btn-info" onClick={() => addItem(id)}>
        +
      </button>
      <span className="mx-2">
        {cardItems?.filter((row) => row.id === id)[0]?.count}
      </span>
      {isInCard==true && (
        <button className="btn btn-info" onClick={() => removeItem(id)}>
          -
        </button>
      )}
    </div>
  );
};

export default Products;
