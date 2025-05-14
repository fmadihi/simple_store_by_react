import React from 'react';

const Products = (props) =>{
    const {id,productName,price,productImage} = props.data
    return(
        <div className="col-3">
            <img src={productImage} />
                <h5 className="my-1 ">{productName}</h5>
                <div className="my-1">{price} $</div>
                <button className="btn btn-info">+</button>
                <span className="mx-2">0</span>
                <button className="btn btn-info">-</button>
        </div>
    )
}

export default Products
