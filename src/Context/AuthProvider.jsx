import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
//email signUp
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
//email signIn
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google signIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //logOut
  const logOut=()=>{
    return signOut(auth)
  }
  //password reset
const passwordReset = (email) => {
    return sendPasswordResetEmail(auth,email);
  };
  //   update user
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    user,
    loading,
    signInUser,
    googleSignIn,
    logOut,
    setLoading,
    setUser,
    passwordReset,
    updateUser
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
