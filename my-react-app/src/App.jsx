import { useState } from "react";
import axios from "axios";
const App=()=>{

  const [input,setInput]=useState({});

  const handleInput=(e)=>{

  let name=e.target.name;
  let value=e.target.value;

  setInput(values=>({...values,[name]:value}))
  console.log(input)
  }

  const handleSubmit=async()=>{
    let api="http://localhost:3000/students";
    const response=await axios.post(api,input);
    console.log(response);
    alert("data Saved");
  }

return(
  <>
  <h1>Application form </h1>

  Enter rollno : <input type="text" name="rollno" onChange={handleInput}/>

  <br />
  Enter name : <input type="text" name="name" onChange={handleInput}/>

  <br />
  Enter city : <input type="text" name="city" onChange={handleInput}/>

  <br />
  Enter fees : <input type="text" name="fees" onChange={handleInput}/>

 <br />
  <button onClick={handleSubmit}>Submit</button>

  </>
)

}
export default App;














