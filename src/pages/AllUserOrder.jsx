// // AllUserOrders.jsx
// import React, { useEffect, useState } from 'react';
// import { db } from '../firebaseConfig'; // Adjust path as necessary
// import { collection, getDocs } from 'firebase/firestore';

// const AllUserOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const ordersCollection = collection(db, 'orders'); // Adjust collection name if necessary
//         const ordersSnapshot = await getDocs(ordersCollection);
//         const ordersList = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setOrders(ordersList);
//       } catch (error) {
//         console.error('Error fetching orders: ', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading indicator while fetching data
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h2 className="text-3xl font-bold text-center mb-4">All User Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders found.</p>
//       ) : (
//         <table className="min-w-full border-collapse border border-gray-200">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">Order ID</th>
//               <th className="border border-gray-300 px-4 py-2">User</th>
//               <th className="border border-gray-300 px-4 py-2">Details</th>
//               <th className="border border-gray-300 px-4 py-2">Total Amount</th>
//               <th className="border border-gray-300 px-4 py-2">Status</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map(order => (
//               <tr key={order.id}>
//                 <td className="border border-gray-300 px-4 py-2">{order.id}</td>
//                 <td className="border border-gray-300 px-4 py-2">{order.userId}</td>
//                 <td className="border border-gray-300 px-4 py-2">{order.details}</td>
//                 <td className="border border-gray-300 px-4 py-2">{order.totalAmount}</td>
//                 <td className="border border-gray-300 px-4 py-2">{order.status}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// const handleDeleteOrder = async (orderId) => {
//   // Implement delete functionality here
//   try {
//     await deleteDoc(doc(db, 'orders', orderId)); // Adjust as necessary
//     alert('Order deleted successfully');
//     // Optionally refresh the orders list
//   } catch (error) {
//     console.error('Error deleting order: ', error);
//   }
// };

// // export default AllUserOrders;
// import React, { useContext, useEffect, useState } from 'react';
// import { OrdersContext } from '../context/OrdersContext';
// import { doc, deleteDoc } from 'firebase/firestore';
// import { db } from '../firebaseConfig';

// const AllUserOrder = () => {
//   const { orders, fetchOrders } = useContext(OrdersContext);
//   const [selectedOrders, setSelectedOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders(); // Fetch orders when component mounts
//   }, [fetchOrders]);

//   const handleCheckboxChange = (orderId) => {
//     setSelectedOrders((prev) =>
//       prev.includes(orderId) ? prev.filter(id => id !== orderId) : [...prev, orderId]
//     );
//   };

//   const handleSelectAllChange = (event) => {
//     if (event.target.checked) {
//       setSelectedOrders(orders.map(order => order.id)); // Select all
//     } else {
//       setSelectedOrders([]); // Deselect all
//     }
//   };

// //   const handleDeleteSelectedOrders = async () => {
// //     if (selectedOrders.length === 0) {
// //       alert('Please select at least one order to delete.');
// //       return;
// //     }

// //     try {
// //       await Promise.all(selectedOrders.map(orderId => {
// //         const orderDocRef = doc(db, 'orders', orderId);
// //         return deleteDoc(orderDocRef);
// //       }));
// //       setSelectedOrders([]); // Clear selected orders after deletion
// //       fetchOrders(); // Refresh orders after deletion
// //       alert('Selected orders deleted successfully.');
// //     } catch (error) {
// //       console.error('Error deleting selected orders: ', error);
// //     }
// //   };
// const handleDeleteSelectedOrders = async () => {
//     if (selectedOrders.length === 0) {
//       alert('Please select at least one order to delete.');
//       return;
//     }

//     try {
//       await Promise.all(selectedOrders.map(orderId => {
//         const orderDocRef = doc(db, 'orders', orderId); // Create a document reference
//         return deleteDoc(orderDocRef); // Delete the document
//       }));
//       setSelectedOrders([]); // Clear selected orders after deletion
//       fetchOrders(); // Refresh orders after deletion
//       alert('Selected orders deleted successfully.'); // Notify user
//     } catch (error) {
//       console.error('Error deleting selected orders: ', error); // Log error
//     }
//   };

