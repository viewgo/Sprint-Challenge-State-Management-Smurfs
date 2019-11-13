import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, deleteSmurfs, editSmurfs } from "./actions";

import Form from "./components/Form";

function App(props) {
  const [smurfToEdit, setSmurfToEdit] = useState();

  useEffect(() => {
    props.fetchSmurfs();
  }, [props.changeTrigger]);

  const editButton = data => {
    console.log("edit clicked");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSmurfToEdit(data);
  };

  const editSmurf = data => {
    props.smurfs.map((element, index) => {
      if (
        smurfToEdit.name === element.name &&
        smurfToEdit.age === element.age &&
        smurfToEdit.height === element.height
      ) {
        console.log("FOUND MATCH");
        console.log(data, data.id);
        props.editSmurfs(data, data.id);
      }
    });

    setSmurfToEdit();
  };

  return (
    <div className="App">
      <h1>Smurfs and Stuff</h1>

      <Form smurfToEdit={smurfToEdit} editSmurf={editSmurf} />

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
              ✘
            </div>
            <div
              className="edit"
              onClick={() => {
                editButton(smurf);
              }}
            >
              ✔
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  fetchSmurfs,
  deleteSmurfs,
  editSmurfs
};

export default connect(
  state => {
    console.log("%c vvv PROPS IN LIST", "color: green; background: #222; font-size: 24px;", state);
    console.log("%c ^^^ PROPS IN LIST", "color: green; background: #222; font-size: 24px;");
    return state;
  },
  mapDispatchToProps
)(App);
