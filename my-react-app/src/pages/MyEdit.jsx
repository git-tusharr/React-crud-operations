import { useParams } from "react-router-dom";

const MyEdit=()=>{
        const{id}=useParams();

        return(
            <>
            <h1>Edit Records :{id}</h1>
            </>
        )
}

export default MyEdit