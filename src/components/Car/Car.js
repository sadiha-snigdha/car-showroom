import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Car.css';

const Car = (props) => {
    const {car, handleCartButton} = props;
    const {name, id, picture, company, price} = car;
    return (
        <div className='car-cont'>
            <img src={picture} alt="" />
            <h1>{name}</h1>
            <div className='car-info'>
                <p>ID: {id}</p>
                <p>Price: {price}</p>
                <p>Company: {company}</p>
            </div>
            <button className='cart-button' onClick={() => handleCartButton(car)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Car;