// import { Button } from "antd";
// import { Link } from "react-router-dom";

// export default function Auth({ onLogin,onLogout }) {
//   return (
//     <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
//       <Button type="primary">Login With Google</Button>
//       <Link to="/auth/login">
//         <Button type="default">Login with Email</Button>
//       </Link>

//       <h1>
//         Don't have an account?
//         <Link className="border-green-600 p-1 rounded-lg bg-green-500 text-white" to="/auth/signup">
//           Create Account
//         </Link>
//       </h1>
//     </div>
//   );
// }

// // export default Auth;
// import { Button, Image } from "antd";
// import { Link } from "react-router-dom";

// export default function Auth({ onLogin, onLogout, checkoutOrder }) {
//   return (
//     <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
//         <Link to={{ pathname: "/auth/login", state: { checkoutOrder } }}>
//         <Button type="default">Login with Email </Button>
//       </Link>
//       <Button className="flex font-bold text-md" type="default">Login with<Image className='ml-3'
//             width={40}
//             height={40}
//             preview={false}
//             src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
//             />oogle </Button>
//       <h1>
//         Don't have an account?
//         <Link className="border-green-600 p-1 rounded-lg bg-green-500 text-white" to="/auth/signup">
//           Create Account
//         </Link>
//       </h1>
//     </div>
//   );
// // }
// import { Button, Image } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../../firebaseConfig";// Ensure this imports your Firebase config
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; // Import required Firebase methods
// import { useState } from "react";

// export default function Auth({ onLogin, checkoutOrder }) {
//   const navigate = useNavigate();
//   const provider = new GoogleAuthProvider();
//   const [error, setError] = useState('');

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Call the onLogin function with user's email
//       onLogin(user.email);
//       navigate('/'); // Redirect after login
//     } catch (error) {
//       console.error('Error logging in with Google:', error);
//       setError('Failed to log in with Google');
//     }
//   };

//   return (
//     <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
//       <Link to={{ pathname: "/auth/login", state: { checkoutOrder } }}>
//         <Button type="default">Login with Email</Button>
//       </Link>
//       <Button className="flex font-bold text-md" type="default" onClick={handleGoogleLogin}>
//         Login with
//         <Image
//           className='ml-3'
//           width={40}
//           height={40}
//           preview={false}
//           src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
//         />
//         Google
//       </Button>
//       {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
//       <h1>
//         Don't have an account?
//         <Link className="border-green-600 p-1 rounded-lg bg-green-500 text-white" to="/auth/signup">
//           Create Account
//         </Link>
//       </h1>
//     </div>
//   );
// }
import { Button, Image } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig"; // Ensure this imports your Firebase config
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth"; // Import required Firebase methods
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // Import AuthContext

export default function Auth({ onLogin, checkoutOrder }) {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState("");

  const { currentUser } = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate("/");
      onLogin(user.displayName);
      console.log(user.displayName, "display");
    } catch (error) {
      console.error("Error logging in with Google:");
      setError("Failed to log in with Google");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <Link to={{ pathname: "/auth/login", state: { checkoutOrder } }}>
        <Button type="default">Login with Email</Button>
      </Link>
      <Button
        className="flex font-bold text-md"
        type="default"
        onClick={handleGoogleLogin}
      >
        Login with
        <Image
          className=""
          width={40}
          height={40}
          preview={false}
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        />
        Google
      </Button>
      <h1>
        Don't have an account?
        <Link
          className="border-green-600 p-2 ml-2 rounded-full bg-green-500 text-white"
          to="/auth/signup"
        >
          Create Account
        </Link>
      </h1>
    </div>
  );
}
