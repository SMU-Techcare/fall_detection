import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState();


    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
            .catch((err) => {
                throw err.message;
            });
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
            .catch((err) => {
                throw err.message;
            });
    }

    function logout() {
        return signOut(auth)
            .catch((err) => {
                throw err.message;
            });
    }

    // function resetPassword(email) {
    //     return sendPasswordResetEmail(auth,email);
    // }

    // function updateEmail(email) {
    //     return currentUser.updateEmail(email);
    // }

    // function updatePassword(password) {
    //     return currentUser.updatePassword(password);
    // }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);


    const value = {
        currentUser,
        login,
        signup,
        logout,
        // resetPassword,
        // updateEmail,
        // updatePassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}