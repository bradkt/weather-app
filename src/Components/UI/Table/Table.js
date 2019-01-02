import React from "react";
import Row from "./row";

let Table = props => {
  return (
    <table>
      <tbody>
        {Object.keys(props.data).map(el => (
          <Row
            key={el}
            title={el}
            value={props.data[el].value}
            id={props.data[el].id}
            movieClicked={id => props.movieClicked(id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
