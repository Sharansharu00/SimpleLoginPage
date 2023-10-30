import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./loginPage.css";
import axios from "axios";
import { Password } from 'primereact/password';

function Login() {
  const navigate = useNavigate();
//   const [loginView, setLoginView] = useState(false);
  const [loginValue, setLoginValue] = useState([]);
  const [addValue, setAddValue] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    axios
      .get(" http://localhost:3000/database")
      .then((res) => setLoginValue(res.data));
  }, []);
  console.log(loginValue);
  return (
    <>
      <div className="mainLcontainer">
        <div className="loginContainer">
          <div className="inputBox">
            <h1>UserLogin</h1>
            <label>
              UserName:
              <InputText
                required
                id="username"
                type="text"
                className="w-12rem userss"
                onChange={(e) =>
                  setAddValue({ ...addValue, username: e.target.value })
                }
              />
            </label>

            <label>
              Password:
              <Password onChange={(e) => setAddValue({ ...addValue, password: e.target.value })} toggleMask />
              {/* <InputText
                id="username"
                type="text"
                className="w-12rem"
                required
                onChange={(e) =>
                  setAddValue()
                }
              /> */}
            </label>
            {}

            <Button
              label="Login"
              icon="pi pi-user"
              className="w-10rem mx-auto"
              disabled={!addValue.username||!addValue.password}
              onClick={() => navigate("/ModelPagination")}
            ></Button>
          </div>
        </div>

        {/* <div className="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
                
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Username: </label>
                        
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label className="w-6rem">Password: </label>
                        <InputText id="password" type="password" className="w-12rem" />
                    </div>
                   
                </div> */}
      </div>
    </>
  );
}
export default Login;
