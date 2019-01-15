import React from "react";
import Table from "../UI/Table";
//import Button from "../UI/Button";
import classes from "./Response.module.css";

let response = props => {
  return (
    <div className={classes.setScroll}>
      <Table data={props.DTO} movieClicked={id => props.movieClicked(id)} />
      {/* <Button color="transparent" clicked={props.clicked}>
        Clear
      </Button> */}
    </div>
  );
};

export default response;
