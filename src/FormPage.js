import React from "react";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";


function FormPage(props){
    const{handleUpdate,addValue,setAddValue}=props
    const navigate=useNavigate()
return(
    <>
     <h1>Model-Pagination</h1>
          <div className="container">
       <form onSubmit={handleUpdate}>
         <h4>Enter User Details</h4>
           <div className="card flex justify-content-center">
           <InputText
              placeholder="UserName"
              value={addValue.username}
              required
              onChange={(e) =>
                setAddValue({ ...addValue, username: e.target.value })
              }
            />
          </div>

          <div className="card flex justify-content-center">
            <InputText
              placeholder="Email"
              value={addValue.email}
              required
              onChange={(e) =>
                setAddValue({ ...addValue, email: e.target.value })
              }
            />
          </div>

          <div className="card flex justify-content-center">
            <InputText
            value={addValue.phno}
            required
              placeholder="PhoneNumber"
              onChange={(e) =>
                setAddValue({ ...addValue, phno: e.target.value })
              }
            />
          </div>

          <div className="card flex justify-content-center">
            <InputText
            value={addValue.address}
            required
              placeholder="Address"
              onChange={(e) =>
                setAddValue({ ...addValue, address: e.target.value })
              }
            />
          </div>

          <div className="card flex justify-content-center">
            <InputText
            value={addValue.nationality}
            required
              placeholder="Nationality"
              onChange={(e) =>
                setAddValue({ ...addValue, nationality: e.target.value })
              }
            />
          </div>

          <div>
            <input type="submit" className="submit" />
            {/* <button className="Back" onClick={()=>navigate('/')}>Back</button> */}
          </div>
        </form>
      </div>
    </>
)
}
export default FormPage