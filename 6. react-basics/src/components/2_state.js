import React from 'react';

class State extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "Hey there, welcome to the site"
        }
    }
    eventHandler() {
        this.setState({
            message: "Thank you for subscribing!!!"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <div>
                    <button onClick={() => this.eventHandler()}>Subscribe</button>
                </div>
            </div>
        )
    }
}

export default State;