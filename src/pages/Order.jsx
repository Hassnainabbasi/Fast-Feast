import React, { useContext, useEffect, useState } from 'react';
import { OrdersContext } from '../context/OrdersContext';
import { Spin } from 'antd';
import { AuthContext } from '../context/AuthContext';

function OrdersPage() {
    const { orders, fetchOrders } = useContext(OrdersContext);
    const { currentUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadOrders = async () => {
            if (currentUser) {
                await fetchOrders();
            }
            setLoading(false);
        };

        loadOrders();
    }, [fetchOrders, currentUser]);

    if (loading) {
        return <h1 className='text-center'><Spin /></h1>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">My Orders</h2>
            {orders.length === 0 ? (
                <p className="text-center text-lg">No orders yet.</p>
            ) : (
                <div className="grid grid-cols-1 gap-8">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <h3 className='text-xl font-semibold text-gray-800'>Order #{order.id}</h3>
                            <p className='text-md font-semibold text-gray-700'>Total Price: ${order.totalPrice.toFixed(2)}</p>
                            <p className='text-md text-gray-600'>Total Quantity: {order.totalQuantity}</p>
                            <p className='text-md text-gray-600'>Status: <span className={`font-semibold ${order.status === 'pending' ? 'text-yellow-600' : order.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}>{order.status}</span></p>
                            <p className='text-md text-gray-600'>Order Placed: {new Date(order.timestamp).toLocaleString()}</p>
                            <h4 className="font-semibold mt-4 text-gray-800">Recipes:</h4>
                            <ul className="list-disc list-inside pl-4">
                                {order.recipes.length > 0 ? (
                                    order.recipes.map((recipe, idx) => (
                                        <li key={idx} className="text-gray-700">{recipe}</li>
                                    ))
                                ) : (
                                    <li className="text-gray-600">No recipes available</li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default OrdersPage;


// import React, { useContext, useState, useEffect } from 'react';
// import { OrdersContext } from '../context/OrdersContext';
// import { Spin } from 'antd';

// function OrdersPage() {
//   const { orders, fetchOrders } = useContext(OrdersContext);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadOrders = async () => {
//       await fetchOrders();
//       setLoading(false);
//     };

//     loadOrders();
//   }, [fetchOrders]);

//   if (loading) {
//     return <h1 className='text-center'><Spin/></h1>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-8">
//           {orders.map((order) => (
//             <div key={order.id} className="bg-white shadow-md rounded-lg p-4">
//               <h3 className='text-xl font-semibold'>Order #{order.id}</h3>
//               <p className='text-md font-semibold'>Total Price: {order.totalPrice.toFixed(2)}</p>
//               <p>Total Quantity: {order.totalQuantity}</p>
//               <p>Status: {order.status}</p>
//               <p>Order Placed: {new Date(order.timestamp).toLocaleString()}</p> {/* Display timestamp */}
//               <h4 className="font-semibold mt-2">Recipes:</h4>
//               <ul>
//                 {order.recipes.length > 0 ? (
//                   order.recipes.map((recipe, idx) => (
//                     <li key={idx}>{recipe}</li>
//                   ))
//                 ) : (
//                   <li>No recipes available</li>
//                 )}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default OrdersPage;

// import React, { useContext, useState, useEffect } from 'react';
// import { OrdersContext } from '../context/OrdersContext';
// import { Spin } from 'antd';

// function OrdersPage() {
//   const { orders,fetchOrders } = useContext(OrdersContext);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const loadOrders = async () => {
//       await fetchOrders();
//       setLoading(false);
//     };

//     loadOrders();
//   }, [fetchOrders]);

//   if (loading) {
//     return <h1 className='text-center'><Spin/></h1>
//   }
//   return (
//     <div className="container mx-auto p-4">
//       <h2>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         orders.map((order, index) => (
//           <div className="grid grid-cols-1 gap-" key={index} >
//             <div className="bg-white shadow-md rounded-lg p-4 ">
//             <h3 className='text-xl font-semibold'>Order #{}</h3>
//             <p className='text-md font-semibold'>Total Price: ${order.totalPrice}</p>
//             <p>Total Quantity: {order.totalQuantity}</p>
//             <p>Status: {order.status}</p>
//             <h4 className="font-semibold mt-2">Recipes:</h4>
//             <ul>
//               {order.recipes.map((recipe, idx) => (
//                 <li key={idx}>{recipe}</li>
//               ))}
//             </ul>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
    
//   );
// }

//  export default OrdersPage;
// import React, { useContext, useEffect, useState } from 'react';
// import { OrdersContext } from '../context/OrdersContext';

// function OrdersPage() {
//   const { orders, fetchOrders } = useContext(OrdersContext);
//   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadOrders = async () => {
  //     await fetchOrders();
  //     setLoading(false);
  //   };

  //   loadOrders();
  // }, [fetchOrders]);

  // if (loading) {
  //   return <p>Loading orders...</p>;
  // }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">My Orders</h2>
//       {orders.length === 0 ? (
//         <p className="text-gray-600">No orders yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-4">
//          {orders.map((order) => (
//   <div key={order.id} className="bg-white shadow-md rounded-lg p-4">
//     <h3 className="text-xl font-semibold">Order #{order.id}</h3>
//     <p className="text-gray-600">Total Price: ${order.totalPrice.toFixed(2)}</p>
//     <p className="text-gray-600">Total Quantity: {order.totalQuantity}</p>
//     <p className="text-gray-600">Status: {order.status}</p>
//     <h4 className="font-semibold mt-2">Recipes:</h4>
//     <ul className="list-disc list-inside">
//       {order.recipes.map((recipe, idx) => (
//         <li key={idx} className="text-gray-700">{recipe}</li>
//       ))}
//     </ul>
//   </div>
// ))}

//         </div>
//       )}
//     </div>
//   );
// }

// export default OrdersPage;

// import React, { useContext, useEffect, useState } from 'react';
// import { db } from '../firebaseConfig'; // Adjust path as necessary
// import { collection, getDocs } from "firebase/firestore";
// import { OrdersContext } from '../context/OrdersContext';

// function OrdersPage() {
//   const { orders, setOrders } = useContext(OrdersContext);
//   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     const ordersCollection = collection(db, "orders");
  //     const ordersSnapshot = await getDocs(ordersCollection);
  //     const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  //     setOrders(ordersList);
  //     setLoading(false);
  //   };

  //   fetchOrders();
  // }, [setOrders]);

//   if (loading) {
//     return <p>Loading orders...</p>;
//   }

//   return (
//     <div className="orders-page">
//       <h2>My Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         orders.map((order, index) => (
//           <div key={index} className="order">
//             <h3>Order #{index + 1}</h3>
//             <p>Total Price: ${order.totalPrice}</p>
//             <p>Total Quantity: {order.totalQuantity}</p>
//             <p>Status: {order.status}</p>
//             <h4>Recipes:</h4>
//             <ul>
//               {order.recipes.map((recipe, idx) => (
//                 <li key={idx}>{recipe}</li>
//               ))}
//             </ul>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// // export default OrdersPage;
// import React, { useContext, useEffect, useState } from 'react';
// import { OrdersContext } from '../context/OrdersContext';

// function OrdersPage() {
//   const { orders, fetchOrders } = useContext(OrdersContext);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadOrders = async () => {
//       await fetchOrders();
//       setLoading(false);
//     };

//     loadOrders();
//   }, [fetchOrders]);

//   if (loading) {
//     return <p>Loading orders...</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">My Orders</h2>
//       {orders.length === 0 ? (
//         <p className="text-gray-600">No orders yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 gap-4">
//           {orders.map((order, index) => (
//             <div key={order.id} className="bg-white shadow-md rounded-lg p-4">
//               <h3 className="text-xl font-semibold">Order #{index + 1}</h3>
//               <p className="text-gray-600">Total Price: ${order.totalPrice.toFixed(2)}</p>
//               <p className="text-gray-600">Total Quantity: {order.totalQuantity}</p>
//               <p className="text-gray-600">Status: {order.status}</p>
//               <h4 className="font-semibold mt-2">Recipes:</h4>
//               <h4 className="font-semibold mt-2">Recipes:</h4>
// <ul className="list-disc list-inside">
//   {order.recipes.map((recipe, idx) => (
//     <li key={idx} className="text-gray-700">{recipe}</li>
//   ))}
// </ul>

//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// // export default OrdersPage;