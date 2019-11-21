import React, {Fragment} from 'react';

const Car = (props) => (
    <Fragment>
        <h4>Name: {props.name}</h4>
        <p>Price: ${props.price}</p>
        <button className="btn btn-primary" onClick={props.incrementCarPrice}>&uarr;</button>
        &nbsp;
        <button className="btn btn-primary"  onClick={props.decrementCarPrice}>&darr;</button>
    </Fragment>
)

export default Car;