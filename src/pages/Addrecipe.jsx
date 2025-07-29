import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Import Firestore only
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    image: '', // Change to string for URL
    price: '',
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate('/login'); // Redirect to login page
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [auth, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      console.error("User is not authenticated");
      return; // Prevent further action
    }

    try {
      const recipesCollection = collection(db, 'recipes');
      await addDoc(recipesCollection, {
        name: recipe.name,
        image: recipe.image, // Directly use the URL
        price: recipe.price,
      });

      setRecipe({ name: '', image: '', price: '' });
      alert('Recipe added successfully!');
    } catch (error) {
      console.error('Error adding recipe: ', error);
    }
  };

  if (!isAuthenticated) {
    return null; // Or a loading indicator
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={recipe.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL:</label>
          <input
            type="text" // Change to text for URL input
            name="image"
            value={recipe.image}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price:</label>
          <input
            type="number"
            name="price"
            value={recipe.price}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;


