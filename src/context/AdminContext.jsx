import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false); // State to manage admin status

  const loginAsAdmin = (email, password) => {
    // Check against the specified admin credentials
    if (email === 'admin@gmail.com' && password === 'admin1111') {
      setIsAdmin(true);
    } else {
      console.error("Invalid admin credentials");
    }
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider value={{ isAdmin, loginAsAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
