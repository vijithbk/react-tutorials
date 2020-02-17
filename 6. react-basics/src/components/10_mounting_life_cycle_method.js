import React, { Component } from 'react'

import MountingLifeCycleMethodsB from './10_MountingLifeCycleMethodsB'

class MountingLifeCycleMethodsA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vijith'
        }

        console.log("MountingLifeCycleMethodsA Constructor method called.")
    }

    changeState = () => {
        this.setState({
            name: 'Vijith'
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('MountingLifeCycleMethodsA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('MountingLifeCycleMethodsA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('MountingLifeCycleMethodsA shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate() {
        console.log('MountingLifeCycleMethodsA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('MountingLifeCycleMethodsA getSnapshotBeforeUpdate')
    }

    render() {
        console.log('MountingLifeCycleMethodsA render')
        return (
            <div>
                MountingLifeCycleMethodsA
                <MountingLifeCycleMethodsB />
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}

export default MountingLifeCycleMethodsA