//   return (
//     <div>
//       <h2>All User Orders</h2>
//       <button onClick={handleDeleteSelectedOrders} disabled={selectedOrders.length === 0}>
//         Delete Selected Orders
//       </button>
//       <table>
//         <thead>
//           <tr>
//             <th>
//               <input 
//                 type="checkbox" 
//                 onChange={handleSelectAllChange} 
//                 checked={selectedOrders.length === orders.length && orders.length > 0} 
//               />
//             </th>
//             <th>Order ID</th>
//             <th>User</th>
//             <th>Details</th>
//             <th>Total Amount</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.length > 0 ? (
//             orders.map(order => (
//               <tr key={order.id}>
//                 <td>
//                   <input 
//                     type="checkbox" 
//                     checked={selectedOrders.includes(order.id)} 
//                     onChange={() => handleCheckboxChange(order.id)} 
//                   />
//                 </td>
//                 <td>{order.id}</td>
//                 <td>{order.userId}</td>
//                 <td>{order.details}</td>
//                 <td>{order.totalAmount}</td>
//                 <td>{order.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">No orders found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // export default AllUserOrder;
// import React, { useContext, useEffect, useState } from 'react';
// import { OrdersContext } from '../context/OrdersContext'; // Adjust the import as necessary
// import { db } from '../firebaseConfig'; // Adjust the path as necessary
// import { deleteDoc, doc } from 'firebase/firestore';

// const AllUserOrder = () => {
//   const { orders, fetchOrders } = useContext(OrdersContext);
//   const [selectedOrders, setSelectedOrders] = useState([]);

//   // Function to handle deleting selected orders
//   const handleDeleteSelectedOrders = async () => {
//     if (selectedOrders.length === 0) {
//       alert('Please select at least one order to delete.');
//       return;
//     }

//     try {
//       await Promise.all(selectedOrders.map(orderId => {
//         const orderDocRef = doc(db, 'orders', orderId);
//         return deleteDoc(orderDocRef);
//       }));
//       setSelectedOrders([]);
//       fetchOrders();
//       alert('Selected orders deleted successfully.');
//     } catch (error) {
//       console.error('Error deleting selected orders: ', error);
//     }
//   };

//   // Fetch orders when component mounts
//   useEffect(() => {
//     fetchOrders();
//   }, [fetchOrders]);

//   // Render component
//   return (
//     <div>
//       <h1>All User Orders</h1>
//       <button onClick={handleDeleteSelectedOrders}>Delete Selected Orders</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Select</th>
//             <th>Order ID</th>
//             <th>User</th>
//             <th>Details</th>
//             <th>Total Amount</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map(order => (
//             <tr key={order.id}>
//               <td>
//                 <input
//                   type="checkbox"
//                   checked={selectedOrders.includes(order.id)}
//                   onChange={() => {
//                     setSelectedOrders(prev => 
//                       prev.includes(order.id) 
//                         ? prev.filter(id => id !== order.id) 
//                         : [...prev, order.id]
//                     );
//                   }}
//                 />
//               </td>
//               <td>{order.id}</td>
//               <td>{order.userId}</td>
//               <td>{order.details}</td>
//               <td>{order.totalAmount}</td>
//               <td>{order.status}</td>
//               <td>
//                 <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // export default AllUserOrder;
// import React, { useContext, useEffect, useState } from 'react';
// import { OrdersContext } from '../context/OrdersContext'; // Adjust the import as necessary
// import { db } from '../firebaseConfig'; // Adjust the path as necessary
// import { deleteDoc, doc } from 'firebase/firestore';

// const AllUserOrder = () => {
//   const { orders, fetchOrders } = useContext(OrdersContext);
//   const [selectedOrders, setSelectedOrders] = useState([]);

//   // Function to handle deleting selected orders
//   const handleDeleteSelectedOrders = async () => {
//     if (selectedOrders.length === 0) {
//       alert('Please select at least one order to delete.');
//       return;
//     }

//     try {
//       await Promise.all(selectedOrders.map(orderId => {
//         const orderDocRef = doc(db, 'orders', orderId);
//         return deleteDoc(orderDocRef);
//       }));
//       setSelectedOrders([]);
//       fetchOrders();
//       alert('Selected orders deleted successfully.');
//     } catch (error) {
//       console.error('Error deleting selected orders: ', error);
//     }
//   };

