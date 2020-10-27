import React, { useState } from 'react'
import Toggler from './Toggler'
function Counterhooks() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Toggler />
            <h1>This is the count:{count}</h1>
            <button onClick={() => setCount(count + 1)}> Click</button>
        </div>
    )
}
export default Counterhooks;
