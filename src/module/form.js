import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class EditComponent extends React.Component{
 render(){
     
   let userId = 1;

   //let userId = this.props.match.params.employeeId;
   return (
     <form>
       <div className="form-row justify-content-center">
         <div className="form-group col-md-6">
           <label for="inputPassword4">Name { userId }</label>
           <input type="text" className="form-control"  placeholder="Name"/>
         </div>
         <div className="form-group col-md-6">
           <label for="inputEmail4">Email</label>
           <input type="email" className="form-control"  placeholder="Email"/>
         </div>
       </div>
       <div className="form-row">
         <div className="form-group col-md-6">
           <label for="inputState">Role</label>
           <select id="inputState" className="form-control">
             <option selected>Choose...</option>
             <option>...</option>
           </select>
         </div>
         <div className="form-group col-md-6">
           <label for="inputEmail4">Phone</label>
           <input type="number" className="form-control"  placeholder="Email"/>
         </div>
       </div>
       <div className="form-group">
         <label for="inputAddress">Address</label>
         <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
       </div>

       <button type="submit" className="btn btn-primary">Sign in</button>
     </form>
   );
 }
}


export default EditComponent;