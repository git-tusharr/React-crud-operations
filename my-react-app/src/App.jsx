import { useState,useEffect } from "react";
const App=()=>{
  const [count,setCount]=useState(0);
  const [multi,setMulti]=useState(0);

  useEffect(()=>{
    setMulti(count*2)
  },[count])


return(
  <>
  
  <h1>My count : {count}</h1>
  <h1>My multiplication : {multi}</h1>

  <button onClick={()=>{setCount(count+1)}}>Click here!</button>
  
  </>
)
}
export default App;






