import { useState } from "react";

function AddRecipeFrom() {
    const [recipe, setRecipe] = useState("")
    const [ingredients, setIngreDient] = useState("")
    const [preparationsteps, setPreparation] = useState("")

    return ( 
        <form action="post" >
            <div>
                <label htmlFor="recipetitle">Recipe title</label>
                <input value={recipe} onChange={(re) => setRecipe(re.target.value)}
                type="text" name="recipetitle" id="recipetitle" required/> 
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients</label>
                <textarea value={ingredients} onChange={(Ie) => setIngreDient(Ie.target.value)}
                name="ingredients" id="ingredients" required></textarea>
            </div>
            <div>
                <label htmlFor="preparationsteps">Preparation Steps</label>
                <textarea value={preparationsteps} onChange={(pe) => setPreparation(pe.target.value)}
                name="preparationsteps" id="preparationsteps" required></textarea>
            </div>
            <button type="submit">Add Recipe</button>
        </form>
     );
}

export default AddRecipeFrom;