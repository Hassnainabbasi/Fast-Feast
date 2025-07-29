// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
  
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

//     // Check if the user exists and credentials match
//     const user = existingUsers.find(user => user.email === formData.email && user.password === formData.password);

//     if (user) {
//       // Redirect to About page
//       navigate('/');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-28 p-6 border border-gray-300 rounded-lg shadow-md bg-gray-100">
//       <h1 className="text-center text-2xl font-bold mb-4">Log In</h1>
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
//           Log In
//         </button>
//       </form>
//     </div>
//   );
// // }
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Login({ onLogin, onLogout, checkoutOrder }) {
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
//     const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
//     const user = existingUsers.find(user => user.email === formData.email && user.password === formData.password);

//     if (user) {
//       onLogin(); // Call the onLogin function

//       // Call checkoutOrder directly after login
//       checkoutOrder({
//         username: user.username,
//         email: user.email,
//         number: user.phone, // Assuming you have phone number in user object
//         address: user.address // Assuming you have address in user object
//       });

//       navigate('/'); // Redirect to home or desired page
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   return (
//     <div className="flex h-screen w-screen bg-gray-100 items-center justify-center">
//       <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-center text-2xl font-bold mb-4">Log In</h1>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-1 font-bold">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block mb-1 font-bold">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
//             />
//           </div>
//           <button type="submit" className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200">
//             Log In
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{' '}
//           <a href="/auth/signup" className="text-blue-600 hover:underline">Create Account</a>
//         </p>
//       </div>
//     </div>
//   );
// // }
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// export default function Login({ onLogin }) {
//   const location = useLocation();
//   const checkoutOrder = location.state?.checkoutOrder; // Get checkoutOrder from state
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
//     const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
//     const user = existingUsers.find(user => user.email === formData.email && user.password === formData.password);

//     if (user) {
//         onLogin(user.username); // Pass the username to onLogin
//         navigate('/'); // Redirect to home or desired page
//         if (checkoutOrder) {
//             checkoutOrder({
//                 username: user.username,
//                 email: user.email,
//                 number: user.phone, // Assuming you have phone number in user object
//                 address: user.address // Assuming you have address in user object
//             });
//         }
//     } else {
//         setError('Invalid email or password');
//     }
// };

//   return (
//     <div className="flex h-screen w-screen bg-gray-100 items-center justify-center">
//       <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-center text-2xl font-bold mb-4">Log In</h1>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-1 font-bold">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block mb-1 font-bold">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
//             />
//           </div>
//           <button type="submit" className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200">
//             Log In
//           </button>
//         </form>
//         <p className="mt-4 text-center">
//           Don't have an account?{' '}
//           <Link to="/auth/signup" className="text-blue-600 hover:underline">Create Account</Link>
//         </p>
//       </div>
//     </div>
//   );
// // }
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { auth, db } from '../../firebaseConfig';
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';

// export default function Login({ onLogin }) {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const provider = new GoogleAuthProvider();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
  //     const user = userCredential.user;

  //     onLogin(user.email); // Pass the email or username
  //     navigate('/');
  //   } catch (error) {
  //     setError('Invalid email or password');
  //   }
  // // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
  //     const user = userCredential.user;
  
  //     // Now you can fetch user data from Firestore if needed
  //     navigate('/'); // Redirect to home or desired page
  //   } catch (error) {
  //     setError('Invalid email or password');
  //   }
  // };
  
  // const handleGoogleLogin = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     const user = result.user;
  //     // Optionally, fetch user data from Firestore
  //     onLogin(user.email); // Pass the email or username
  //     navigate('/');
  //   } catch (error) {
  //     setError('Error logging in with Google');
  //   }
  // };

  // return (
    
    
  //   <div className="flex h-screen w-screen bg-gray-100 items-center justify-center">
  //          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
  //            <h1 className="text-center text-2xl font-bold mb-4">Log In</h1>
  //            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
  //            <form onSubmit={handleSubmit} className="flex flex-col">
  //              <div className="mb-4">
  //                <label htmlFor="email" className="block mb-1 font-bold">Email:</label>
  //                <input
  //                  type="email"
  //                  id="email"
  //                  name="email"
  //                  value={formData.email}
  //                  onChange={handleChange}
  //                  required
  //                  className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
  //                />
  //              </div>
  //              <div className="mb-4">
  //                <label htmlFor="password" className="block mb-1 font-bold">Password:</label>
  //                <input
  //                  type="password"
  //                  id="password"
  //                  name="password"
  //                  value={formData.password}
  //                  onChange={handleChange}
  //                  required
  //                  className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
  //                />
  //              </div>
  //              <button type="submit" className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200">
  //                Log In
  //              </button>
  //            </form>
  //            <p className="mt-4 text-center">
  //              Don't have an account?{' '}
  //              <Link to="/auth/signup" className="text-blue-600 hover:underline">Create Account</Link>
  //            </p>
  //          </div>
    
  //   </div>
  //        </div>
  //      );
  //    }

  import React, { useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import { auth } from '../../firebaseConfig';
  import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  
  export default function Login({ onLogin }) {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
  
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
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        const user = userCredential.user;
  
        // Check if the user is an admin
        if (formData.email === 'admin@gmail.com' && formData.password === 'admin1111') {
          navigate('/admin'); // Redirect to admin page
        } else {
          navigate('/'); // Redirect to home for regular users
        }
      } catch (error) {
        setError('Invalid email or password');
      }
    };
  
    const handleGoogleLogin = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        onLogin(user.email); // Pass the email or username
        navigate('/'); // Redirect after Google login
      } catch (error) {
        setError('Error logging in with Google');
      }
    };
  
    return (
      <div className="flex h-screen w-screen bg-gray-100 items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-center text-2xl font-bold mb-4">Log In</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
            <button type="submit" className="w-full py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200">
              Log In
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/auth/signup" className="text-blue-600 hover:underline">Create Account</Link>
          </p>
        </div>
      </div>
    );
  }
  