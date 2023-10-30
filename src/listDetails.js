import React, { useEffect,useState } from "react";
import axios from "axios";
import './listDetails.css'
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

function ListDetails(){
    const [listValue, setListValue] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
        axios
          .get(" http://localhost:3000/database")
          .then((res) => setListValue(res.data));
      }, []);
    return(
        <>
        <h1>User  Details</h1>
        <div className="listContainer">
            <div className="container2">

            {listValue.map((val)=>(
                <>
                <div className="listBox">
                 <h2>{val.username}</h2>   
                <li>{val.email}</li>
                <li>{val.phno}</li>
                <li>{val.address}</li>
                <li>{val.nationality}</li>
                </div>
                
               
                </>
                
                
            ))}


            </div>
            <Button className="home" onClick={()=>navigate(-1)}>Home</Button>
        </div>
        
        </>
    )
}
export default ListDetails