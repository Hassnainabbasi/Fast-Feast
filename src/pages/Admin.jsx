// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// const AdminPage = () => {
//     const { currentUser } = useContext(AuthContext);
    
//     if (currentUser.email !== "admin@gmail.com") {
//         return <p>You are not authorized to view this page.</p>;
//     }

//     return (
//         <div>
//             <h1>Admin Page</h1>
//             {/* Admin functionalities */}
//         </div>
//     );
// };
// // export default AdminPage;
// import { useContext } from "react";
//  import { AuthContext } from "../context/AuthContext";
// import AdminHeader from "../components/AdminHeader";
 
// const AdminPage = () => {
//     const { currentUser } = useContext(AuthContext);
//     const { logout } = useContext(AuthContext); // Use the context

//     if (!currentUser) {
//         return <p>You must be logged in to view this page.</p>;
//     }

//     if (currentUser.email !== "admin@gmail.com") {
//         return <p>You are not authorized to view this page.</p>;
//     }

//     return (
//         <div>
//             <AdminHeader onLogout={logout}/>
//             <h1 className="text-center text-2xl font-bold">Admin Page</h1>
//             {/* Admin functionalities here */}
//         </div>
//     );
// };
// export default AdminPage;

// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import AdminHeader from "../components/AdminHeader";

// const AdminPage = () => {
//     const { currentUser, logout } = useContext(AuthContext); // Destructure from context
//     const handleLogout = async () => {
//         await logout();
//         navigate("/auth/login"); // Redirect after logout
//       };
      
//       // In AdminHeader
//       <AdminHeader onLogout={handleLogout} />
      
      
//     if (!currentUser) {
//         return <p>You must be logged in to view this page.</p>;
//     }

//     if (currentUser.email !== "admin@gmail.com") {
//         return <p>You are not authorized to view this page.</p>;
//     }

//     return (
//         <div>
//             <AdminHeader onLogout={logout} />
//             <h1 className="text-center text-2xl font-bold">Admin Page</h1>
//             {/* Admin functionalities here */}
//         </div>
//     );
// };

// export default AdminPage;
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Import Firestore
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import AdminHeader from '../components/AdminHeader';

const AdminPage = () => {
  const [recipes, setRecipes] = useState([]);

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

    fetchRecipes(); // Fetch recipes on component mount
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'recipes', id));
      setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id)); // Update local state
      alert('Recipe deleted successfully!');
    } catch (error) {
      console.error('Error deleting recipe: ', error);
    }
  };

  return (
    <div>
        <AdminHeader/>
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Admin - Manage Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="border rounded-lg overflow-hidden shadow-md">
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{recipe.name}</h3>
              <p className="text-md underline font-bold">Rs {recipe.price}</p>
              <button 
                onClick={() => handleDelete(recipe.id)} 
                className="mt-2 text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AdminPage;
