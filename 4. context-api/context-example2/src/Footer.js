// Context with Class Component
import React from 'react';

import ThemeContext from './ThemeContext';

class Footer extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    props => {
                        return <div>{props.name}, {props.theme}</div>
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}

export default Footer;