import React from 'react';
import './MyCar.css';

const MyCar = ({car}) => {
    const {name, id, picture, company, price} = car;
    return (
        <div className='myCar'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <div>
                <p>ID: {id}</p>
                <p>Company: {company}</p>
                <p>Price: {price}</p>
            </div>
        </div>
    );
};

export default MyCar;