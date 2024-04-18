// class componant
import React from "react";

class Welcome extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         firstName: "Mariem",
    //         lastName: "Abdalwahab"
    //     };
    //     // bind 
    //     this.changeName = this.changeName.bind(this)
    // }


    // / the same result
    state  = {
        firstName: "Mariem",
        lastName: "Abdalwahab"
    }
    // changeName = ()=>{
    //     this.setState({
    //         lastName: "Elshall"
    //     })

    // }
    changeName (){
        console.log(this);
        this.setState({
            lastName: "Elshall"
        })

    }
    // render return your ouput
    render(){
        console.log(this.state);
        return(
            
            <>
            <h1>Hello class Component</h1>
            <p>Hello, {this.props.name}</p>
            <h6>Created by: {this.state.firstName} {this.state.lastName}</h6>
            <button onClick={this.changeName}>
                Change my Name
            </button>
            </>
        )
    }
    // componentDidMount(){
    //     // console.log("this.componentDidMount phase");
    //     /// don't do it in render => infinit loop
    //     this.setState({
    //         lastName: "Elshall"
    //     })
    // }
}

export default Welcome;