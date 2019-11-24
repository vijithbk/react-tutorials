import React from 'react';
import UserContext from './UserContext'

class ComponentA extends React.Component {
    render() {
        return (
            <UserContext.Consumer>
            {
                props => {
                    return (
                        <div>
                            ComponentA :: {props.name}
                        </div>
                    )
                }
            }
            </UserContext.Consumer>
        )
    }
}

export default ComponentA;