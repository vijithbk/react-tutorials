import React, { Fragment } from 'react';
import Car from './Car';

const Cars = (props) => {
    return (
        <div>
            {props.cars && Object.keys(props.cars).map(carId => (
                <Car
                    key={carId}
                    name={props.cars[carId].name}
                    price={props.cars[carId].price}
                    incrementCarPrice={() => props.incrementCarPrice(carId)}
                    decrementCarPrice={() => props.decrementCarPrice(carId)}
                />
            ))}
        </div>
    )
}

export default Cars;