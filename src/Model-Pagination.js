import "./Model-Pagination.css";
import React, { useEffect, useState } from "react";
import ModalView from "./modal";
import axios from "axios";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import FormPage from "./FormPage";
import { useNavigate } from "react-router-dom";

function ModelPagination(props) {
  const [getApi, setGetApi] = useState([]);
  const [addValue, setAddValue] = useState({
    username: "",
    email: "",
    phno: "",
    address: "",
    nationality: "",
  });
  const [editValue, setEditValue] = useState({
    id: "",
    username1: "",
    email1: "",
    phno1: "",
    address1: "",
    nationality1: "",
  });

  const [modelContainer, setModelContainer] = useState(false);
  const[table,settable]=useState(false)
  const navigate=useNavigate()

  // to get api value

  useEffect(() => {
    axios
      .get("  http://localhost:3000/database ")
      .then((res) => setGetApi(res.data));
  }, []);

  // post api value

  let handleUpdate = (e) => {
    axios
      .post("http://localhost:3000/database", addValue)
      .then(() =>
        axios
          .get("  http://localhost:3000/database ")
          .then((res) => setGetApi(res.data))
      );
    setAddValue({
      username: "",
      email: "",
      phno: "",
      address: "",
      nationality: "",
    });
    settable(true);
    console.log(addValue);
    e.preventDefault();
    
  };

  // this function is usd to edit button
  let editId = (val) => {
    setEditValue({
      id: val.id,
      username1: val.username,
      email1: val.email,
      phno1: val.phno,
      address1: val.address1,
      nationality1: val.nationality,
    });
    setModelContainer(true);
  };

  // to delete data at table and database
  let handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/database/${id}`)
      .then(() =>
        axios
          .get("  http://localhost:3000/database ")
          .then((res) => setGetApi(res.data))
      );
  };
  //
  let actionValue = (val) => {
    return (
      <>
        <Button
          className="deleteButton"
          icon="pi pi-external-link"
          onClick={() => handleDelete(val.id)}
        >
          Remove
        </Button>
        {/* <button onClick={() => editId(val)}>Edit</button> */}
        <Button
          className="editButton"
          label="Edit"
          icon="pi pi-external-link"
          onClick={() => editId(val)}
        />
      </>
    );

    // this function used to save button
  };
  let handleSave = (val) => {
    let reassignValue = {
      username: val.username1,
      email: val.email1,
      phno: val.phno1,
      address: val.address1,
      nationality: val.nationality1,
    };

    axios
      .put(`http://localhost:3000/database/${val.id}`, reassignValue)
      .then(() =>
        axios
          .get("  http://localhost:3000/database ")
          .then((res) => setGetApi(res.data))
      );
  };

  return (
    <>
   
      <FormPage
      handleUpdate={handleUpdate}
      addValue={addValue}
      setAddValue={setAddValue}
    ></FormPage>
      

    {table===true? 
  
<div className="card">
        <DataTable value={getApi} paginator rows={5} className="tableStyle" >
          <Column field="id" header="Id" sortable></Column>
          <Column field="username" header="Username"sortable></Column>
          <Column field="email" header="Email"sortable></Column>
          <Column field="phno" header="Phonenumber"sortable></Column>
          <Column field="address" header="Email"sortable></Column>
          <Column field="nationality" header="Nationality"sortable></Column>
          <Column
            field="Actions"
            header="Remove & Delete"
            body={actionValue}
          ></Column>
          
        </DataTable>
        <Button label="View UserDetails"
          icon="pi pi-external-link" onClick={()=>navigate('/ListDetails')} ></Button>
      </div>:null}
      <ModalView
        modelContainer={modelContainer}
        setModelContainer={setModelContainer}
        editValue={editValue}
        setEditValue={setEditValue}
        handleSave={handleSave}
      ></ModalView>
      
    </>
  );
}
export default ModelPagination;
