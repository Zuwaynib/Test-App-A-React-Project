import React, { useState } from 'react'

const Practice = () => {
    const [count, setCount] = useState(5);

    const decreaseCount = () => {
        setCount(prevCount => prevCount - 5 );
    }
    const increaseCount = () => {
        setCount(prevCount =>  prevCount + 5);
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