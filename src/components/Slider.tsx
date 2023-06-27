import { Link } from 'react-router-dom';
const Slider:React.FC  = () => { 
   return <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">
         <li className="nav-item">
            <Link className="nav-link collapsed" to="dashboard">
               <i className="bi bi-grid"></i>
               <span>Dashboard</span>
            </Link>
         </li>

         <li className="nav-item">
            <Link className="nav-link collapsed" to="create">
               <i className="bi bi-person"></i>
               <span>Create Employee</span>
            </Link>
         </li>

         <li className="nav-item">
            <Link className="nav-link collapsed" to="view">
               <i className="bi bi-journal-text"></i>
               <span>View Employee</span>
            </Link>
         </li>
      </ul>
   </aside>

}
export default Slider;