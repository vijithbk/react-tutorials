import React from 'react'

function RegComp(props) {
    console.log('Regular component render()')
    return (
        <div>
            Regular component {props.name}
        </div>
    )
}

export default RegComp
