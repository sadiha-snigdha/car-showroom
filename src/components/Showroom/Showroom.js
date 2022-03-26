import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import MyCar from '../MyCar/MyCar';
import './Showroom.css';

const Showroom = () => {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);
    const [car, setCar] = useState([]);

    useEffect( () => {
        fetch('car.json')
        .then(res => res.json())
        .then(data => setCars(data))
    }, [])

    const handleCartButton = (selectedCar) =>{
        // console.log(car);

        let carList = [];
        carList = [...cart, selectedCar];

        setCart(carList);
    }

    const randomItemHandler = (selectedCar) => {
        let carList = [];
        let randomCar;
        carList = [...cart, selectedCar];

        const selectedCarLen = carList.length - 1;
        randomCar = Math.floor(Math.random() * selectedCarLen);
        setCar(carList[randomCar]);
    }



    console.log(cart);
    return (
        <div className='container'>
            <div className='car-container'>
                {
                    cars.map(car => <Car
                    key={car.id}
                    car={car}
                    handleCartButton={handleCartButton}
                    ></Car>)
                }
            </div>
            <div className='chosen-container'>
                <h2>Selected Items</h2>
                {
                    cart.map(cart => <Cart
                    key={cart.id}
                    cart={cart}
                    ></Cart>)
                }
                <div>
                    <button onClick={randomItemHandler}>Select 1 for me</button>
                    <button>Choose again</button>
                </div>
                <div>
                    <MyCar car={car}></MyCar>
                </div>
            </div>
        </div>
    );
};

export default Showroom;