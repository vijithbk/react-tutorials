// Context with functional component
import React from 'react';
import ThemeContext from './ThemeContext';

const Body = () => (
    <ThemeContext.Consumer>
        {
            value => (
                <div>{value.content}</div>
            )
        }
    </ThemeContext.Consumer>
)

export default Body;