// import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
// import { Avatar, Button, Image,Badge } from 'antd';
// import React, { useContext } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';

// export default function Header({ isLogin, userName, onLogout }) {
//   const {cartRecipes} = useContext(CartContext)
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isFoodsPage = location.pathname.startsWith('/food');

//   return (
//     <header className="text-gray-600 body-font">
//       <div className="container mx-auto flex flex-wrap gap-24 p-5 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <Image
//             className='border rounded-full'
//             width={70}
//             height={70}
//             src="https://static.vecteezy.com/system/resources/previews/000/964/198/non_2x/fast-food-meal-set-vector.jpg"
//             fallback="data:image/png;base64,..." // Your fallback image
//           />
//           <span className="ml-3 text-2xl font-bold">Fast Feast</span>
//         </a>
//         <nav className="md:ml-auto flex flex-wrap items-center text-base gap-20 justify-center">
//         <Link to='/cart' className="mr-5 text-black font-bold text-2xl hover:text-xl"> <Badge count={cartRecipes.length}>
//               <ShoppingCartOutlined
//                 style={{
//                   fontSize: 30,
//                   color: "blue",
//                 }}
//               />
//             </Badge></Link>
//         <Link to='/order' className="mr-5 text-black font-bold text-2xl hover:text-xl">
//         <Image className='mt-1'
//             width={50}
//             height={50}
//             preview={false}
//             src="https://icons.veryicon.com/png/o/miscellaneous/icondian/icon-order-1.png"
//             /></Link>
//         </nav>
//         {isLogin ? (
//           <div className="flex items-center">
//             <Avatar size={50} icon={<UserOutlined />} />
//              <span className="ml-2">{userName}</span>

//             <Button onClick={() =>navigate("/auth")}>Logout</Button>
//           </div>
//         ) : (
//           <Button onClick={() => navigate("/auth")}>Login</Button>
//         )}
//         {isFoodsPage ? (
//           <Link to='/' className="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 rounded text-base mt-4 md:mt-0">
//             Back
//           </Link>
//         ) : (
//           <Link to='/food' className="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 rounded text-base mt-4 md:mt-0">
//             See Foods
//           </Link>

//         )}
//       </div>
//     </header>
//   );
// }
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Image, Badge } from "antd";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { auth } from "../firebaseConfig";
export default function Header() {
  const { cartRecipes } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext); // Get current user from AuthContext
  const navigate = useNavigate();
  const location = useLocation();
  const isFoodsPage = location.pathname.startsWith("/food");

  const isLogin = !!currentUser; // Check if user is logged in
  const userName = currentUser ? currentUser.email : ""; // Get user email if logged in

  const handleLogout = () => {
    auth.signOut(); // Assuming you have auth imported
    navigate("/"); // Redirect after logout
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap gap-24 p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            className="border rounded-full"
            width={70}
            height={70}
            src="https://static.vecteezy.com/system/resources/previews/000/964/198/non_2x/fast-food-meal-set-vector.jpg"
            fallback="data:image/png;base64,..." // Your fallback image
          />
          <span className="ml-3 text-2xl font-bold">Fast Feast</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base gap-5 justify-center">
          <Link
            to="/cart"
            className="mr-5 text-black font-bold text-2xl hover:text-xl"
          >
            <Badge count={cartRecipes.length}>
              <ShoppingCartOutlined className="text-4xl" />
            </Badge>
          </Link>
          <Link
            to="/order"
            className="mr-5 text-black font-bold text-2xl hover:text-xl"
          >
            <Image
              className="mt-1"
              width={50}
              height={50}
              preview={false}
              src="https://icons.veryicon.com/png/o/miscellaneous/icondian/icon-order-1.png"
            />
          </Link>
          {isLogin ? (
            <div className="flex items-center">
              <Avatar size={50} icon={<UserOutlined />} />
              <span className="ml-2">{userName}</span>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <Button onClick={() => navigate("/auth")}>Login</Button>
          )}
          {isFoodsPage ? (
            <Link
              to="/"
              className="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 rounded  text-base mt-4 md:mt-0"
            >
              Back
            </Link>
          ) : (
            <Link
              to="/food"
              className="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 rounded text-base mt-4 md:mt-0"
            >
              See Foods
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

// export default function Header({ isLogin, userName, onLogout }) {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const isFoodsPage = location.pathname.startsWith('/food');

//   return (
//     <header className="text-gray-600 body-font">
//       <div className="mx-auto flex justify-between p-2 flex-col md:flex-row items-center">
//         <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//           <Image
//             className='border rounded-full'
//             width={70}
//             height={70}
//             src="https://static.vecteezy.com/system/resources/previews/000/964/198/non_2x/fast-food-meal-set-vector.jpg"
//             fallback="data:image/png;base64,..." // your fallback image
//           />
//           <span className="ml-3 text-2xl font-bold">Fast Feast</span>
//         </a>
//         <nav className="flex items-center space-x-5">
//           <Link to='/food' className="mr-5 text-black font-bold text-2xl hover:text-xl">Fast Foods</Link>
//         </nav>
//         {isLogin ? (
//           <div className="flex items-center">
//             <Avatar size={50} icon={<UserOutlined />} />
//             <span className="ml-2">{userName}</span>
//             <Button onClick={onLogout} className="ml-2">Logout</Button>
//           </div>
//         ) : (
//           <Button onClick={() => navigate("/auth")}>Login</Button>
//         )}
//         {isFoodsPage ? (
//           <Link to='/' className="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 rounded text-base mt-4 md:mt-0">
//             Back
//           </Link>
//         ) : (
//           <Link to={`/food`} className="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 rounded text-base mt-4 md:mt-0">
//             See Foods
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }
