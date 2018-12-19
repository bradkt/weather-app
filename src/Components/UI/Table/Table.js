import React from "react";
import classes from "./Table.module.css";
import Row from "./row";

let Table = (props) => {
  return (
    <table>
      <tbody>
        { Object.keys(props.data).map( el => <Row key={el} title={el} value={props.data[el]} /> )}
      </tbody>
    </table>
  );
}


export default Table;
