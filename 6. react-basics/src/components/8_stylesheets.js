import React from 'react'

import './8_styles.css'

function Stylesheets(props) {
    let className = props.isPrimary ? 'primary' : ''

    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheets
