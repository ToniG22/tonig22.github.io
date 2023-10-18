// Admin.js
import React, { useState } from "react";
import AddEventPage from "./AddEventPage";
import FormBackGround from "../components/FormDesign";
import HumanIcon from "../assets/HumanIcon.png";
import ProfileIcon from "../assets/ProfileIcon.png";
import { FaUserAlt, FaLock } from "react-icons/fa";

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "anacachopaulo") {
      setAuthenticated(true);
    } else {
      alert("Incorrect username or password!");
    }
  };

  if (authenticated) {
    return <AddEventPage />;
  }

  return (
    <div>
      <h1>Admin Login</h1>
      <div className="FormPlacement">
        <div className="FormContainer">
          <div className="LeftForm">
            <FormBackGround />
            <img className="HumanIcon" src={HumanIcon}></img>
          </div>
          <div className="FormInputs">
            <img className="ProfileIcon" src={ProfileIcon}></img>
            <p> WELCOME </p>
            <div>
              <label>
                {" "}
                <FaUserAlt />
                <input
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                {" "}
                <FaLock />
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <button className="LoginButtom" onClick={handleLogin}>
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
