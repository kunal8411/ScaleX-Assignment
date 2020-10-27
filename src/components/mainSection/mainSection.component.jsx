import React from 'react';
import {Table} from 'react-bootstrap'




export default function BasicTable() {
    

  return (

    
    <Table striped bordered hover variant="dark">
        
    <thead>
      <th>User Logs</th>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Phone Nomber</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>123456789</td>
      <td>Nashik</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>563245263</td>
      <td>@Church Road Alviston</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Nile</td>
      <td>hellon</td>
      <td>563201236</td>
      <td>@308 melody lane</td>
    </tr>
  </tbody>
</Table>
  );
}