import { gomermSignIn, gomermSignUp } from "./../../provider/Auth";

export const onSubmitAuth:any= async ({navigate,setLoader, setUserData}:any,event:any) => {
   event.preventDefault();
   setLoader(true);
   const invalidFeedback = document.getElementById("invalidFeedback") as HTMLElement,
   {email, password, confirmPassword}:any = (event.target as HTMLFormElement).elements;
   
   if(confirmPassword && (password.value!==confirmPassword.value))
      confirmPassword.nextElementSibling.style.display="block";
   
   else await (confirmPassword ? gomermSignUp : gomermSignIn)(email.value, password.value).then(userCredential => {
      const {user} = userCredential;
      setUserData({
         uid: user.uid,
         email: user.email,
         emailVerified: user.emailVerified
      });
      navigate('/dashboard');
   }).catch(() => invalidFeedback.innerHTML = (confirmPassword? "Please use the login link, your email or password exists, ": "Incorrect email or passsword" ));
   setLoader(false);
}

// showAlert(,"danger")