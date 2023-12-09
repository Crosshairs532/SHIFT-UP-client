import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";


export const authContext = createContext(null);

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const [theme, setTheme] = useState(true)
    const handleTheme = () => {
        setTheme(!theme)
    }
    const signUp = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, Cuser => {
            setUser(Cuser)
            setLoader(false)
        })
        return () => unSubscriber();
    }, [])



    const authInfo = { signIn, signUp, logOut, user, loader, signInGoogle, handleTheme, theme, setTheme }
    return (
        <div>


            <authContext.Provider value={authInfo}>
                {
                    children
                }

            </authContext.Provider>


        </div>
    );
};

export default Authprovider;