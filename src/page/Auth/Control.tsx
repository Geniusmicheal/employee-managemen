import { useEffect } from "react";
import { onSubmitAuth } from "./Service";
import Logo from "../../assets/img/logo.png";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from './../../provider/AppProvider';


const Control:React.FC<{ children: any, setLoader:any }> = ({children, setLoader}) => {
   const navigate = useNavigate(),
   { userData, setUserData } = useAppContext();

   useEffect( () => { 
      if(userData) navigate('/dashboard');
   } ,[userData]);

   return <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                     <div  className="logo d-flex align-items-center w-auto">
                        <img src={Logo} alt=""/>
                        <span className="d-none d-lg-block">NiceAdmin</span>
                     </div>
                  </div>

                  <div className="card mb-3">
                     <div className="card-body">
                        <form className="row g-3 needs-validation" method="post" autoComplete="off" onSubmit={onSubmitAuth.bind(this, {navigate,setLoader, setUserData})}>{children}</form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>

}

export default Control;

{/* onSubmit={onSubmitAuth.bind(this, onSubmitAgument)} */}