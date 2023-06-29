import Control from "./Control";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Login:React.FC  = () => {
   const [loader, setLoader] = useState(false);
   return <Control setLoader={setLoader}>
      <div className="pt-4 pb-2">
         <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
         <p className="text-center small">Enter your username & password to login</p>
         <div className="invalid-feedback" id="invalidFeedback"></div>
      </div>

      <div className="col-12">
         <label  className="form-label">Your Email</label>
         <input type="email" name="email" className="form-control" id="yourEmail" required defaultValue="kminchelle@gmail.com"/>
         <div className="invalid-feedback">Please enter a valid Email adddress!</div>
      </div>

      <div className="col-12">
         <label className="form-label">Password</label>
         <input type="password" name="password" className="form-control" id="yourPassword" required defaultValue="0lelplR"/>
         <div className="invalid-feedback">Please enter your password!</div>
      </div>

      <div className="col-12">
         <div className="form-check">
            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
            <label className="form-check-label">Remember me</label>
         </div>
      </div>
      
      <div className="col-12">
         <button className="btn btn-primary w-100" type="submit" disabled={loader}>{loader?"Processing...":"Login"}</button>
      </div>
      
      <div className="col-12">
         <p className="small mb-0">Don't have account? 
            <Link to="/signup">Create an account</Link>
         </p>
      </div>
   </Control>
}

export default Login;