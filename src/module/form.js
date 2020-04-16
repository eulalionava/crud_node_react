import React from 'react';
import { Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

class EditComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      campName:     "",
      campEmail:    "",
      campPhone:    "",
      campAddress:  "",
      selectRole:   0
    }
  }

 render(){
   return (
     <div>
       <div className="form-row justify-content-center">
         <div className="form-group col-md-6">
           <label>Name</label>
           <input type="text" className="form-control"  placeholder="Name" 
           value={this.state.campName} 
           onChange={ (value)=>this.setState({campName:value.target.value}) } />
         </div>
         <div className="form-group col-md-6">
           <label>Email</label>
           <input type="email" className="form-control"  placeholder="Email"
           value={this.state.campEmail}
           onChange={(value)=>this.setState({campEmail:value.target.value})}/>
         </div>
       </div>
       <div className="form-row">
         <div className="form-group col-md-6">
           <label>Role</label>
           <select className="form-control" 
           onChange={(value)=>this.setState({selectRole:value.target.value})}>
             <option defaultValue="0">Seleccionar...</option>
             <option value="1">Admin</option>
             <option value="2">Project Manager</option>
             <option value="3">Programer</option>
           </select>
         </div>
         <div className="form-group col-md-6">
           <label>Phone</label>
           <input type="number" className="form-control"  placeholder="Phone"
           value={this.state.campPhone} onChange = {(value)=>this.setState({campPhone:value.target.value})}/>
         </div>
       </div>
       <div className="form-group">
         <label>Address</label>
         <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
         value={this.state.campAddress} onChange={(value)=>this.setState({campAddress:value.target.value})}/>
       </div>

       <input type="submit" className="btn btn-primary" value="Agregar" onClick={ ()=>this.sendSave() }/>
     </div>
   );
 }

 sendSave(){
   //Por si no selecciona ningun role
   if (this.state.selectRole===0) {
     alert("Seleccione el tipo de Role")
    }
    else if (this.state.campPhone==="") {
      alert("Digite el campo de telefono")
    }
    else if (this.state.campName==="") {
      alert("Digite el campo de Nombre")
    }
    else if (this.state.campEmail==="") {
      alert("Digite el campo de email")
    }
    else if (this.state.campAddress==="") {
      alert("Digite el campo de Direccion")
    }
    else {
      //url del backend
      const baseUrl = "http://localhost:4000/empleado/create"
      //Parametros
      const datapost = {
        name    :   this.state.campName,
        email   :   this.state.campEmail,
        phone   :   this.state.campPhone,
        address :   this.state.campAddress,
        role    :   this.state.selectRole
      }
      
      axios.post(baseUrl,datapost).then(response=>{
        console.log(response);
        if (response.data.success===true) {
          return <Redirect to="/list" />
        }else{
          alert(response.data.message)
        }
      }).catch(error=>{
        alert("Error 34 "+ error)
      })
    }

  }

}


export default EditComponent;