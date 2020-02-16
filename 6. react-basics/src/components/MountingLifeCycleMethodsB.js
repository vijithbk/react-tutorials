import React, { Component } from 'react'

class MountingLifeCycleMethodsB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vijith'
        }

        console.log("MountingLifeCycleMethodsB Constructor method called.")
    }

    static getDerivedStateFromProps(props, state) {
        console.log('MountingLifeCycleMethodsB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('MountingLifeCycleMethodsB componentDidMount')
    }
    
    render() {
        console.log('MountingLifeCycleMethodsB render')
        return (
            <div>
                MountingLifeCycleMethodsB
            </div>
        )
    }
}

export default MountingLifeCycleMethodsB
