import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Ensure correct import
import { collection, getDocs } from 'firebase/firestore';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesCollection = collection(db, 'recipes');
      const recipeSnapshot = await getDocs(recipesCollection);
      const recipeList = recipeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRecipes(recipeList);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Recipe List</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id} className="mb-4">
            <h3 className="font-semibold">{recipe.name}</h3>
            <img src={recipe.image} alt={recipe.name} className="w-32 h-32 object-cover" />
            <p>Price: ${recipe.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
