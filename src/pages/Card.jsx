import React from 'react';
import { useContext } from "react";
import { Product } from '../assets/data';
import { shopContext } from '../context/shopContext';
import Products from './product/Products';

const Card = () => {

    const {cardItems} = useContext(shopContext)
  return (
  <React.Fragment>
      <h1> Your card items... </h1>;
      <div className="row">
      {Product.map((el) =>{
          if(cardItems.some((i)=> i.id === el.id && i.count > 0))
          return <Products data={el}></Products>
      })}
      </div>


  </React.Fragment>
  )
};
export default Card;
