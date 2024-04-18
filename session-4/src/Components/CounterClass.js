// class syntax
import React from "react";

class Counter extends React.Component{
		//yor code and constructor
		constructor(props){
			super(props);
			this.state = {
				counter: 0,
			}
		}
		// it will update your value
		componentDidMount(){
			this.setState({
				counter: this.state.counter+1
			})
		}

		componentDidUpdate(pervprops, prevstate){
			console.log(pervprops);
			console.log(prevstate);
		}

		componentWillUnmount(){
			console.log("Unmount");
		}




		increament = ()=>{
			this.setState({
				counter: this.state.counter+1
			})
		}
		render(){
			return(
				<>
				<h1>Counter : {this.state.counter}</h1>
				<button onClick={this.increament}>count from class</button>
				</>
			)
		}
}

export default Counter;