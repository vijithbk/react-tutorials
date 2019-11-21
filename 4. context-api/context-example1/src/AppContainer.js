import React from 'react';

import MyProvider from './MyProvider';
import ProductList from './ProductList';

class AppContainer extends React.Component {
    render() {
        return (
            <MyProvider>
                <div className="container">
                    <header className="app-header">
                        <h1 className="app-title">Welcome</h1>
                    </header>
                    <ProductList />
                </div>
            </MyProvider>
        );
    }
}

export default AppContainer;