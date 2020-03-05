import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <input ref={this.inputRef} type="text" />
            </div>
        )
    }
}

export default Refs
