import React, { Component } from 'react'

class EventBinding extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome user"
        }
    }

    clickHandler = () => {
        this.setState({
            message: "hello vijith"
        })
    }
    

    render() {
        return (
            <div>
                {this.state.message}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBinding
