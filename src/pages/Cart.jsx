// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { Button, Image, message, Spin } from "antd";
// import CheckOutModal from "../components/CheckoutModel";
// import { OrdersContext } from "../context/OrdersContext";


// function Carts() {
//   const { cartRecipes, removeCart, updateToCart, clearCart } = useContext(CartContext); // Fixed variable name
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { addOrder } = useContext(OrdersContext);

//   const openModal = () => setIsModalOpen(true);
//   const totalQuantity = cartRecipes.reduce((value, recipes) => value + recipes.quantity, 0);
//   const totalPrice = cartRecipes.reduce((value, recipes) => value + recipes.quantity * recipes.caloriesPerServing, 0);

//   const checkoutOrder = async (values) => {
//     setLoading(true);
//     const checkoutObj = {
//       ...values,
//       totalPrice,
//       totalQuantity,
//       status: "pending",
//       user: "guest",
//       recipes: cartRecipes.map((data) => `recipes: ${data.title}, Price: ${data.caloriesPerServing} (${data.quantity})`),
//     };

//     try {
//       message.success("Your order is placed");
//       const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
//       window.open(`https://wa.me/923262013238?text=${encodedTxt}`);
//       clearCart();
//       setIsModalOpen(false);
//     } catch (error) {
//       message.error("Failed to place the order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <CheckOutModal
//         isModalOpen={isModalOpen}
//         handleOk={() => setIsModalOpen(false)}
//         handleCancel={() => setIsModalOpen(false)}
//         checkoutOrder={checkoutOrder}
//       />

//       <div className="flex gap-4 my-4">
//         <div className="flex-grow border border-gray-200 rounded flex justify-center items-center p-5">
//           <h1 className="text-2xl font-semibold">{totalQuantity}</h1>
//         </div>
//         <div className="flex-grow border border-gray-200 rounded flex justify-center items-center p-5">
//           <h1 className="text-2xl font-semibold">${Math.floor(totalPrice)}</h1>
//         </div>
//         <div
//           onClick={openModal}
//           className="cursor-pointer flex-grow border border-gray-200 rounded flex justify-center items-center p-5"
//         >
//           Proceed to Checkout
//         </div>
//       </div>

//       {loading ? (
//         <div className="flex justify-center my-5">
//           <Spin tip="Placing your order..." />
//         </div>
//       ) : (
//         cartRecipes.map((recipes) => (
//           <div key={recipes.id} className="flex border my-3 p-3">
//             <Image src={recipes.image} height={100} width={100} />
//             <div className="pl-3">
//               <h1>{recipes.title}</h1>
//               <h1>${recipes.caloriesPerServing}</h1> {/* Ensure this is the correct price field */}

//               <div className="flex gap-3 my-3">
//                 <Button onClick={() => updateToCart(recipes.id, "plus")}>Plus</Button>
//                 <h1>{recipes.quantity}</h1>
//                 <Button
//                   onClick={() => {
//                     if (recipes.quantity <= 1) {
//                       removeCart(recipes.id);
//                     } else {
//                       updateToCart(recipes.id, "minus");
//                     }
//                   }}
//                 >
//                   Minus
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// // export default Carts;
// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { Button, Image, message, Spin } from "antd";
// import CheckOutModal from "../components/CheckoutModel";
// import { OrdersContext } from "../context/OrdersContext";

// function Carts({ isLogin }) {
//   const { cartRecipes, removeCart, updateToCart, clearCart } = useContext(CartContext);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
  
//   const totalQuantity = cartRecipes.reduce((value, recipes) => value + recipes.quantity, 0);
//   const totalPrice = cartRecipes.reduce((value, recipes) => value + recipes.quantity * recipes.caloriesPerServing, 0);

//   const handleCheckout = async (values) => {
//     setLoading(true);
//     const checkoutObj = {
//       ...values,
//       totalPrice,
//       totalQuantity,
//       status: "pending",
//       user: isLogin ? "logged-in-user" : "guest", // Adjust this according to your logic
//       recipes: cartRecipes.map((data) => `recipes: ${data.title}, Price: ${data.caloriesPerServing} (${data.quantity})`),
//     };

