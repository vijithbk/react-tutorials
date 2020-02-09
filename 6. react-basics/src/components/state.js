import React from 'react';

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome visitor'
        }
    }

    handleClick() {
        this.setState({
            message: 'Welcome all'
        })
    }

    render() {
        return (
            <div>
                {this.state.message}
                <div>
                    <button onClick={() => this.handleClick()}>Subscribe</button>
                </div>
            </div>
        )
    }
}

export default State;