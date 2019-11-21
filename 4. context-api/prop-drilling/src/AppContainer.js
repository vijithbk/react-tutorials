import React from 'react';

import ProductList from './ProductList';

class AppContainer extends React.Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };
    incrementCarPrice = this.incrementCarPrice.bind(this);
    decrementCarPrice = this.decrementCarPrice.bind(this);

    incrementCarPrice(selectedId) {
        const cars = Object.assign({}, this.state.cars);
        cars[selectedId].price = cars[selectedId].price + 1;
        this.setState({
            cars
        })
    }

    decrementCarPrice(selectedId) {
        const cars = Object.assign({}, this.state.cars);
        cars[selectedId].price = cars[selectedId].price - 1;
        this.setState({
            cars
        })
    }

    render() {
        return (
            <div className="container">
                <header className="app-header">
                    <h1 className="app-title">Welcome</h1>
                </header>
                <ProductList
                    cars={this.state.cars}
                    incrementCarPrice={this.incrementCarPrice}
                    decrementCarPrice={this.decrementCarPrice}
                />
            </div>
        );
    }
}

export default AppContainer;