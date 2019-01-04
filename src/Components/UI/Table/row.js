import React from "react";
import classes from "./Table.module.css";

const Row = props => (
  <tr
    className={props.shouldAnimateRow ? classes.newItem : null}
    onClick={() => props.movieClicked(props.id)}
  >
    <td className={["blue-text", classes.td].join(" ")}> {props.title} </td>
    <td className={["gray-text", classes.td].join(" ")}>
      {String(props.value).includes("http://") ? (
        <a href={props.value}> {props.value} </a>
      ) : (
        props.value
      )}
    </td>
  </tr>
);

export default Row;
