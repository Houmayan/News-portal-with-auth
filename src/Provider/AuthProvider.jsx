import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContextProvider = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [loading,setLoading] = useState(true);

    const [user, setUser] = useState(null);

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const logIn = (email,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( ()=>{
        const unSubscribe =  onAuthStateChanged(auth,currentUser=>{
            // console.log('Current user: ',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{unSubscribe()};
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }

    return (
        <AuthContextProvider.Provider value={authInfo}>
            {children}
        </AuthContextProvider.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children:PropTypes.node,
}