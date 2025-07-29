// import React, { createContext, useState } from 'react';

// export const OrdersContext = createContext();

// export const OrdersProvider = ({ children }) => {
//   const [orders, setOrders] = useState([]);

//   // const addOrder = (order) => {
//   //   setOrders((prevOrders) => [...prevOrders, order]);
//   // };
//   const addOrder = async (order) => {
//     const user = auth.currentUser; // Get current user
//     if (user) {
//       const userRef = doc(db, "users", user.uid);
//       await setDoc(userRef, {
//         orders: [...orders, order] // Append new order to existing orders
//       }, { merge: true }); // Use merge to keep existing data
//     }
//   };

  
//   return (
//     <OrdersContext.Provider value={{ orders, addOrder }}>
//       {children}
//     </OrdersContext.Provider>
//   );
//  };
// yeh jo meny tumko jitni bhi file di hy ismy yeh kro ky jb mey signup kru to wo firebase key data base mey jakr save hoti rahy or jo gyee hy wo dubara na ho or login with goole krny pr sara data firebase mey chalyjaye or jo bhi mey order kru wo use email account mey save hojaye jb mey logout krky wapis bhi usi email pr aoon to wo jojo meny order kya tha wo save rhy my order mey or isko firebase key database firestore sey bhi connect krdo  

// import React, { createContext, useState } from 'react';
// import { db } from '../firebaseConfig'; // Adjust the path as necessary
// import { collection, addDoc } from "firebase/firestore";

// export const OrdersContext = createContext();

// export const OrdersProvider = ({ children }) => {
//   const [orders, setOrders] = useState([]);

//   const addOrder = async (order) => {
//     const docRef = await addDoc(collection(db, "orders"), order);
//     setOrders((prevOrders) => [...prevOrders, { id: docRef.id, ...order }]);
//   };

//   return (
//     <OrdersContext.Provider value={{ orders, addOrder }}>
//       {children}
//     </OrdersContext.Provider>
//   );
// // };
// import React, { createContext, useState } from 'react';
// import { db } from '../firebaseConfig'; // Adjust the path as necessary
// import { collection, addDoc, getDocs } from "firebase/firestore";

// export const OrdersContext = createContext();

// export const OrdersProvider = ({ children }) => {
//   const [orders, setOrders] = useState([]);

//   const addOrder = async (order) => {
//     const docRef = await addDoc(collection(db, "orders"), order);
//     setOrders((prevOrders) => [...prevOrders, { id: docRef.id, ...order }]);
//   };

//   const fetchOrders = async () => {
//     const ordersCollection = collection(db, "orders");
//     const ordersSnapshot = await getDocs(ordersCollection);
//     const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setOrders(ordersList);
//   };

//   return (
//     <OrdersContext.Provider value={{ orders, setOrders, addOrder, fetchOrders }}>
//       {children}
//     </OrdersContext.Provider>
//   );
// // };
// import React, { createContext, useState } from 'react';
// import { db } from '../firebaseConfig'; // Adjust the path as necessary
// import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// export const OrdersContext = createContext();

// export const OrdersProvider = ({ children, currentUser }) => {
//   const [orders, setOrders] = useState([]);

//   const addOrder = async (order) => {
   
//       if (!currentUser) {
//         console.error("No user is currently logged in.");
//         return; // Early return if currentUser is not defined
//       }
//       // const orderWithUserId = { ...order, userId: currentUser.uid };
//       // // Continue with the order saving process...
//     // };
//     // Add the userId to the order
//     const orderWithUserId = { ...order, userId: currentUser.uid };
//     const docRef = await addDoc(collection(db, "orders"), orderWithUserId);
//     setOrders((prevOrders) => [...prevOrders, { id: docRef.id, ...orderWithUserId }]);
    
//   };

//   const fetchOrders = async () => {
//     if (!currentUser) return; // Ensure user is logged in

//     const ordersCollection = collection(db, "orders");
//     const q = query(ordersCollection, where("userId", "==", currentUser.uid)); // Filter by userId
//     const ordersSnapshot = await getDocs(q);
    
//     const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setOrders(ordersList);
//   };

