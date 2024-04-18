import { useState } from "react";


function Form(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");

    const nameHandler = (value)=>{
        setName(value);
    }
    const passHandler = (value)=>{
        setPassword(value);
    }
    const genderHandler = (value)=>{
        setGender(value);
    }
    return (
        <form onClick={(e)=>{
            e.preventDefault();
            console.log("form");
            console.log(name);
            console.log(password);
            console.log(gender);
        }}>
            <label>Name</label>
            <input type="text" placeholder="Enter Your Name" onChange={(e)=>{
                nameHandler(e.target.value)
            }}></input>
            <br></br>
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password"onChange={(e)=>{
                passHandler(e.target.value)
            }}></input>
            <br></br>
            <label>Gender</label>
            <select onChange={(e)=>{
                genderHandler(e.target.value)
            }}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
