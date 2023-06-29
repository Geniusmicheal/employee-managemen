import { createContext, useContext, useEffect, useState } from "react";
import { gomermAuthState } from "./Auth";

const AppContext = createContext<any>({
   userData: null,
   setUserData : () => undefined
});


export const useAppContext = () => useContext(AppContext)


const AppProvider:React.FC<{ children: any }> = ({children}): any => {
   const [userData, setUserData] = useState<any>(null);

   useEffect( () => { 
      (async () => await gomermAuthState(setUserData))();
      console.log(userData)
   } ,[]);

   const contextValue = { userData, setUserData };
   return (<AppContext.Provider value ={contextValue}> {children}</AppContext.Provider>);
}

export default AppProvider;