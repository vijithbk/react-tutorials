import React from 'react';
import MyContext from './MyContext';

class MyProvider extends React.Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    };

    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                    incrementCarPrice: selectedId => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedId].price = cars[selectedId].price + 1;
                        this.setState({
                            cars
                        })
                    },
                    decrementCarPrice: selectedId => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedId].price = cars[selectedId].price - 1;
                        this.setState({
                            cars
                        })
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export default MyProvider;