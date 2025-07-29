// import { useEffect, useState, createContext } from "react";
// import { auth } from '../firebaseConfig'; // Adjust as needed

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
    
//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             setCurrentUser(user); // Set current user
//         });

//         return () => unsubscribe();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ currentUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// // };
// import { useEffect, useState, createContext } from "react";
// import { auth } from '../firebaseConfig'; // Adjust as needed
// import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(null);
    
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, user => {
//             setCurrentUser(user); // Set current user
//         });

//         return () => unsubscribe();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ currentUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig'; // Adjust your import
import { signOut } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null); // Update the state
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
