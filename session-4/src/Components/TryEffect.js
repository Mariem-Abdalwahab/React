import { useState, useEffect } from "react"

function Effectn(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    function increament(){
        setCount(count+1)
    }
    function increament2(){
        setCount2(count2-1)
    }
    useEffect(()=>{
        document.title = `you clicked ${count} time `
        console.log("t");
        return()=>{
            console.log("Unmount");
        }

    }, [count2])
    return(
        <>
            <h1>Count {count}</h1>
            <button onClick={increament}> Count from Effect</button>
            <h1>Coun2t {count2}</h1>
            <button onClick={increament2}> Count2 from Effect</button>
        </>
    )
}

export default Effectn;