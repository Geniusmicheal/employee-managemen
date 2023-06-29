import initializeFirebaseApp from "./Firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


const auth = getAuth(initializeFirebaseApp);

const gomermSignIn = (email: string, password: string) => {
   return signInWithEmailAndPassword(auth, email, password);
}


const gomermAuthState = async (setUserData:any) =>{
   return await onAuthStateChanged(auth, (userDetail) => {
      if(userDetail) setUserData({
            uid: userDetail.uid,
            email: userDetail.email,
            emailVerified: userDetail.emailVerified
      });else gomermLogOut(setUserData);
   });
}


const gomermLogOut = (setUserData:any) => {
   return signOut(auth).then(() =>  setUserData(null) )
   .catch((error)=> console.log(error));
}


const gomermSignUp = (email: string, password: string) => {
   return createUserWithEmailAndPassword(auth, email, password)
}
export { gomermSignIn, gomermSignUp, gomermAuthState, gomermLogOut };


// https://firebase.google.com/docs/auth/web/manage-users