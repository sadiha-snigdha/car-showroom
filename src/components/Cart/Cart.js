import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const {name, picture} = cart;
    return (
        <div className='selected-item'>
            <div>
                <img className='selectedCar' src={picture} alt="" />
            </div>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Cart;