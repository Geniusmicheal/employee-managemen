import initializeFirebaseApp from "../../provider/Firebase";
import { addDoc,collection, getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export const onSubmitEmployee = async ({setLoader, setAlert}:any, event:any) => {
   event.preventDefault();
   setLoader(true);
   const formData = event.target,
   db = getFirestore(initializeFirebaseApp),
   storage = getStorage(initializeFirebaseApp),
   {fullname, email, phoneNumber, role, hireDate, salary, profile, address } = formData.elements,
   EmployeeDetails:any ={
      email: email.value,
      phoneNumber: phoneNumber.value,
      fullname: fullname.value,
      role: role.value,
      hireDate: hireDate.value,
      salary: salary.valueAsNumber,
      address: address.value
   },
   { name, type } = profile.files[0],
   storageRef = ref(storage, `image/${name}`),
  downloadDetails = await uploadBytes(storageRef, profile.files[0] , { contentType:type });
  await getDownloadURL(downloadDetails.ref).then((resp:any) => EmployeeDetails['profile']={name,url:resp});
  addDoc(collection(db,'employeeRecord'),EmployeeDetails);
   formData.reset();
   setAlert(true);
   setLoader(false);
}


// const formData = e.target;
// const {file_description } = formData.elements;
// const DownloadURL ={
//   timestamp :new Date(),
//   description:file_description.value
// };
// const allFileInput= formData.querySelectorAll("input[type=file]");

// for (let i = 0; i < allFileInput.length; i++) {
//     const {name,type} = allFileInput[i].files[0];
//     const fileType = type?type?.split('/')[0]:'zip';
//     const storageRef = ref(storage, `${fileType}/${name}`);
//     const downloadDetails= await uploadBytes(storageRef, allFileInput[i].files[0] , { contentType:type });
//    await getDownloadURL(downloadDetails.ref).then(resp => DownloadURL[fileType]={name,url:resp});
// }
//       addDoc(collection(db,'project'),DownloadURL);
//  formData.reset();
 
