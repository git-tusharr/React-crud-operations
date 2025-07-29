import { useState } from "react";

const App=()=>{

  const [input,setInput]=useState({});
  const handleInput=(e)=>{

    let name=e.target.name;
    let value=e.target.value;

    setInput(values=>({...values,[name]:value}))
    console.log(input)
  }

return(
  <>
  
  <h1>Application form</h1>

  Enter Employ no. : <input type="text" name="empno" onChange={handleInput}/>

  <br />

    Enter Name : <input type="text"  name="name" onChange={handleInput}/>

  <br />

    Enter City : <input type="text"  name="city" onChange={handleInput}/>


<br />
    Enter Salary : <input type="text" name="salary" onChange={handleInput}/>

<br />
<button>Save</button>

  

  </>
)

}
export default App;






