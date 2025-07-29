


import { LoadingOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Single() {
    const { id } = useParams(); // Use useParams to get the id from the URL
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/recipes/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]); // Depend on id from URL

    if (loading) {
        return <h1><LoadingOutlined className='text-9xl flex justify-center items-center p-36' /></h1>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    if (!recipe) {
        return <div className="text-center">Recipe not found</div>;
    }

    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                className="w-full h-48 object-cover"
                src={recipe.image || "https://via.placeholder.com/300"}
                alt={recipe.name}
            />
            <div className="p-5">
                <h2 className="text-lg font-bold mb-2">{recipe.name}</h2>
                <p className="text-gray-700 text-xl font-semibold">{recipe.tags.join(', ')}</p>
            </div>
        </div>
    );
};