//     try {
//       if (isLogin) {
//         // If user is logged in, send the order to WhatsApp directly
//         message.success("Your order is placed");
//         const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
//         window.open(`https://wa.me/923262013238?text=${encodedTxt}`);
//         clearCart();
//       } else {
//         // If user is not logged in, show the modal
//         setIsModalOpen(true);
//       }
//     } catch (error) {
//       message.error("Failed to place the order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <CheckOutModal
//         isModalOpen={isModalOpen}
//         handleOk={() => setIsModalOpen(false)}
//         handleCancel={() => setIsModalOpen(false)}
//         checkoutOrder={handleCheckout} // Pass the handleCheckout function to the modal
//       />

//       <div className="flex gap-4 my-4">
//         <div className="flex-grow border border-gray-200 rounded flex justify-center items-center p-5">
//           <h1 className="text-2xl font-semibold">{totalQuantity}</h1>
//         </div>
//         <div className="flex-grow border border-gray-200 rounded flex justify-center items-center p-5">
//           <h1 className="text-2xl font-semibold">${Math.floor(totalPrice)}</h1>
//         </div>
//         <div
//           onClick={() => handleCheckout({})} // Call handleCheckout directly
//           className="cursor-pointer flex-grow border border-gray-200 rounded flex justify-center items-center p-5"
//         >
//           Proceed to Checkout
//         </div>
//       </div>

//       {loading ? (
//         <div className="flex justify-center my-5">
//           <Spin tip="Placing your order..." />
//         </div>
//       ) : (
//         cartRecipes.map((recipes) => (
//           <div key={recipes.id} className="flex border my-3 p-3">
//             <Image src={recipes.image} height={100} width={100} />
//             <div className="pl-3">
//               <h1>{recipes.title}</h1>
//               <h1>${recipes.caloriesPerServing}</h1>

//               <div className="flex gap-3 my-3">
//                 <Button onClick={() => updateToCart(recipes.id, "plus")}>Plus</Button>
//                 <h1>{recipes.quantity}</h1>
//                 <Button
//                   onClick={() => {
//                     if (recipes.quantity <= 1) {
//                       removeCart(recipes.id);
//                     } else {
//                       updateToCart(recipes.id, "minus");
//                     }
//                   }}
//                 >
//                   Minus
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// // export default Carts;
// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { Button, Image, message, Spin } from "antd";
// import CheckOutModal from "../components/CheckoutModel";
// import { OrdersContext } from "../context/OrdersContext";

// function Carts({ isLoggedIn ,userName }) { // Prop to check if user is logged in

//   const { currentUser } = useContext(AuthContext);
//   const userEmail = currentUser ? currentUser.email : null;
//   const { cartRecipes, removeCart, updateToCart, clearCart } = useContext(CartContext);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { addOrder } = useContext(OrdersContext);

//   const totalQuantity = cartRecipes.reduce((value, recipes) => value + recipes.quantity, 0);
//   const totalPrice = cartRecipes.reduce((value, recipes) => value + recipes.quantity * recipes.caloriesPerServing, 0);

//   const checkoutOrder = async (values) => {
//     setLoading(true);
//     const checkoutObj = {
//       ...values,
//       totalPrice,
//       totalQuantity,
//       status: "pending",
//       user: isLoggedIn ? userName : "guest", // Use actual user data if logged in
//       recipes: cartRecipes.map((data) => 
//         `recipes: ${data.title || 'Unknown'}, Price: ${data.caloriesPerServing || 0} (${data.quantity || 0})`
//     ),    
//       // recipes: cartRecipes.map((data) => `recipes: ${data.title}, Price: ${data.caloriesPerServing} (${data.quantity})`),
//     };
//     try {
//       addOrder(checkoutObj); // Add order to context
//       message.success("Your order is placed");
//       const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
//       window.open(`https://wa.me/923262013238?text=${encodedTxt}`);
//       clearCart();
//       setIsModalOpen(false);
//     } catch (error) {
//       message.error("Failed to place the order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleCheckout = () => {
//     console.log("Is Logged In:", isLoggedIn);
//     console.log("User Name:", userName);

