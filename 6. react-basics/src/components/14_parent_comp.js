import React, { Component } from 'react'
import MemoComp from './14_memo_comp'

class ParentComponent2 extends Component {
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
                Parent component
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent2
