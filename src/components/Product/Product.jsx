import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, quantity, price } = props.product;
    const handleAddCart = props.handleAddCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product_info'>
                <h6 className='product_name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddCart(props.product)} className='btn_cart'>Add to cart</button>
        </div>
    );
};

export default Product;