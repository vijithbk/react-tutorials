import React from 'react'

function InlineStyles() {

    const heading = {
        fontSize: '72px',
        color: 'blue'
    }

    return (
        <div>
            <h1 style={heading}>Inline styles</h1>
        </div>
    )
}

export default InlineStyles
