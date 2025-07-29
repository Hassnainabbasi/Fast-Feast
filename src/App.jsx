

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import About from "./pages/About";
// import Food from "./pages/food";
// import Single from "./pages/[id]/Single";
// import Auth from "./pages/auth/Auth";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import NotFound from "./NotFound";
// import Header from "./components/Header";

// function App() {
//   const [isLogin, setIsLogin] = useState(true); // Replace with your actual auth logic
//   const [userName, setUserName] = useState(''); // Replace with actual username from signup

//   // Example of setting the username after signup
//   const handleLogin = (name) => {
//     setUserName(name);
//     setIsLogin(true);
//   };

//   return (
//     {/* Your login/signup logic goes here, e.g., a button that calls handleLogin('UserName') */}
//     {isLogin && <button onClick={handleLogout}>Logout</button>}

//     <BrowserRouter>
//       <Header isLogin={isLogin} userName={userName} />
//       <Routes>
//         {/* Auth parent route */}
//         <Route path="/auth">
//           <Route index element={<Auth/>} /> {/* This should match "/auth" */}
//           <Route path="login" element={<Login/>}/>
//           <Route path="signup" element={<Signup/>}/>
//           <Route path="*" element={<NotFound/>} />
//         </Route>
//         {/* Other routes */}
//         <Route path="/" element={<About/>}  />
//         <Route path="/food" element={<Food/>} />
//         <Route path="/food/:id" element={<Single/>}/>
//         <Route path="*" element={<NotFound/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { Route, Routes, useLocation } from "react-router-dom";
// import { useState } from "react";
// import "./App.css";
// import About from "./pages/About";
// import Food from "./pages/food";
// import Single from "./pages/[id]/Single";
// import Auth from "./pages/auth/Auth";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import NotFound from "./NotFound";
// import Header from "./components/Header";
// import Carts from "./pages/Cart";
// import Order from "./pages/order";

// function App() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [userName, setUserName] = useState('');
//   const location = useLocation(); // Get the current location

//   const handleLogin = (name) => {
//     setUserName(name);
//     setIsLogin(true);
//   };

//   const handleLogout = () => {
//     setUserName('');
//     setIsLogin(false);
//   };

//   const noHeaderPaths = ['/auth', '/auth/login', '/auth/signup', '/not-found'];

//   return (
//     <div>
//       {!noHeaderPaths.includes(location.pathname) && (
//         <Header isLogin={isLogin} userName={userName} onLogout={handleLogout} />
//       )}
//       <Routes>
//         <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
//         <Route path="/auth/login" element={<Login onLogin={handleLogin} />} />
//         <Route path="/auth/signup" element={<Signup onLogin={handleLogin} />} />
//         <Route path="/" element={<About />} />
//         <Route path="/food" element={<Food />} />
//         <Route path="/cart" element={<Carts />} />
//         <Route path="/orders" element={<Order />} />
//         <Route path="/food/:id" element={<Single />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// }

// // export default App;
// import { Route, Routes, useLocation } from "react-router-dom";
// import { useState } from "react";
// import "./App.css";
// import About from "./pages/About";
// import Food from "./pages/food";
// import Single from "./pages/[id]/Single";
// import Auth from "./pages/auth/Auth";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import NotFound from "./NotFound";
// import Header from "./components/Header";
// import Carts from "./pages/Cart";
// import OrdersPage from "./pages/order";
// import CartContextProvider from "./context/CartContext"; // Import your context provider
// import { OrdersProvider } from "./context/OrdersContext";

// function App() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [userName, setUserName] = useState('');
//   const location = useLocation(); // Get the current location

//   const handleLogin = (username) => {
//     setUserName(username);
//     setIsLogin(true);
//   };

//   const handleLogout = () => {
//     setUserName('');
//     setIsLogin(false);
//   };

//   const noHeaderPaths = ['/auth', '/auth/login', '/auth/signup', '/not-found'];

//   return (
//     <OrdersProvider>
//     <CartContextProvider> {/* Wrap the entire application */}
//       <div>
//         {!noHeaderPaths.includes(location.pathname) && (
//           <Header isLogin={isLogin} userName={userName} onLogout={handleLogout} />
//         )}
//         <Routes>
//           <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
//           <Route path="/auth/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/auth/signup" element={<Signup onLogin={handleLogin} />} />
//           <Route path="/" element={<About />} />
//           <Route path="/food" element={<Food />} />
//           <Route path="/cart" element={<Carts isLoggedIn={isLogin} userName={userName}/>} />
//           <Route path="/order" element={<OrdersPage />} />
//           <Route path="/food/:id" element={<Single />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     </CartContextProvider>
//     </OrdersProvider>
//   );
// }

// // export default App;
// import { Route, Routes, useLocation } from "react-router-dom";
// import { useState } from "react";
// import "./App.css";
// import About from "./pages/About";
// import Food from "./pages/food";
// import Single from "./pages/[id]/Single";
// import Auth from "./pages/auth/Auth";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import NotFound from "./NotFound";
// import Header from "./components/Header";
// import Carts from "./pages/Cart";
// import OrdersPage from "./pages/order";
// import CartContextProvider from "./context/CartContext"; // Import your context provider
// import { OrdersProvider } from "./context/OrdersContext";
// import { AuthProvider } from "./context/AuthContext"; // Ensure you import your AuthProvider

// function App() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [userName, setUserName] = useState('');
//   const location = useLocation(); // Get the current location

//   const handleLogin = (username) => {
//     setUserName(username);
//     setIsLogin(true);
//   };

//   const handleLogout = () => {
//     setUserName('');
//     setIsLogin(false);
//   };

//   const noHeaderPaths = ['/auth', '/auth/login', '/auth/signup', '/not-found'];

//   return (
//     <AuthProvider> {/* Wrap with AuthProvider to provide user context */}
//       <OrdersProvider>
//         <CartContextProvider> {/* Wrap the entire application */}
//           <div>
//             {!noHeaderPaths.includes(location.pathname) && (
//               <Header isLogin={isLogin} userName={userName} onLogout={handleLogout} />
//             )}
//             <Routes>
//               <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
//               <Route path="/auth/login" element={<Login onLogin={handleLogin} />} />
//               <Route path="/auth/signup" element={<Signup onLogin={handleLogin} />} />
//               <Route path="/" element={<About />} />
//               <Route path="/food" element={<Food />} />
//               <Route path="/cart" element={<Carts isLoggedIn={isLogin} userName={userName} />} />
//               <Route path="/order" element={<OrdersPage />} />
//               <Route path="/food/:id" element={<Single />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </div>
//         </CartContextProvider>
//       </OrdersProvider>
//     </AuthProvider>
//   );
// }

// // export default App;
// import { Route, Routes, useLocation } from "react-router-dom";
// import { useContext } from "react";
// import "./App.css";
// import About from "./pages/About";
// import Food from "./pages/food";
// import Single from "./pages/[id]/Single";
// import Auth from "./pages/auth/Auth";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import NotFound from "./NotFound";
// import Header from "./components/Header";
// import Carts from "./pages/Cart";
// import OrdersPage from "./pages/order";
// import CartContextProvider from "./context/CartContext";
// import { OrdersProvider } from "./context/OrdersContext";
// import { AuthProvider} from "./context/AuthContext"; // Ensure you import your AuthContext
// import { AuthContext } from "./context/AuthContext"; // Adjust path as necessary

// function App() {
//   const location = useLocation();
//   const { currentUser } = useContext(AuthContext); // Get current user from AuthContext

//   const userName = currentUser ? currentUser.email : ''; // Use email or another identifier
//   const isLogin = !!currentUser; // Convert currentUser to boolean

//   const noHeaderPaths = ['/auth', '/auth/login', '/auth/signup', '/not-found'];

//   return (
//     <AuthProvider>
//       <OrdersProvider>
//         <CartContextProvider>
//           <div>
//             {!noHeaderPaths.includes(location.pathname) && (
//               <Header isLogin={isLogin} userName={userName} onLogout={() => { /* Handle logout here */ }} />
//             )}
//             <Routes>
//               <Route path="/auth" element={<Auth onLogin={userName} />} />
//               <Route path="/auth/login" element={<Login onLogin={userName} />} />
//               <Route path="/auth/signup" element={<Signup onLogin={userName} />} />
//               <Route path="/" element={<About />} />
//               <Route path="/food" element={<Food />} />
//               <Route path="/cart" element={<Carts isLoggedIn={isLogin} userName={userName} />} />
//               <Route path="/order" element={<OrdersPage />} />
//               <Route path="/food/:id" element={<Single />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </div>
//         </CartContextProvider>
//       </OrdersProvider>
//     </AuthProvider>
//   );
// }

// // export default App;
// import { Route, Routes, useLocation } from "react-router-dom";
// import { useContext } from "react";
// import "./App.css";
// import About from "./pages/About";
// import Food from "./pages/food";
// import Single from "./pages/[id]/Single";
// import Auth from "./pages/auth/Auth";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import NotFound from "./pages/auth/not-found";
// import Header from "./components/Header";
// import Carts from "./pages/Cart";
// import OrdersPage from "./pages/order";
// import CartContextProvider from "./context/CartContext";
// import { OrdersProvider } from "./context/OrdersContext";
// import { AuthProvider, AuthContext } from "./context/AuthContext"; // Import both
// import AdminPage from "./pages/Admin";

// function App() {
//   const location = useLocation();
//   const HeaderPaths = ['/Cart', '/Single', '/About', '/food','/order','/pages/Admin'];
//   const {currentUser} = useContext(AuthContext)
//   return (
//     <AuthProvider>
//       <OrdersProvider currentUser={currentUser}>
//         <CartContextProvider>
//           <AuthContext.Consumer>
//             {({ currentUser }) => {
//               const userName = currentUser ? currentUser.email : ''; // Use email or another identifier
//               const isLogin = !!currentUser; // Convert currentUser to boolean

//               return (
//                 <div>
//                   {HeaderPaths.includes(location.pathname) && (
//                     <Header isLogin={isLogin} userName={userName} onLogout={() => { /* Handle logout here */ }} />
//                   )}
//                   <Routes>
//                     <Route path="/auth" element={<Auth onLogin={userName} />} />
//                     <Route path="/auth/login" element={<Login onLogin={userName} />} />
//                     <Route path="/auth/signup" element={<Signup onLogin={userName} />} />
//                     <Route path="/" element={<About />} />
//                     <Route path="/food" element={<Food />} />
//                     <Route path="/admin" element={<AdminPage />} />
//                     <Route path="/cart" element={<Carts isLoggedIn={isLogin} userName={userName} />} />
//                     <Route path="/order" element={<OrdersPage />} />
//                     <Route path="/food/:id" element={<Single />} />
//                     <Route path="*" element={<NotFound />} />
//                   </Routes>
//                 </div>
//               );
//             }}
//           </AuthContext.Consumer>
//         </CartContextProvider>
//       </OrdersProvider>
//     </AuthProvider>
//   );
// }

// // export default App;
// import { Route, Routes, useLocation } from "react-router-dom";
// import { useContext } from "react";
// import "./App.css";
// import About from "./pages/About";
// import Food from "./pages/food";
// import Single from "./pages/[id]/Single";
// import Auth from "./pages/auth/Auth";
// import Login from "./pages/auth/Login";
// import Signup from "./pages/auth/Signup";
// import NotFound from "./NotFound";
// import Header from "./components/Header";
// import Carts from "./pages/Cart";
// import OrdersPage from "./pages/order";
// import CartContextProvider from "./context/CartContext";
// import { OrdersProvider } from "./context/OrdersContext";
// import { AuthProvider, AuthContext } from "./context/AuthContext"; 
// import AdminPage from "./pages/Admin";
// import AddRecipe from "./pages/Addrecipe";
// import AllUserOrders from "./pages/AllUserOrder";
// import OrdersAdmin from "./pages/OrdersAdmin";
// import BackButton from "./components/BackButton";

// function App() {
//   const location = useLocation();
//   const HeaderPaths = ['/cart', '/single', '', '/', '/order', ]; // Ensure all paths are correct
//   const { currentUser } = useContext(AuthContext);
//   const BackButtonPaths = ['/admin', '/admin/alluserorder', '/admin/ordersadmin','/food','/cart','order','/auth/signup'];

//   return (
//     <AuthProvider>
//       <OrdersProvider currentUser={currentUser}>
//         <CartContextProvider>
//           <AuthContext.Consumer>
//             {({ currentUser }) => {
//               const userName = currentUser ? currentUser.email : ''; 
//               const isLogin = !!currentUser; 

