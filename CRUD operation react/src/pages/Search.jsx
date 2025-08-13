import axios from "axios";
import { useState } from "react";


const Search=()=>{


    const [rno,setRno]=useState([]);
    const [mydata,setMydata]=useState([]);

    const handleSubmit=async()=>{
        let api =`http://localhost:3000/students/?rollno=${rno}`;
        const response=await axios(api);
        console.log(response.data);
        setMydata(response.data)
    }
    const ans =mydata.map((key)=>{

        return(
            <>
            <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
            </tr>

            </>
        )

    })

    return(
        <>

        enter rollno : <input type="text" value={rno} onChange={(e)=>{setRno(e.target.value)}} />
        <button onClick={handleSubmit}>search</button>


        <table border="1" cellPadding={10} align="center">
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>

        
        </>
    )

    
}

export default Search;