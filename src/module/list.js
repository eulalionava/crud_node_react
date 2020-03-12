import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

class listComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      listEmployee:[]
    }
  }

  componentDidMount(){
      const url = "http://localhost:4000/empleado/list";

      axios.get(url).then( res=>{
        const data = res.data.data;
        this.setState({ listEmployee:data });
        
      })
      .catch(error=>{
        alert("Error server" + error);
      })
  }

  render()
  {
    return (
      <table className="table table-hover table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Role</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          { this.loadFillData() }
        </tbody>
      </table>
    );
  }

  loadFillData(){
    return this.state.listEmployee.map( (data)=>{
      return(
        <tr key={data.id}>
          <th>{data.id}</th>
          <td>{data.role.role}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.address}</td>
          <td>{data.phone}</td>
          <td>
            <button className="btn btn-outline-info "> Edit </button>
          </td>
          <td>
            <button className="btn btn-outline-danger "> Delete </button>
          </td>
        </tr>
      )
    });
  }
}


export default listComponent;