//   return (
//     <OrdersContext.Provider value={{ orders, setOrders, addOrder, fetchOrders }}>
//       {children}
//     </OrdersContext.Provider>
//   );
// };
  // const addOrder = async (order) => {
  //   if (!currentUser) {
  //     console.error("No user is currently logged in.");
  //     return; // Early return if currentUser is not defined
  //   }

  //   const orderWithUserId = {
  //     ...order,
  //     userId: currentUser.uid,
  //     createdAt: Date.now(), // Add a timestamp
  //   };
     
  //   try {
  //     const docRef = await addDoc(collection(db, "orders"), orderWithUserId);
  //     // Add the new order to the local state
  //     setOrders((prevOrders) => [...prevOrders, { id: docRef.id, ...orderWithUserId }]);
  //   } catch (error) {
  //     console.error("Error adding order: ", error);
  //   }
  // };
  // const addOrder = async (order) => {
  //   if (!currentUser) {
  //     console.error("No user is currently logged in.");
  //     return;
  //   }
  
  //   // Add the userId and timestamp to the order
  //   const orderWithUserId = { 
  //     ...order, 
  //     userId: currentUser.uid,
  //     timestamp: new Date().toISOString(), // Add timestamp
  //   };
  
  //   const docRef = await addDoc(collection(db, "orders"), orderWithUserId);
  //   setOrders((prevOrders) => [...prevOrders, { id: docRef.id, ...orderWithUserId }]);
  // };
  

    
  // const fetchOrders = async () => {
  //   if (!currentUser) return; // Ensure user is logged in

  //   const ordersCollection = collection(db, "orders");
  //   const q = query(ordersCollection, where("userId", "==", currentUser.uid)); // Filter by userId
  //   const ordersSnapshot = await getDocs(q);
    
  //   const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  //   // Sort orders by ID or timestamp if available
  //   const sortedOrders = ordersList.sort((a, b) => b.createdAt - a.createdAt); // Adjust based on your order structure
  //   setOrders(sortedOrders);
  // };
  // const fetchOrders = async () => {
  //   try {
  //     const ordersCollection = collection(db, "orders");
  //     const ordersSnapshot = await getDocs(ordersCollection);
  //     const ordersList = ordersSnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));
  
  //     // Optionally sort orders based on timestamp if available
  //     const sortedOrders = ordersList.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Ensure timestamp is compared correctly
  //     setOrders(sortedOrders);
  //   } catch (error) {
  //     console.error('Error fetching orders: ', error);
  //   }
//   // };
//   import React, { createContext, useState } from 'react';
// import { db } from '../firebaseConfig'; // Adjust the path as necessary
// import { collection, addDoc, getDocs} from "firebase/firestore";

// export const OrdersContext = createContext();

// export const OrdersProvider = ({ children, currentUser }) => {
//   const [orders, setOrders] = useState([]);

//   const addOrder = async (order) => {
//     if (!currentUser) {
//       console.error("No user is currently logged in.");
//       return;
//     }
  
//     // Add the userId and timestamp to the order
//     const orderWithUserId = { 
//       ...order, 
//       userId: currentUser.uid,
//       timestamp: new Date().toISOString(), // Add timestamp
//     };
  
//     const docRef = await addDoc(collection(db, "orders"), orderWithUserId);
//     setOrders((prevOrders) => [...prevOrders, { id: docRef.id, ...orderWithUserId }]);
//   };
//   const newOrder = {
//     details: "Details about the order",
//     totalAmount: 100, // or calculate it based on the items
//     status: "pending" // or any status
//   };
  
//   addOrder(newOrder);
//   const fetchOrders = async () => {
//     try {
//       const ordersCollection = collection(db, "orders");
//       const ordersSnapshot = await getDocs(ordersCollection);
//       const ordersList = ordersSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data() // This will include all fields saved in Firestore
//       }));
  
//       const sortedOrders = ordersList.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
//       setOrders(sortedOrders);
//     } catch (error) {
//       console.error('Error fetching orders: ', error);
//     }
//   };
  
//   return (
//     <OrdersContext.Provider value={{ orders, setOrders, addOrder, fetchOrders }}>
//       {children}
//     </OrdersContext.Provider>
//   );
// // };
// import React, { createContext, useState, useEffect } from 'react';
// import { db } from '../firebaseConfig'; // Adjust the path as necessary
// import { collection, addDoc, getDocs } from "firebase/firestore";

