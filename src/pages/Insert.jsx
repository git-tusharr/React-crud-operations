import { useState } from "react";

import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Insert=()=>{

    const [input,setInput]=useState({});


    const handleInput=(e)=>{
        
        let name=e.target.name;
        let value=e.target.value;

        setInput(values=>({...values,[name]:value}))
         console.log(input)

    }

    const handleSubmit=async()=>{

        let api="http://localhost:3000/students";
        const response=await axios.post(api,input)

        console.log(response);


        toast.success("data saved succesfullyy!!");
        

    }
    return(
        <>

        <h1>This is insert page</h1>

        Enter Roll number: <input type="text" name="rollno" onChange={handleInput}  />

        <br />

        Enter Name : <input type="text" name="name" onChange={handleInput}/>
        
        <br />

        Enter City : <input type="text" name="city"  onChange={handleInput}/>

        <br />

        Enter fees : <input type="text" name="fees" onChange={handleInput} />

        <br />

        <button onClick={handleSubmit} >Save</button>


<ToastContainer></ToastContainer>
        </>
    )
}
export default Insert;