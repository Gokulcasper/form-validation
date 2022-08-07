import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [Name, setName] = useState([]);
  const [Submit, setSubmit] = useState();

  const handelChange = (event) => {
    setName(event.target.value);
  };

  const handelClick = (e) => {
    e.preventDefault();
    setSubmit(Name);
  };

  return (
    <div className="App">
      <h1>user {Name}</h1>
      <h2> username {Submit}</h2>
      <form onSubmit={handelClick}>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={handelChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
