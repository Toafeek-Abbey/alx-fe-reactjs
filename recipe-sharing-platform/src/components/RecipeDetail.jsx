import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID (convert to number since JSON uses numeric IDs)
    const selectedRecipe = data.find(r => r.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10 text-gray-600">Loading recipe...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto sm:p-4 p-6 bg-white shadow-lg rounded-2xl mt-10">
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-xl mb-4" />
      <h1 className="text-3xl font-bold mb-2 hover:text-blue-500">{recipe.title}</h1>
      <h2 className="text-xl font-semibold mt-4 mb-2">🧂 Ingredients</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">👨‍🍳 Instructions</h2>
      <p className="text-gray-800 leading-relaxed">{recipe.instructions}</p>
    </div>
  );
};


export default RecipeDetail