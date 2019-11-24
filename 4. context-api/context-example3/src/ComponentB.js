import React from 'react';
import UserContext from './UserContext';

const ComponentB = () => (
        <UserContext.Consumer>
        {
            value => (
                <div>
                    ComponentB :: {value.name}
                </div>
            )
        }
        </UserContext.Consumer>
)

export default ComponentB;