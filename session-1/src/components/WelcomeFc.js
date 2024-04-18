import { useState } from "react";


function WelcomeFc(props){
    let [counter, counterState] = useState(0);
    let [name, setName] = useState("mariem");
    
    return (
        <>
        <h1>Hello, {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h6>{counter} {name}</h6>
        <button onClick={()=>{
            console.log("count");
                counterState(++counter);
                setName("Mariem Abdalwahab");
            }

            }>
                ++
            </button>
        </>
    )
}

export default WelcomeFc;