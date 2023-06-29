import { Link } from 'react-router-dom';
import Logo from "../assets/img/logo.png";
import profileImg from "../assets/img/profile-img.jpg";

// toggle-sidebar 

const Header:React.FC<{ userData:any }>  = ({userData}) => { 
   return <header id="header" className="header fixed-top d-flex align-items-center">

      <div className="d-flex align-items-center justify-content-between">
         <Link to="dashboard" className="logo d-flex align-items-center">
            <img src={Logo} alt=""/>
            <span className="d-none d-lg-block">NiceAdmin</span>
         </Link>
         <i className="bi bi-list toggle-sidebar-btn" onClick={()=>document.body.classList.toggle("toggle-sidebar")}></i>
      </div>

      <div className="search-bar">
         <form className="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
         </form>
      </div>

      <nav className="header-nav ms-auto">
         <ul className="d-flex align-items-center">

            <li className="nav-item d-block d-lg-none">
               <span className="nav-link nav-icon search-bar-toggle ">
                  <i className="bi bi-search"></i>
               </span>
            </li>

            <li className="nav-item dropdown">
               <span className="nav-link nav-icon" data-bs-toggle="dropdown">
                  <i className="bi bi-bell"></i>
                  <span className="badge bg-primary badge-number">4</span>
               </span>
            </li>

            <li className="nav-item dropdown">
               <span className="nav-link nav-icon"  data-bs-toggle="dropdown">
                  <i className="bi bi-chat-left-text"></i>
                  <span className="badge bg-success badge-number">3</span>
               </span>
            </li>

            <li className="nav-item dropdown pe-3">
               <span className="nav-link nav-profile d-flex align-items-center pe-0"  data-bs-toggle="dropdown">
                  <img src={profileImg} alt="Profile" className="rounded-circle"/>
                  <span className="d-none d-md-block dropdown-toggle ps-2">{userData?.['email']}</span>
               </span>
            </li>
         </ul>
      </nav>
   </header>
}
export default Header;