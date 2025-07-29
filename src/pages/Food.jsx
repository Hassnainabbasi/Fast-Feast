
import React, { useEffect, useState, useContext } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { CartContext } from '../context/CartContext'; // Import your CartContext

const food = () => {
  const [recipes, setRecipes] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();
  const { addToCart } = useContext(CartContext); // Use the CartContext

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesCollection = collection(db, 'recipes');
        const recipeSnapshot = await getDocs(recipesCollection);
        const recipeList = recipeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecipes(recipeList);
      } catch (error) {
        console.error('Error fetching recipes: ', error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
        fetchRecipes();
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (!isAuthenticated) {
    return <div><h1 className='font-bold text-3xl text-center p-5'>Please log in to view recipes.</h1></div>;
  }

  const handleAddToCart = (recipe) => {
    addToCart(recipe);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Our Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{recipe.name}</h3>
              <p className="text-md underline font-bold">Rs {recipe.price}</p>
              <button 
                onClick={() => handleAddToCart(recipe)} 
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default food;
