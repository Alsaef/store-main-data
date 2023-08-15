import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut,onAuthStateChanged  } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const Auth=getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser=(email,password)=>{
            return createUserWithEmailAndPassword(Auth,email,password)
    }
    const SingIn=(email,password)=>{
            return signInWithEmailAndPassword(Auth,email,password)
    }
    const logOut=()=>{
            return signOut(Auth)
    }

    // objurb 

    useEffect(()=>{
        const unsubscrib = onAuthStateChanged(Auth,currentUser =>{
            setuser(currentUser)
            setLoading(false)
           })
           return ()=>{
           return unsubscrib()
           }
    },[])
    const UserInfo = {
        user,
        createUser,
        SingIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={UserInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;