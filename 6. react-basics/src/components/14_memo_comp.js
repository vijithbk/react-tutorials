import React from 'react'

function MemoComp(props) {
    return (
        <div>
            Memo Component {props.name}
        </div>
    )
}

export default React.memo(MemoComp)