//   // Fetch orders when component mounts
//   useEffect(() => {
//     fetchOrders();
//   }, [fetchOrders]);

//   return (
//     <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold text-center mb-4">All User Orders</h1>
//       <button 
//         className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
//         onClick={handleDeleteSelectedOrders}
//       >
//         Delete Selected Orders
//       </button>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-gray-100 border border-gray-300">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="px-4 py-2 border">Select</th>
//               <th className="px-4 py-2 border">Order ID</th>
//               <th className="px-4 py-2 border">User Email</th>
//               <th className="px-4 py-2 border">Details</th>
//               <th className="px-4 py-2 border">Total Amount</th>
//               <th className="px-4 py-2 border">Date & Time</th>
//               <th className="px-4 py-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//   {orders.map(order => (
//     <tr key={order.id} className="hover:bg-gray-100">
//       <td className="px-4 py-2 border">
//         <input
//           type="checkbox"
//           checked={selectedOrders.includes(order.id)}
//           onChange={() => {
//             setSelectedOrders(prev => 
//               prev.includes(order.id) 
//                 ? prev.filter(id => id !== order.id) 
//                 : [...prev, order.id]
//             );
//           }}
//         />
//       </td>
//       <td className="px-4 py-2 border">{order.id}</td>
//       <td className="px-4 py-2 border">{order.email}</td>
//       <td className="px-4 py-2 border">{order.recipes || 'No details available'}</td>
//       <td className="px-4 py-2 border">${order.totalPrice}</td>
//       <td className="px-4 py-2 border">{order.timestamp}</td>
//       <td className="px-4 py-2 border">
//         <button 
//           className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
//           onClick={() => handleDeleteOrder(order.id)}
//         >
//           Delete
//         </button>
//       </td>
//     </tr>
//   ))}
// </tbody>

//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllUserOrder;
import React, { useContext, useEffect, useState } from 'react';
import { OrdersContext } from '../context/OrdersContext'; // Adjust the import as necessary
import { db } from '../firebaseConfig'; // Adjust the path as necessary
import { deleteDoc, doc } from 'firebase/firestore';

const AllUserOrder = () => {
  const { orders, fetchOrders } = useContext(OrdersContext);
  const [selectedOrders, setSelectedOrders] = useState([]);

  // Function to handle deleting selected orders
  const handleDeleteSelectedOrders = async () => {
    if (selectedOrders.length === 0) {
      alert('Please select at least one order to delete.');
      return;
    }

    try {
      await Promise.all(selectedOrders.map(orderId => {
        const orderDocRef = doc(db, 'orders', orderId);
        return deleteDoc(orderDocRef);
      }));
      setSelectedOrders([]);
      fetchOrders(); // Refresh orders after deletion
      alert('Selected orders deleted successfully.');
    } catch (error) {
      console.error('Error deleting selected orders: ', error);
    }
  };

  // Fetch orders when component mounts
  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">All User Orders</h1>
      <button 
        className="mb-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        onClick={handleDeleteSelectedOrders}
      >
        Delete Selected Orders
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-100 border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Select</th>
              <th className="px-4 py-2 border">Order ID</th>
              <th className="px-4 py-2 border">User Email</th>
              <th className="px-4 py-2 border">Details</th>
              <th className="px-4 py-2 border">Total Amount</th>
              <th className="px-4 py-2 border">Date & Time</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4">No orders available.</td>
              </tr>
            ) : (
              orders.map(order => (
                <tr key={order.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(order.id)}
                      onChange={() => {
                        setSelectedOrders(prev => 
                          prev.includes(order.id) 
                            ? prev.filter(id => id !== order.id) 
                            : [...prev, order.id]
                        );
                      }}
                    />
                  </td>
                  <td className="px-4 py-2 border">{order.id}</td>
                  <td className="px-4 py-2 border">{order.userEmail || 'No email'}</td>
                  <td className="px-4 py-2 border">{order.recipes.length > 0 ? order.recipes.join(', ') : 'No details available'}</td>
                  <td className="px-4 py-2 border">${order.totalPrice.toFixed(2)}</td>
                  <td className="px-4 py-2 border">{new Date(order.timestamp).toLocaleString()}</td>
                  <td className="px-4 py-2 border">
                    <button 
                      className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                      onClick={() => handleDeleteOrder(order.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUserOrder;
