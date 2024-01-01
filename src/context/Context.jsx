import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const Authcontext = createContext(null)
const auth = getAuth(app);


const Context = ({ children }) => {

    const [user, setuser] = useState(null)

    const createuser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, createuser => {
            console.log("this sing ", createuser);
            setuser(createuser)
        });
        return () => {
            unsubscribe()
        }

    }, [])




    const authinfo = {
        user,
        createuser,
        logout,
        signin
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Context;