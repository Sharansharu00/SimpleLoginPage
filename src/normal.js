// import axios from "axios";
// import "./Model-Pagination.css";
// import React, { useEffect, useState } from "react";
// import { InputText } from "primereact/inputtext";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { Button } from "primereact/button";
// import { Dialog } from "primereact/dialog";
// // import { NodeService } from './service/NodeService';

// function Normal() {
//   const [getApi, setGetApi] = useState([]);
//   const [addValue, setAddValue] = useState({
//     username: "",
//     email: "",
//     phno: "",
//     address: "",
//     nationality: "",
//   });
//   const [editValue, setEditValue] = useState({
//     id: "",
//     username1: "",
//     email1: "",
//     phno1: "",
//     address1: "",
//     nationality1: "",
//   });

//   const [modelContainer, setModelContainer] = useState(false);


//   useEffect(() => {
//     axios
//       .get("  http://localhost:3000/database ")
//       .then((res) => setGetApi(res.data));
//   }, []);

//   let handleUpdate = (e) => {
//     axios
//       .post("http://localhost:3000/database", addValue)
//       .then(() =>
//         axios
//           .get("  http://localhost:3000/database ")
//           .then((res) => setGetApi(res.data))
//       );
//     setAddValue({
//       username: "",
//       email: "",
//       phno: "",
//       address: "",
//       nationality: "",
//     });
//     console.log(addValue);
//     e.preventDefault();
//   };

//   let handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:3000/database/${id}`)
//       .then(() =>
//         axios
//           .get("  http://localhost:3000/database ")
//           .then((res) => setGetApi(res.data))
//       );
//   };

//   let editId = (val) => {
//     setEditValue({
//       id: val.id,
//       username1: val.username,
//       email1: val.email,
//       phno1: val.phno,
//       address1: val.address1,
//       nationality1: val.nationality,
//     });
//     setModelContainer(true);
//   };

//   let actionValue = (val) => {
//     return (
//       <>
//         <Button
//           className="deleteButton"
//           icon="pi pi-external-link"
//           onClick={() => handleDelete(val.id)}
//         >
//           Remove
//         </Button>
//         {/* <button onClick={() => editId(val)}>Edit</button> */}
//         <Button
//           className="editButton"
//           label="Edit"
//           icon="pi pi-external-link"
//           onClick={() => editId(val)}
//         />
//       </>
//     );
//   };
//   let handleSave = (val) => {
//     let reassignValue = {
//       username: val.username1,
//       email: val.email1,
//       phno: val.phno1,
//       address: val.address1,
//       nationality: val.nationality1,
//     };

//     axios
//       .put(`http://localhost:3000/database/${val.id}`, reassignValue)
//       .then(() =>
//         axios
//           .get("  http://localhost:3000/database ")
//           .then((res) => setGetApi(res.data))
//       );
//     setEditValue({
//       id:"",
//       username1: "",
//       email1: "",
//       phno1: "",
//       address1: "",
//       nationality1: "",
//     })
//     setModelContainer(false)
//   };

//   // console.log(getApi);
//   return (
//     <>
//       <Dialog
//         header="Header"
//         visible={modelContainer}
//         onHide={() => setModelContainer(false)}
//         style={{ width: "50vw" }}
//         breakpoints={{ "960px": "75vw", "641px": "100vw" }}
//       >
//         <div className="card flex inputBox justify-content-center">
//             <InputText
//               placeholder="UserName"
//               value={editValue.username1}
//               onChange={(e) =>
//                 setEditValue({ ...editValue, username1: e.target.value })
//               }
//             />
//         </div>
//         <div className="card flex inputBox justify-content-center">
//           <InputText
//             placeholder="email"
//             value={editValue.email1}
//             onChange={(e) =>
//               setEditValue({ ...editValue, email1: e.target.value })
//             }
//           />
//         </div>
//         <div className="card flex inputBox justify-content-center">
//           <InputText
//             placeholder="PhoneNumber"
//             value={editValue.phno1}
//             onChange={(e) =>
//               setEditValue({ ...editValue, phno1: e.target.value })
//             }
//           />
//         </div>
//         <div className="card flex inputBox justify-content-center">
//           <InputText
//             placeholder="Address"
//             value={editValue.address1}
//             onChange={(e) =>
//               setEditValue({ ...editValue, address1: e.target.value })
//             }
//           />
//         </div>
//         <div className="card  inputBox flex justify-content-center">
//           <InputText
//             placeholder="email"
//             value={editValue.nationality1}
//             onChange={(e) =>
//               setEditValue({ ...editValue, nationality1: e.target.value })
//             }
//           />
//         </div>

//         <button className="savebutton" onClick={() => handleSave(editValue)}>
//           Save
//         </button>
//       </Dialog>

//       <h1>Model-Pagination</h1>
//       <div className="container">
//         <form onSubmit={handleUpdate}>
//           <h4>Enter User Details</h4>
//           <div className="card flex justify-content-center">
//             <InputText
//               placeholder="UserName"
//               value={addValue.username}
//               onChange={(e) =>
//                 setAddValue({ ...addValue, username: e.target.value })
//               }
//             />
//           </div>

//           <div className="card flex justify-content-center">
//             <InputText
//               placeholder="Email"
//               value={addValue.email}
//               onChange={(e) =>
//                 setAddValue({ ...addValue, email: e.target.value })
//               }
//             />
//           </div>

//           <div className="card flex justify-content-center">
//             <InputText
//               value={addValue.phno}
//               placeholder="PhoneNumber"
//               onChange={(e) =>
//                 setAddValue({ ...addValue, phno: e.target.value })
//               }
//             />
//           </div>

//           <div className="card flex justify-content-center">
//             <InputText
//               value={addValue.address}
//               placeholder="Address"
//               onChange={(e) =>
//                 setAddValue({ ...addValue, address: e.target.value })
//               }
//             />
//           </div>

//           <div className="card flex justify-content-center">
//             <InputText
//               value={addValue.nationality}
//               placeholder="Nationality"
//               onChange={(e) =>
//                 setAddValue({ ...addValue, nationality: e.target.value })
//               }
//             />
//           </div>

//           <div>
//             <input type="submit" />
//           </div>
//         </form>
//       </div>

//       <div className="card">
//         <DataTable value={getApi} paginator rows={5} className="tableStyle">
//           <Column field="id" header="Id"></Column>
//           <Column field="username" header="Username"></Column>
//           <Column field="email" header="Email"></Column>
//           <Column field="phno" header="Phonenumber"></Column>
//           <Column field="address" header="Email"></Column>
//           <Column field="nationality" header="Nationality"></Column>
//           <Column
//             field="Actions"
//             header="Remove & Delete"
//             body={actionValue}
//           ></Column>
//         </DataTable>
//       </div>
//     </>
//   );
// }
// export default Normal;