//     // Ensure userEmail is defined and accessible
//     const userEmail = isLoggedIn ? : null;

//     if (isLoggedIn) {
//         checkoutOrder({
//             username: userName || "Guest User",
//             email: userEmail || "guest@example.com", // Fallback for guest
//             number: "1234567890", // Replace with actual phone number
//             address: "User Address" // Replace with actual address
//         });
//     } else {
//         setIsModalOpen(true);
//     }
// };

//   const handleCheckout = () => {
//     console.log("Is Logged In:", isLoggedIn); // Log isLoggedIn
//     console.log("User Name:", userName); // Log userName

//     if (isLoggedIn) {
//         checkoutOrder({
//             username: userName || "Guest User", // Fallback if userName is undefined
//             email: "user@example.com", // Replace with actual email
//             number: "1234567890", // Replace with actual phone number
//             address: "User Address" // Replace with actual address
//         });
//     } else {
//         setIsModalOpen(true); // Modal show karna agar user logged in nahi hai
//     }
// // };
// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { Button, Image, message, Spin } from "antd";
// import CheckOutModal from "../components/CheckoutModel";
// import { OrdersContext } from "../context/OrdersContext";
// import { AuthContext } from "../context/AuthContext"; // Import AuthContext

// function Carts({ isLoggedIn, userName }) { // Prop to check if user is logged in
//   const { currentUser } = useContext(AuthContext);
//   const userEmail = currentUser ? currentUser.email : null; // Correctly fetch user email
//   const { cartRecipes, removeCart, updateToCart, clearCart } = useContext(CartContext);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { addOrder } = useContext(OrdersContext);

//   const totalQuantity = cartRecipes.reduce((value, recipes) => value + recipes.quantity, 0);
//   const totalPrice = cartRecipes.reduce((value, recipes) => value + recipes.quantity * recipes.caloriesPerServing, 0);

//   // const checkoutOrder = async (values) => {
//   //   setLoading(true);
//   //   const checkoutObj = {
//   //     ...values,
//   //     totalPrice,
//   //     totalQuantity,
//   //     status: "pending",
//   //     user: isLoggedIn ? userName : "guest", // Use actual user data if logged in
//   //     recipes: cartRecipes.map((data) => 
//   //       `Recipe: ${data.title || 'Unknown'}, Price: ${data.caloriesPerServing || 0} (${data.quantity || 0})`
//   //     ),
//   //   };
    
//   //   try {
//   //     addOrder(checkoutObj); // Add order to context
//   //     message.success("Your order is placed");
//   //     const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
//   //     window.open(`https://wa.me/923262013238?text=${encodedTxt}`);
//   //     clearCart();
//   //     setIsModalOpen(false);
//   //   } catch (error) {
//   //     message.error("Failed to place the order. Please try again.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const checkoutOrder = async (values) => {
//     setLoading(true);
//     const checkoutObj = {
//       ...values,
//       totalPrice,
//       totalQuantity,
//       status: "pending",
//       user: isLoggedIn ? userName : "guest",
//       recipes: cartRecipes.map((data) => 
//         `Recipe: ${data.name || 'Unknown'}, Price: ${data.caloriesPerServing || 0} (${data.quantity || 0})`
//       ),
//     };
  
