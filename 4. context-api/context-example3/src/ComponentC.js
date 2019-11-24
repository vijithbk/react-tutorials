import React, { useContext } from 'react';
import UserContext from './UserContext';

const ComponentC = () => {
    const user = useContext(UserContext)
    return (
        <div>
            ComponentC :: {user.name}
        </div>
    )
}

export default ComponentC;