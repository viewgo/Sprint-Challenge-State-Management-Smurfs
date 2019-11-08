import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { postSmurfs, fetchSmurfs } from "../actions";

function App(props) {
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const submitForm = e => {
    e.preventDefault();
    console.log("form submitted with values", smurf);
    props.postSmurfs(smurf);
    setSmurf({ name: "", age: "", height: "" });

    props.fetchSmurfs();
  };

  const handleChange = e => {
    console.log(e.target.value);
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <form onSubmit={submitForm}>
        <div className="form-inputs">

          <input 
            name="name" 
            id="name" 
            type="text" 
            placeholder="Name" 
            value={smurf.name} 
            onChange={handleChange} 
          />
          <input 
            name="age" 
            id="age" 
            type="text" 
            placeholder="Age" 
            value={smurf.age} 
            onChange={handleChange} 
          />
          <input
            name="height"
            id="height"
            type="text"
            placeholder="Height"
            value={smurf.height}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
          
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  postSmurfs,
  fetchSmurfs
};

export default connect(
  state => {
    console.log("%c vvv PROPS IN LIST", "color: green; background: #222; font-size: 24px;", state);
    console.log("%c ^^^ PROPS IN LIST", "color: green; background: #222; font-size: 24px;");
    return state;
  },
  mapDispatchToProps
)(App);
