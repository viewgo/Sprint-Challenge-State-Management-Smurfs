import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, deleteSmurfs } from "./actions";

import Form from "./components/Form";

function App(props) {
  useEffect(() => {
    props.fetchSmurfs();
  }, [props.changeTrigger]);

  return (
    <div className="App">
      <h1>Smurfs and Stuff</h1>

      <Form />

      <div className="smurf-list">
        {props.smurfs.map(smurf => (
          <div className="smurf">
            <h3>{smurf.name}</h3>
            <p>{smurf.age} years old</p>
            <p>{smurf.height} tall</p>
            <div
              className="delete"
              onClick={() => {
                console.log("delete clicked");
                props.deleteSmurfs(smurf.id);
              }}
            >
              X
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  fetchSmurfs,
  deleteSmurfs
};

export default connect(
  state => {
    console.log("%c vvv PROPS IN LIST", "color: green; background: #222; font-size: 24px;", state);
    console.log("%c ^^^ PROPS IN LIST", "color: green; background: #222; font-size: 24px;");
    return state;
  },
  mapDispatchToProps
)(App);
