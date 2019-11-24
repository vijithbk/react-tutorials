import React from 'react';
import UserContext from './UserContext'

class ComponentD extends React.Component {
    static contextType = UserContext;

    componentDidMount() {
        const user = this.context

        console.log(user.name)
    }
    
    render() {
        return null
    }
}

export default ComponentD;