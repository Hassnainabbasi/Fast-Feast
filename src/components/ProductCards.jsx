// import React, { useContext } from "react";
// import { Card, Col, Image } from "antd";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import { ShoppingCartOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";

// const ProductCard = ({ recipe }) => {
//   const { isRecipeAdded } = useContext(CartContext);

//   const isAdded = isRecipeAdded(recipe.id);

//   return (
//     <Col xs={24} sm={24} md={12} lg={8} xl={6}>
//       <Link to={`/food/${recipe.id}`}>
//         <div className="my-2 border-2 hover:opacity-75 cursor-pointer flex flex-col items-center justify-center relative">
//           {isAdded && (
//             <ShoppingCartOutlined className="text-3xl absolute top-5 right-5" />
//           )}
//           <Image preview={false} src={recipe.image} height={200} />
//           <div className="flex justify-between p-3 w-full">
//             <h1 className="font-semibold">{recipe.title}</h1>
//             <h1 className="font-semibold">${recipe.caloriesPerServing}</h1>
//           </div>
//         </div>
//       </Link>
//     </Col>
//   );
// };

// export default ProductCard;
// import React, { useContext } from "react";
// import { Col, Image } from "antd";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import { ShoppingCartOutlined } from "@ant-design/icons";

// const ProductCard = ({ recipe }) => {
//     const { isRecipeAdded } = useContext(CartContext);
//     const isAdded = isRecipeAdded(recipe.id);

//     return (
//         <Col xs={24} sm={24} md={12} lg={8} xl={6}>
//             <Link to={`/food/${recipe.id}`}>
//                 <div className="my-2 border-2 hover:opacity-75 cursor-pointer flex flex-col items-center justify-center relative">
//                     {isAdded && (
//                         <ShoppingCartOutlined className="text-3xl absolute top-5 right-5" />
//                     )}
//                     <Image preview={false} src={recipe.image} height={200} />
//                     <div className="flex justify-between p-3 w-full">
//                         <h1 className="font-semibold">{recipe.title}</h1>
//                         <h1 className="font-semibold">${recipe.caloriesPerServing}</h1>
//                     </div>
//                 </div>
//             </Link>
//         </Col>
//     );
// };

// export default ProductCard;

// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// const ProductCards = ({ recipe }) => {
//   const { addToCart } = useContext(CartContext); // Access the CartContext

//   return (
//     <div className="bg-rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
//       <a className="block relative h-48">
//         <img
//           alt="Product"
//           className="object-cover object-center w-full h-full block transition-transform duration-300 hover:scale-110"
//           src={recipe.image}
//         />
//       </a>
//       <div className="p-5">
//         <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
//           {recipe.title} {/* Use recipe.title for the name */}
//         </h3>
//         <h2 className="text-gray-900 title-font text-lg font-medium">
//           {recipe.tags.join(', ')} {/* Use tags from recipe */}
//         </h2>
//         <p className="mt-1 font-bold">Rs {recipe.price}</p>

//         <button 
//           className="mt-3 bg-blue-500 text-white py-2 px-4 rounded" 
//           onClick={() => addToCart(recipe)} // Call addToCart when clicked
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCards;import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';
import { useContext } from "react";

const ProductCards = ({ recipe }) => {
  const { addToCart } = useContext(CartContext);

  // Destructure with default values
  const { image = "default_image_url", title = "No Title", caloriesPerServing = 0, tags = [] } = recipe || {};

  // Check if recipe is valid
  if (!recipe) {
    return <div className="text-red-500">Recipe details are missing.</div>;
  }

  return (
    <div className="bg-rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <a className="block relative h-48">
        <img
          className="object-cover object-center w-full h-full block transition-transform duration-300 hover:scale-110"
          src={image}
        />
      </a>
      <div className="p-5">
        {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {}
        </h3> */}
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {tags.join(', ')}
        </h2>
        <p className="mt-1 font-bold">Rs {caloriesPerServing}</p>

        <button 
          className="mt-3 bg-blue-500 text-white py-2 px-4 rounded" 
          onClick={() => addToCart(recipe)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
