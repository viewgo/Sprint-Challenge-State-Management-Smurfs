import React, {useEffect} from "react";

import {connect} from "react-redux";
import {fetchSmurfs} from "./actions";


function App(props) {

  useEffect(() => {
    props.fetchSmurfs();
  }, []);


  return (
    <div className="App">
      
    </div>
  );
}

const mapDispatchToProps = {
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

