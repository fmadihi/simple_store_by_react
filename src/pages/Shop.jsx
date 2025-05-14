import React from 'react';
import {Product} from '../assets/data';
import Products from './product/Products'

const Shop = () =>{
    return(
        <React.Fragment>
            <h1>Shop</h1>
            <div className="row">
                {Product.map((elem)=>{
                   return <Products data={elem} />
                })}
            </div>
        </React.Fragment>
        
    )
}
export default Shop
