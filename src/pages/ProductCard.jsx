
// const ProductCard = ({ name, tags, image, price }) => {
//   return (
//     <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
//       <div className="block relative h-48 rounded overflow-hidden">
//         <img
//           alt="ecommerce"
//           className="object-cover object-center w-full h-full block"
//           src={image}
//         />
//       </div>
//       <div className="mt-4">
//         <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
//           {name}
//         </h3>
//         <h2 className="text-gray-900 title-font text-lg font-medium">
//           {tags}
//         </h2>
//         <p className="mt-1">{price}</p>
//       </div>
//     </div>
//   );
// };
// export default ProductCard;
 import { Link } from "react-router-dom";
const ProductCard = ({ recipe }) => {
  return (
    <div className="bg-rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
      <Link className="block relative h-48">
        <img
          alt="Product"
          className="object-cover object-center w-full h-full block transition-transform duration-300 hover:scale-110"
          src={recipe.image}
        />
      </Link>
      <div className="p-5">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {recipe.title} {/* Use recipe.title instead of name */}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {recipe.tags.join(', ')} {/* Assuming tags is an array */}
        </h2>
        <p className="mt-1 font-bold">Rs {recipe.caloriesPerServing}</p> {/* Ensure the correct price field */}
      </div>
    </div>
  );
};
export default ProductCard;
