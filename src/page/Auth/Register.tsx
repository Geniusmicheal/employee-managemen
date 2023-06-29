import Control from "./Control";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Register:React.FC  = () => {
   const [loader, setLoader] = useState(false);
   return <Control  setLoader={setLoader}>
      <div className="pt-4 pb-2">
         <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
         <p className="text-center small">Enter your personal details to create account</p>
         <div className="invalid-feedback" id="invalidFeedback"></div>
      </div>

      <div className="col-12">
         <label  className="form-label">Your Email</label>
         <input type="email" name="email" className="form-control" id="yourEmail" required/>
         <div className="invalid-feedback">Please enter a valid Email adddress!</div>
      </div>

      <div className="col-12">
         <label className="form-label">Password</label>
         <input type="password" name="password" className="form-control" id="yourPassword" required/>
         <div className="invalid-feedback">Please enter your password!</div>
      </div>

      <div className="col-12">
         <label className="form-label">Confirm Password</label>
         <input type="password" name="confirmPassword" className="form-control" id="yourPassword" required/>
         <div className="invalid-feedback">Please Confirm your password!</div>
      </div>

      <div className="col-12">
         <div className="form-check">
            <input className="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
            <label className="form-check-label" >I agree and accept the <Link to="/signup">terms and conditions</Link></label>
            <div className="invalid-feedback">You must agree before submitting.</div>
         </div>
      </div>

      <div className="col-12">
         <button className="btn btn-primary w-100" type="submit"  disabled={loader}>
            {loader?"Processing...":"Create Account"}
         </button>
      </div>
      <div className="col-12">
         <p className="small mb-0">Already have an account? 
            <Link to="/">Log in</Link>
         </p>
      </div>
   </Control>
}

export default Register;