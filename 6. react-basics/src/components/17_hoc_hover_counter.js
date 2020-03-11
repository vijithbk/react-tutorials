import React, { Component } from 'react'
import UpdatedComponent from './17_hoc_with_counter'

class OverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props

        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(OverCounter, 10)
