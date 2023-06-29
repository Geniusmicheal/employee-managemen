import { collection, getDocs, getFirestore} from "firebase/firestore";
import { useEffect, useState } from "react"
import initializeFirebaseApp from "../../provider/Firebase";

const db = getFirestore(initializeFirebaseApp),
style= { padding: "0 1em", lineHeight: "2em",  
   height: "fit-content", fontSize: '.8rem', borderRadius: '5rem',
cursor: 'pointer' },


Employee:React.FC = () => {
   const [pageNum, setPageNum] = useState(0);
   const [employee, setEmployees] = useState<any>([]);
   
   const onPagination_ =(e:any) => {
      let current= pageNum;
      let next =+(e.target.id);
     let last =employee.length%10 > 0 ? +(employee.length/10)+1 : +(employee.length/10);
     if((next ===-1 && current >0) || (next ===1 && current < last) ) setPageNum(+(current)+(next));
 }
 
   useEffect( () => { 
      
      (async ()=> {

         const dataList:any= [];
         await getDocs(collection(db, "employeeRecord")).then((snapshot:any) =>{
            snapshot.forEach((doc:any)=> dataList.push(doc.data()));
            console.log(dataList)
            setEmployees([...dataList])
         });
      })();
   } ,[]);

   return <section className="section">
       <div className="card">
         <div className="card-body table-responsive">
            <table className="table table-sm table-striped">
               <thead>
                  <tr style={{fontSize: '.8rem'}}>
                    <th></th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Address</th>
                    <th>Hire Date</th>
                  </tr>
                </thead>
                <tbody>
                  { employee.slice(+(1*pageNum*10 ),10*+(pageNum+1)).map((item:any) => <tr style={{fontSize: '.8rem'}} key={item['email']}>
                    <th>
                     <img src={item['profile']['url']} loading="lazy" style={{width: '34px', height: '34px', borderRadius: '50%'}}/>
                     </th>
                    <td>{item['email']}</td>
                    <td>{item['fullname']}</td>
                    <td>{item['phoneNumber']}</td>
                    <td>{item['role']}</td>
                    <td>$ {item['salary']}</td>
                    <td>{item['address']}</td>
                    <td>{item['hireDate']}</td>
                  </tr>)}
                </tbody>
               </table>
         </div>
            <div className="card-footer">
                <ul className="pagination" style={{justifyContent:'space-between'}}>
                  <li className="page-item page-link" style={style} onClick={onPagination_} id="-1">Previous</li>
                  <li className="page-item page-link" style={style} onClick={onPagination_} id="1">Next</li>
                </ul>
         </div>
      </div>
   </section>
}
export default Employee
// prev=>((prev-1) >= 1 ?(prev-1):1) 