// export const OrdersContext = createContext();

// export const OrdersProvider = ({ children, currentUser }) => {
//   const [orders, setOrders] = useState([]);

//   const addOrder = async (order) => {
//     if (!currentUser) {
//       console.error("No user is currently logged in.");
//       return;
//     }
  
//     // Add the userId and timestamp to the order
//     const orderWithUserId = { 
//       ...order, 
//       userId: currentUser.uid,
//       timestamp: new Date().toISOString(), // Add timestamp
//     };
  
//     try {
//       const docRef = await addDoc(collection(db, "orders"), orderWithUserId);
//       setOrders((prevOrders) => [...prevOrders, { id: docRef.id, ...orderWithUserId }]);
//     } catch (error) {
//       console.error('Error adding order: ', error);
//     }
//   };

//   const fetchOrders = async () => {
//     if (!currentUser) return; // Only fetch orders if user is logged in

//     try {
//       const ordersCollection = collection(db, "orders");
//       const ordersSnapshot = await getDocs(ordersCollection);
//       const ordersList = ordersSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       const sortedOrders = ordersList.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
//       setOrders(sortedOrders);
//     } catch (error) {
//       console.error('Error fetching orders: ', error);
//     }
//   };

//   // Fetch orders when currentUser changes
//   useEffect(() => {
//     fetchOrders();
//   }, [currentUser]);

//   return (
//     <OrdersContext.Provider value={{ orders, addOrder }}>
//       {children}
//     </OrdersContext.Provider>
//   );
// // };
// import React, { createContext, useState } from 'react';
// import { db } from '../firebaseConfig'; 
// import { collection, addDoc, getDocs } from 'firebase/firestore';

// export const OrdersContext = createContext();

// export const OrdersProvider = ({ children, currentUser }) => {
//   const [orders, setOrders] = useState([]);

//   const addOrder = async (order) => {
//     if (!currentUser) {
//       console.error("No user is currently logged in.");
//       return;
//     }
  
//     const orderWithUserId = { 
//       ...order, 
//       userId: currentUser.uid,
//       timestamp: new Date().toISOString(),
//     };
  
//     const docRef = await addDoc(collection(db, "orders"), orderWithUserId);
//     setOrders((prevOrders) => [...prevOrders, { id: docRef.id, ...orderWithUserId }]);
//   };

//   const fetchOrders = async () => {
//     try {
//       const ordersCollection = collection(db, "orders");
//       const ordersSnapshot = await getDocs(ordersCollection);
//       const ordersList = ordersSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
  
//       const sortedOrders = ordersList.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
//       setOrders(sortedOrders);
//     } catch (error) {
//       console.error('Error fetching orders: ', error);
//     }
//   };
  
//   return (
//     <OrdersContext.Provider value={{ orders, addOrder, fetchOrders }}>
//       {children}
//     </OrdersContext.Provider>
//   );
// };
// In your OrdersContext.js
import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Adjust the path as necessary
import { collection, getDocs, query, where,addDoc } from 'firebase/firestore';

export const OrdersContext = createContext();

export const OrdersProvider = ({ children, currentUser }) => {
    const [orders, setOrders] = useState([]);
  
    const addOrder = async (order) => {
      if (!currentUser) return; // Ensure the user is logged in
      const ordersRef = collection(db, 'orders');
      await addDoc(ordersRef, { ...order, userId: currentUser.uid }); // Include user ID
  };

    const fetchOrders = async () => {
        if (!currentUser) return; // Return if no user is logged in

        try {
            const ordersRef = collection(db, 'orders');
            const q = query(ordersRef, where('userId', '==', currentUser.uid)); // Filter by user ID
            const querySnapshot = await getDocs(q);
            const fetchedOrders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setOrders(fetchedOrders);
        } catch (error) {
            console.error("Error fetching orders: ", error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, [currentUser]);

    return (
        <OrdersContext.Provider value={{ orders, fetchOrders ,addOrder}}>
            {children}
        </OrdersContext.Provider>
    );
};
