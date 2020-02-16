import React, { Component } from 'react'

import MountingLifeCycleMethodsB from './MountingLifeCycleMethodsB'

class MountingLifeCycleMethodsA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vijith'
        }

        console.log("MountingLifeCycleMethodsA Constructor method called.")
    }

    static getDerivedStateFromProps(props, state) {
        console.log('MountingLifeCycleMethodsA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('MountingLifeCycleMethodsA componentDidMount')
    }
    
    render() {
        console.log('MountingLifeCycleMethodsA render')
        return (
            <div>
                MountingLifeCycleMethodsA
                <MountingLifeCycleMethodsB />
            </div>
        )
    }
}

export default MountingLifeCycleMethodsA
