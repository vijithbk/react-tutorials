import React, { Component } from 'react'
import RegComp from './13_reg_comp';
import { PureComp } from './13_pure_comp';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vijith'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Vijith'
            })
        }, 2000)
    }
    
    render() {
        console.log('Parent component render()')
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
