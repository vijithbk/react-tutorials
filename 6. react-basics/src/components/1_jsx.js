import React from 'react'

const Hello = () => {
    // Using jsx
    // return (
    //     <div className="header">
    //         <h1>Hello vijith</h1>
    //     </div>
    // )

    // Without using jsx
    return React.createElement("div",
        {
            id: "helloElement",
            className: "header"
        },
        React.createElement("h1", null, "Hello vijith"))
}

export default Hello