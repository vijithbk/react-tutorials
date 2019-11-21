import React, { Fragment } from 'react';

import MyContext from './MyContext';

import Car from './Car';

const Cars = () => {
    return (
        <MyContext.Consumer>
        {context => (
            <div>
                {context.cars && Object.keys(context.cars).map(carId => (
                    <Car
                        key={carId}
                        name={context.cars[carId].name}
                        price={context.cars[carId].price}
                        incrementCarPrice={() => context.incrementCarPrice(carId)}
                        decrementCarPrice={() => context.decrementCarPrice(carId)}
                    />
                ))}
            </div>
        )}
        </MyContext.Consumer>
    )
}

export default Cars;