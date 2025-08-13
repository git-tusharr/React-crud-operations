import axios from "axios";
import { useEffect,useState } from "react";

import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Update=()=>{
    const navigate=useNavigate();

    const[myData,setMydata]=useState([]);

    const loadData=async()=>{

    let api ="http://localhost:3000/students";
    const response=await axios.get(api);
    console.log(response);
    setMydata(response.data);

    }




    useEffect(()=>{
        loadData();
    },[])


    const myEdit=async(id)=>{
    
    navigate(`/MyEdit/${id}`)
    }




    const myDel=async(id)=>{
    let api =`http://localhost:3000/students/${id}`;
    const response=await axios.delete(api);
    console.log(response);
    toast.success("data deleted succesfullyy!!");
    loadData();
    }









    const ans=myData.map((item)=>{
        return(
            <>
            <tr>
                <td>{item.rollno}</td>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.fees}</td>
                <td>
                    <button onClick={()=>{myDel(item.id)}}>delete</button>
                    </td>
                    <td>
                    <button onClick={()=>{myEdit(item.id)}}>edit</button>
                </td>
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>This is my display page</h1>

        <table border="1" cellPadding={10} align="center">
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
        </table>

        <ToastContainer></ToastContainer>
         
        </>
    )
}
export default Update;