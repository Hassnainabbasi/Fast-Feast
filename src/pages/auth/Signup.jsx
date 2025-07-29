// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get existing users from localStorage
//     const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // Check if the user already exists
//     const userExists = existingUsers.some(user => user.email === formData.email);

//     if (userExists) {
//       setError('User already exists!');
//       return;
//     }

//     // Add the new user to the array
//     existingUsers.push(formData);

//     // Save the updated array back to localStorage
//     localStorage.setItem('users', JSON.stringify(existingUsers));

//     // Redirect to login page
//     navigate('/auth/login');
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 border mt-20
//      border-gray-300 rounded-lg shadow-md bg-gray-100">
//       <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>
//       {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Error message */}
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-1 font-bold">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block mb-1 font-bold">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
//           />
//         </div>
//         <button type="submit" className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { auth, db } from '../../firebaseConfig'; // Adjust the path as necessary
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: formData.email,
        // Add other user details if needed
      });

      navigate('/auth/login');
    } catch (error) {
      setError('User already exists or error occurred!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border mt-20
      border-gray-300 rounded-lg shadow-md bg-gray-100">
       <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>
       {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Error message */}
       <form onSubmit={handleSubmit} className="flex flex-col">
         <div className="mb-4">
           <label htmlFor="email" className="block mb-1 font-bold">Email:</label>
        <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1 font-bold">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
          />
        </div>
        <button type="submit" className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700">
          Sign Up
        </button>
      </form>
    </div>
  );
 }
// import React, { useState } from 'react'; 
// import { auth, db } from '../../firebaseConfig';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore";
// import { useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [formData, setFormData] = useState({ email: '', password: '', name: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Create user in Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
//       const user = userCredential.user;

//       // Save additional user data in Firestore
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         email: user.email,
//         name: formData.name,
//       });

//       navigate('/'); // Redirect to home or desired page
//     } catch (error) {
//       setError('Error creating account: ' + error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <p>{error}</p>}

//       <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//       <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//       <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }
