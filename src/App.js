import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AlarmAddIcon from "@material-ui/icons/AlarmAdd";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: " ",
    email: " ",
    phone: " ",
  });

  const inputEvent = (event) => {
    //console.log(event.target.value);
    <ChevronRightIcon />;

    const { value, name } = event.target;

    setFullName((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname}
              {fullName.lname}
              <ChevronRightIcon />
              <AlarmAddIcon />
            </h1>
            <p> {fullName.email}</p>
            <p> {fullName.phone}</p>
            <input
              type="text"
              placeholder="Enter Your first Name"
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <input
              type="email"
              placeholder="Enter Your email"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />
            <input
              type="number"
              placeholder="Enter Your phone Number"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />

            <button type="submit"> Submit Form</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