//     try {
//       addOrder(checkoutObj); // Add order to context
//       message.success("Your order is placed");
//       const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
//       window.open(`https://wa.me/923262013238?text=${encodedTxt}`);
//       clearCart();
//       setIsModalOpen(false);
//     } catch (error) {
//       message.error("Failed to place the order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };
  
  // const handleCheckout = () => {
  //   console.log("Is Logged In:", isLoggedIn);
  //   console.log("User Name:", userName);

  //   if (isLoggedIn) {
  //     checkoutOrder({
  //       username: userName || "Guest User",
  //       email: userEmail || "guest@example.com", // Fallback for guest
  //       number: "1234567890", // Replace with actual phone number
  //       address: "User Address" // Replace with actual address
  //     });
  //   } else {
  //     setIsModalOpen(true); // Open modal if user is not logged in
  //   }
  // };
//   const handleCheckout = () => {
//     console.log("Is Logged In:", isLoggedIn);
//     console.log("User Name:", userName);
  
//     if (isLoggedIn) {
//       // User is logged in, proceed to checkout
//       checkoutOrder({
//         username: userName || "Guest User",
//         email: userEmail || "guest@example.com",
//         number: "1234567890", // Replace with actual phone number
//         address: "User Address" // Replace with actual address
//       });
//     } else {
//       // User is not logged in, open modal
//       setIsModalOpen(true);
//     }
//   };
//   console.log('hello bacho',cartRecipes)
//   return (
//     <div className="container mx-auto">
//       <CheckOutModal
//   isModalOpen={isModalOpen}
//   handleOk={() => setIsModalOpen(false)}
//   handleCancel={() => setIsModalOpen(false)}
//   checkoutOrder={checkoutOrder}
//   isLoggedIn={isLoggedIn} // Pass the isLoggedIn prop here
// />

//       <div className="flex gap-4 my-4">
//         <div className="flex-grow border border-gray-200 rounded flex justify-center items-center p-5">
//           <h1 className="text-2xl font-semibold">{totalQuantity}</h1>
//         </div>
//         <div className="flex-grow border border-gray-200 rounded flex justify-center items-center p-5">
//           <h1 className="text-2xl font-semibold">${Math.floor(totalPrice)}</h1>
//         </div>
//         <div
//           onClick={handleCheckout} // Use the new handleCheckout function
//           className="cursor-pointer flex-grow border border-gray-200 rounded flex justify-center items-center p-5"
//         >
//           Proceed to Checkout
//         </div>
//       </div>

//       {loading ? (
//         <div className="flex justify-center my-5">
//           <Spin tip="Placing your order..." />
//         </div>
//       ) : (
//         cartRecipes.map((recipes) => (
//           <div key={recipes.id} className="flex border my-3 p-3">
//             <Image src={recipes.image} height={100} width={100} />
//             <div className="pl-3">
//               <h1>{recipes.title}</h1>
//               <h1>${recipes.caloriesPerServing}</h1>

//               <div className="flex gap-3 my-3">
//                 <Button onClick={() => updateToCart(recipes.id, "plus")}>Plus</Button>
//                 <h1>{recipes.quantity}</h1>
//                 <Button
//                   onClick={() => {
//                     if (recipes.quantity <= 1) {
//                       removeCart(recipes.id);
//                     } else {
//                       updateToCart(recipes.id, "minus");
//                     }
//                   }}
//                 >
//                   Minus
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Carts;

// import { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { Button, Image, message, Spin } from "antd";
// import CheckOutModal from "../components/CheckoutModel";
// import { OrdersContext } from "../context/OrdersContext";

// function Carts() {
//   const { cartRecipes, removeCart, updateToCart, clearCart } = useContext(CartContext);
//   const { addOrder } = useContext(OrdersContext);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const totalQuantity = cartRecipes.reduce((value, recipes) => value + recipes.quantity, 0);
//   const totalPrice = cartRecipes.reduce((value, recipes) => value + recipes.quantity * recipes.caloriesPerServing, 0);

//   const checkoutOrder = async (values) => {
//     setLoading(true);
//     const checkoutObj = {
//       ...values,
//       totalPrice,
//       totalQuantity,
//       status: "pending",
//       user: "guest",
//       recipes: cartRecipes.map((data) => `recipes: ${data.title}, Price: ${data.caloriesPerServing} (${data.quantity})`),
//     };