//               return (
//                 <div>
//                   {HeaderPaths.includes(location.pathname.toLowerCase()) && ( // Check against lowercase paths
//                     <Header isLogin={isLogin} userName={userName} onLogout={() => { /* Handle logout here */ }} />
//                   )}
//                   <Routes>
//                   {BackButtonPaths.includes(location.pathname) && <BackButton />}
//                     <Route path="/auth" element={<Auth onLogin={userName} />} />
//                     <Route path="/auth/login" element={<Login onLogin={userName} />} />
//                     <Route path="/auth/signup" element={<Signup onLogin={userName} />} />
//                     <Route path="/" element={<About />} />
//                     <Route path="/food" element={<Food />} />
//                     <Route path="/admin" element={<AdminPage />} />
//                     <Route path="/admin/alluserorder" element={<AllUserOrders />} />
//                     <Route path="/admin/ordersadmin" element={<OrdersAdmin />} />

//                     <Route path="/cart" element={<Carts isLoggedIn={isLogin} userName={userName} />} />
//                     <Route path="/order" element={<OrdersPage />} />
//                     <Route path="/admin/addrecipe" element={<AddRecipe />} />
//                     <Route path="/food/:id" element={<Single />} />
//                     <Route path="*" element={<NotFound />} />
//                   </Routes>
//                 </div>
//               );
//             }}
//           </AuthContext.Consumer>
//         </CartContextProvider>
//       </OrdersProvider>
//     </AuthProvider>
//   );
// }

// export default App;
import { Route, Routes, useLocation } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import About from "./pages/About";
import Food from "./pages/Food";
import Single from "./pages/[id]/Single";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NotFound from "./NotFound";
import Header from "./components/Header";
import Carts from "./pages/Cart";
import CartContextProvider from "./context/CartContext";
import { OrdersProvider } from "./context/OrdersContext";
import { AuthProvider, AuthContext } from "./context/AuthContext"; 
import AdminPage from "./pages/Admin";
import AddRecipe from "./pages/Addrecipe";
import AllUserOrders from "./pages/AllUserOrder";
import OrdersAdmin from "./pages/OrdersAdmin";
import BackButton from "./components/BackButton";
import OrdersPage from "./pages/Order";

function App() {
  const location = useLocation();
  const HeaderPaths = ['/cart', '/single', '', '/', '/order']; // Ensure all paths are correct
  const { currentUser } = useContext(AuthContext);
  const BackButtonPaths = ['/admin', '/admin/alluserorder','/admin/addrecipe', '/admin/ordersadmin', '/food', '/cart', '/order', '/auth/signup'];

  return (
    <AuthProvider>
      <OrdersProvider currentUser={currentUser}>
        <CartContextProvider>
          <AuthContext.Consumer>
            {({ currentUser }) => {
              const userName = currentUser ? currentUser.displayName : ''; 
              const isLogin = !!currentUser; 

              return (
                <div>
                  {HeaderPaths.includes(location.pathname.toLowerCase()) && (
                    <Header isLogin={isLogin} userName={userName} onLogout={() => { /* Handle logout here */ }} />
                  )}
                  {/* Render BackButton outside of Routes */}
                  {BackButtonPaths.includes(location.pathname) && <BackButton />}
                  <Routes>
                    <Route path="/auth" element={<Auth onLogin={userName} />} />
                    <Route path="/auth/login" element={<Login onLogin={userName} />} />
                    <Route path="/auth/signup" element={<Signup onLogin={userName} />} />
                    <Route path="/" element={<About />} />
                    <Route path="/food" element={<Food/>} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/admin/alluserorder" element={<AllUserOrders />} />
                    <Route path="/admin/ordersadmin" element={<OrdersAdmin />} />
                    <Route path="/cart" element={<Carts isLoggedIn={isLogin} userName={userName} />} />
                    <Route path="/order" element={<OrdersPage />} />
                    <Route path="/admin/addrecipe" element={<AddRecipe />} />
                    <Route path="/food/:id" element={<Single />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              );
            }}
          </AuthContext.Consumer>
        </CartContextProvider>
      </OrdersProvider>
    </AuthProvider>
  );
}

export default App;
