import React, { useState } from 'react'

const Practice = () => {
    let [count, setCount] = useState(0);

    const decreaseCount = () => {
        setCount(count--);
    }
    const increaseCount = () => {
        setCount(count++);
    }
  return (
    <div>
        <h1>Practicing React Use State</h1>
        <button aria-label="decrease count" onClick={decreaseCount}>-</button>
        <h2>{count}</h2>
        <button aria-label="increase count" onClick={increaseCount}>+</button>
    </div>
  )
}

export default Practice;