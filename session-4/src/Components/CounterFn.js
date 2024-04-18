import { useState } from "react"

function CounterFn(){
    const [count, setCount] = useState(0);
    function increament(){
        setCount(count+1)
    }
    return(
        <>
            <h1>Count {count}</h1>
            <button onClick={increament}> Count from function</button>
        </>
    )
}

export default CounterFn;