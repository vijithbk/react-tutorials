import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        // 1. if else
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>Welcome Vijith</div>
        //     )
        // } else {
        //     return (
        //         <div>Welcome guest</div>
        //     )
        // }

        // 2. Element variable approach
        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Vijith</div>
        // } else {
        //     message = <div>Welcome guest</div>
        // }
        // return message

        // 3. Ternary operator
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Vijith</div> :
        //         <div>Welcome guest</div>
        // )

        // 4. Short circuit
        return this.state.isLoggedIn && <div>Welcome Vijith</div>
    }
}

export default ConditionalRendering
