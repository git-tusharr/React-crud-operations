import Students from "./Students";
const name="tushar";
const rollno=342;
const stuclass="btech";
const totalfees=90000;

const App=()=>{
  return(

    <>
    <h1>Welcome </h1>
    <Students name={name} rno={rollno} class={stuclass} fees={totalfees} /> 
    </>
  )
}

export default App; 