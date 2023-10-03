import React from 'react'

const Display = (props) => {
  return (
    <div>
        result: {props.count}
        <button onClick={() => {props.setCount(0)}}>Reset</button>
    </div>
  )
}

export default Display
