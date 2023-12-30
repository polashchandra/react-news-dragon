import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

 export const  Authcontext=createContext(null)
const auth = getAuth(app);


const Context = ({children}) => {

    const [user,setuser]=useState(null)
    const createuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }




    const authinfo={
        user,
        createuser
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Context;