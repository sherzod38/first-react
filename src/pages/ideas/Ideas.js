import { useState } from "react";

import "./Ideas.scss";


const Ideas = () => {

    const [count, changeCount] = useState (Boolean);

    const decrement = function () {
        if (count > 0) {
            changeCount (count - 2)
        }
    }

    const increment = () => {
        if (count < 17) {
            changeCount (count + 2)
        }
    }
    
    
    return (
        <div className="hamma">
            <h1>hamma</h1>
            <h1>son: {count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => changeCount(count - 1)}>-</button>
            <button onClick={() => changeCount(count + 1)}>+</button>

        </div>

    )
}

export default Ideas;