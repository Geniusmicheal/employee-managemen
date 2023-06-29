import { useState } from "react";
import { onSubmitEmployee } from "./Service";

const CreateEmployee: React.FC = () => {
   const [alert, setAlert] = useState(false),
      [loader, setLoader] = useState(false);

   return <section className="section">
      <div className="card">
         <div className="card-body">
            <h5 className="card-title">Create Employee Detail</h5>
            {alert && <div className="alert alert-success alert-dismissible fade show">
               Employee Detail inserted successfully
               <button type="button" className="btn-close"  aria-label="Close" onClick={()=>setAlert(!alert)}></button>
              </div>}


            <form className="row" method="post"  onSubmit={onSubmitEmployee.bind(this, { setLoader, setAlert })}>
               <div className="mb-3 col-md-12">
                  <input type="text" className="form-control" placeholder="Fullname" name="fullname" required/>
               </div>

               <div className="mb-3 col-md-6">
                  <input type="email" className="form-control" placeholder="email" name="email" required/>
               </div>

               <div className="mb-3 col-md-3">
                  <input type="tel" className="form-control" placeholder="Phone number"  name="phoneNumber" required/>
               </div>

               <div className="mb-3 col-md-3">
                  <select className="form-select" name="role" required>
                     <option  disabled>Employee Role</option>
                     <option >Designer</option>
                     <option >Frontend Developer</option>
                     <option>Backend Developer</option>
                  </select>
               </div>

               <div className="mb-3 col-md-4">
                  <label className="col-form-label">Hire Date</label>
                  <input type="date" className="form-control" placeholder="Hire Date" name="hireDate" required/>
               </div>

               <div className="mb-3 col-md-4">
                  <label className="col-form-label">Salary</label>
                  <input type="number" className="form-control" placeholder="Employee Salary" name="salary" required/>
               </div>


               <div className="mb-3 col-md-4">
                  <label className="col-form-label">Employee Profile</label>
                  <input className="form-control" type="file" id="formFile"  name="profile" required accept="image/*"/>
               </div>

               <div className="mb-3 col-md-12">
                  <input type="text" className="form-control" placeholder="Address" name="address" required/>
               </div>
               <div className="mb-3 col-md-4">
                  <button className="btn btn-primary" type="submit" disabled={loader}>{loader?"Processing...":"Submit"}</button>
               </div>

            </form>
         </div>
      </div>
   </section>
}
   export default CreateEmployee;