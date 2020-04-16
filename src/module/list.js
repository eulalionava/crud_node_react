import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import axios from 'axios';

//sweetalert2
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

class listComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      listEmployee:[]
    }
  }

  componentDidMount(){
      this.getListado();
  }

  getListado(){
      const url = "http://localhost:4000/empleado/list";
      axios.get(url).then( res=>{
        if(res.data.success){
          const data = res.data.data;
          this.setState({ listEmployee:data });
        }
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
            <Link className="btn btn-outline-info" to={'/edit/'+data.id}>Edit</Link>
          </td>
          <td>
            <button class="btn btn-outline-danger" onClick={()=>this.onDelete(data.id)}> Delete </button>
          </td>
        </tr>
      )
    });
  }

  onDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  
  sendDelete(userId){
    // url de backend
    const baseUrl = "http://localhost:4000/empleado/delete"    // parameter data post
    // network
    axios.post(baseUrl,{
      id:userId
    })
    .then(response =>{
      if (response.data.success) {
        Swal.fire(
          'Deleted!',
          'Your employee has been deleted.',
          'success'
        )
        this.getListado();
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  }

}


export default listComponent;