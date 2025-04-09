import { useState, useEffect } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      
      setRecipes(data);
    }, []);
  
    return (
      
      <div className="sm:p-4 p-6 bg-gray-100 min-h-screen" >
        <h1 className="text-3xl font-bold mb-6 text-center hover:text-blue-500">🍽️ Recipe List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:shadow-xl">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-xl">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-600 mt-2">{recipe.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to={"/RecipeDetail"}>Recipe Detail</Link>
      </div>
      
    );
  
}
export default Homepage