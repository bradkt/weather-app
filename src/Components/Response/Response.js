import React, { Component } from 'react';
import Table from '../UI/Table';
import Button from '../UI/Button';

let response = (props) => {
    return (
        <div>
            <Table data={props.DTO}></Table>
            <Button color='transparent' clicked={props.clicked}>Clear</Button>
        </div>
    );
}

export default response;