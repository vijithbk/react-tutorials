import React, { Component } from 'react'
import UpdatedComponent from './17_hoc_with_counter'

class ClickCounter extends Component {  

    render() {
        const { count, incrementCount } = this.props

        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter, 5)
