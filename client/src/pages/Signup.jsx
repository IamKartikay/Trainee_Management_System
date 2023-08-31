import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/StateContext";

const Signup = () => {
  const navigate = useNavigate();

  const {
    setLoggedIn,
    selectedLab,
    adminName,
    adminEmail,
    adminPassword,
    AdminNameHandler,
    AdminEmailHandler,
    AdminPasswordHandler,
  } = useContext(Context);

  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/api/admin/login", {
      method: "POST",
      body: JSON.stringify({
        name: adminName,
        email: adminEmail,
        password: adminPassword,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const json = await response.json();
    if (response.ok) {
      await setLoggedIn(true);
      localStorage.setItem("admin", JSON.stringify(json));
      navigate(`/${selectedLab}/dashboard`);
    }
    if (!response.ok) {
      alert(json.error);
    }
  };

  return (
    <div className="container">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Admin Name</label>
          <input
            type="text"
            value={adminName}
            className="form-control"
            onChange={AdminNameHandler}
            placeholder="Enter Name"
          />
        </div>

        <div>
          <label>Admin Email</label>
          <input
            type="email"
            value={adminEmail}
            className="form-control"
            onChange={AdminEmailHandler}
            placeholder="Enter Email"
          />
        </div>

        <div>
          <label>Admin Password</label>
          <input
            type="password"
            value={adminPassword}
            className="form-control"
            onChange={AdminPasswordHandler}
            placeholder="Enter Password"
          />
        </div>

        <button className="formbutton" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