//     try {
//       message.success("Your order is placed");
//       addOrder(checkoutObj); // Add order to context
//       const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
//       window.open(`https://wa.me/923262013238?text=${encodedTxt}`);
//       clearCart();
//       setIsModalOpen(false);
//     } catch (error) {
//       message.error("Failed to place the order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <CheckOutModal
//         isModalOpen={isModalOpen}
//         handleOk={() => setIsModalOpen(false)}
//         handleCancel={() => setIsModalOpen(false)}
//         checkoutOrder={checkoutOrder}
//       />
//       {/* Rest of your component */}
//     </div>
//   );
// }

// export default Carts;

  // const checkoutOrder = async (values) => {
  //   setLoading(true);
  //   const checkoutObj = {
  //     ...values,
  //     totalPrice,
  //     totalQuantity,
  //     status: "pending",
  //     user: "guest",
  //     recipes: cartRecipes.map((data) => `recipes: ${data.title}, Price: ${data.caloriesPerServing} (${data.quantity})`),
  //   };

  //   try {
  //     message.success("Your order is placed");
  //     const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
  //     window.open(`https://wa.me/923262013238?text=${encodedTxt}`);
  //     clearCart();
  //     setIsModalOpen(false);
  //   } catch (error) {
  //     message.error("Failed to place the order. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Image, message, Spin } from "antd";
import CheckOutModal from "../components/CheckoutModel";
import { OrdersContext } from "../context/OrdersContext";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

