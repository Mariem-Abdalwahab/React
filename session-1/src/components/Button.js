function Button(props){
    let btnHandler = ()=>{
        console.log("handle");
        console.log("handle");
        console.log("handle");

    }
    return (
        <button className="react-btn" onClick={btnHandler}>
            {props.title}
        </button>
    )
}

export default Button;