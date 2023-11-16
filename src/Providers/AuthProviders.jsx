/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useState, useEffect } from "react";

const auth = getAuth(app);

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        console.log(name, photo);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    const authInfo = {
        createUser,
        loading,
        user,
        signIn,
        logOut,
        updateUserProfile,
        logInWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;