// function Carts({ isLoggedIn, userName }) {
//   const { currentUser } = useContext(AuthContext);
//   const userEmail = currentUser ? currentUser.email : null; // Correctly fetch user email
//   const { cartRecipes, removeCart, updateToCart, clearCart } = useContext(CartContext);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const { addOrder } = useContext(OrdersContext);
function Carts({ isLoggedIn, userName }) {
  const { currentUser } = useContext(AuthContext);
  const { cartRecipes, removeCart, updateToCart, clearCart } = useContext(CartContext);
  const { addOrder, fetchOrders } = useContext(OrdersContext); // Include fetchOrders here
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userEmail = currentUser ? currentUser.email : "guest@example.com";
 
  // Calculate total quantity and total price with checks for NaN
  const totalQuantity = cartRecipes.reduce((value, recipes) => value + (recipes.quantity || 0), 0);
  const totalPrice = cartRecipes.reduce((value, recipe) => 
    value + ((recipe.quantity || 0) * (recipe.price || 0)), 0
  );
  

  // const checkoutOrder = async (values) => {
  //   setLoading(true);
  //   const checkoutObj = {
  //     ...values,
  //     totalPrice,
  //     totalQuantity,
  //     status: "pending",
  //     user: isLoggedIn ? userName : "guest",
  //     recipes: cartRecipes.map((data) => 
  //       `Recipe: ${data.name || 'Unknown'}, Price: ${data.price || 0} (${data.quantity || 0})`
  //     ),
  //   };
    

  //   try {
  //     await addOrder(checkoutObj); // Add order to context
  //     message.success("Your order is placed");
  //     const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
  //     window.open(`https://wa.me/923262013238?text=${encodedTxt}`);
  //     clearCart();
  //     setIsModalOpen(false);
  //   } catch (error) {
  //     message.error("Failed to place the order. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
//   const checkoutOrder = async (values) => {
//     setLoading(true);
//     const checkoutObj = {
//         ...values,
//         userId: currentUser.uid, // Make sure userId is included
//         totalPrice,
//         totalQuantity,
//         status: "pending",
//         user: isLoggedIn ? userName : "guest",
//         recipes: cartRecipes.map((data) => 
//             `Recipe: ${data.name || 'Unknown'}, Price: ${data.price || 0} (${data.quantity || 0})`
//         ),
//     };

//     console.log("Checkout Order Object:", checkoutObj); // Log for debugging

//     try {
//         await addOrder(checkoutObj);
//         message.success("Your order is placed");
//         const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
//         window.open(`https://wa.me/923262013238?text=${encodedTxt}`);
//         clearCart();
//         setIsModalOpen(false);
//         await fetchOrders(); // Fetch orders again to refresh the list
//     } catch (error) {
//         console.error("Error placing order: ", error); // Log the error for debugging
//         message.error("Failed to place the order. Please try again.");
//     } finally {
//         setLoading(false);
//     }
// };
const checkoutOrder = async (values) => {
  setLoading(true);
  const checkoutObj = {
      ...values,
      userId: currentUser.uid, // Make sure userId is included
      totalPrice,
      totalQuantity,
      status: "pending",
      user: isLoggedIn ? userName : "guest",
      recipes: cartRecipes.map((data) => 
          `Recipe: ${data.name || 'Unknown'}, Price: ${data.price || 0} (${data.quantity || 0})`
      ),
      timestamp: new Date().toISOString(), // Use ISO format or a valid timestamp

  };

  console.log("Checkout Order Object:", checkoutObj); // Log for debugging

  try {
      await addOrder(checkoutObj);
      message.success("Your order is placed");
      const encodedTxt = encodeURIComponent(JSON.stringify(checkoutObj));
      window.open(`https://wa.me/923262013238?text=${encodedTxt}`);
      clearCart();
      setIsModalOpen(false);
      await fetchOrders(); // Fetch orders again to refresh the list
  } catch (error) {
      console.error("Error placing order: ", error); // Log the error for debugging
      message.error("Failed to place the order. Please try again.");
  } finally {
      setLoading(false);
  }
};


  const handleCheckout = () => {
    if (isLoggedIn) {
      // User is logged in, proceed to checkout
      checkoutOrder({
        username: userName || "Guest User",
        email: userEmail || "guest@example.com",
        number: "1234567890", // Replace with actual phone number
        address: "User Address" // Replace with actual address
      });
    } else {
      // User is not logged in, open modal
      setIsModalOpen(true);
    }
  };

  console.log('Cart Recipes:', cartRecipes);

  return (
    <div className="container mx-auto">
      <CheckOutModal
        isModalOpen={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        handleCancel={() => setIsModalOpen(false)}
        checkoutOrder={checkoutOrder}
        isLoggedIn={isLoggedIn}
      />

      <div className="flex gap-4 my-4">
        <div className="flex-grow border border-gray-200 rounded flex justify-center items-center p-5">
          <h1 className="text-2xl font-semibold">{totalQuantity}</h1>
        </div>
        <div className="flex-grow border border-gray-200 rounded flex justify-center items-center p-5">
          <h1 className="text-2xl font-semibold">{totalPrice.toFixed(2)}</h1> {/* Display totalPrice */}
        </div>
        <div
          onClick={handleCheckout}
          className="cursor-pointer flex-grow border border-gray-200 rounded flex justify-center items-center p-5"
        >
          Proceed to Checkout
        </div>
      </div>

      {loading ? (
  <div className="flex justify-center my-5">
    <Spin tip="Placing your order..." />
  </div>
) : (
  cartRecipes.map((recipes) => (
    <div key={recipes.id} className="flex border my-3 p-3">
      <Image src={recipes.image} height={100} width={100} />
      <div className="pl-3">
        <h1>{recipes.name || 'Unknown'}</h1>
        <h1>${(typeof recipes.price === 'number' ? recipes.price : parseFloat(recipes.price) || 0).toFixed(2)}</h1>
        <div className="flex gap-3 my-3">
          <Button onClick={() => updateToCart(recipes.id, "plus")}><PlusOutlined/></Button>
          <h1>{recipes.quantity}</h1>
          <Button
            onClick={() => {
              if (recipes.quantity <= 1) {
                removeCart(recipes.id);
              } else {
                updateToCart(recipes.id, "minus");
              }
            }}
          >
            <MinusOutlined/>
          </Button>
        </div>
      </div>
    </div>
  ))
)}

    </div>
  );
}

export default Carts;
