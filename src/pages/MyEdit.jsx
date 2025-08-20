import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const MyEdit = () => {
    const { id } = useParams();
    const [myData, setMydata] = useState({});

    const loadData = async () => {
        let api = `http://localhost:3000/students/${id}`;
        const response = await axios.get(api);
        setMydata(response.data);
    }
    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        setMydata(values => ({ ...values, [name]: value }))
        console.log(myData);
        

    }
    useEffect(() => {
        loadData();
    }, []);


    const handleSubmit = async () => {
        let api = `http://localhost:3000/students/${id}`;
        const response = await axios.put(api, myData);
        toast.success("data Updated succesfullyy!!");
        

    }


    return (
        <>
            <h1>Edit Records :{id}</h1>

            edit Roll number: <input type="text" name="rollno" value={myData.rollno} onChange={handleInput} />

            <br />

            edit Name : <input type="text" name="name" value={myData.name} onChange={handleInput} />

            <br />

            edit City : <input type="text" name="city" value={myData.city} onChange={handleInput} />

            <br />

            edit fees : <input type="text" name="fees" value={myData.fees} onChange={handleInput} />

            <br />

            <button onClick={handleSubmit} >Edit save</button>

                    <ToastContainer></ToastContainer>
        </>
    )
}

export default MyEdit;