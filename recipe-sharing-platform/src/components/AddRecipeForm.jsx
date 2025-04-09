import { useState } from "react";
import { useForm } from "react-hook-form";

function AddRecipeFrom() {
    const [recipe, setRecipe] = useState("")
    const [ingredients, setIngreDient] = useState("")
    const [preparationsteps, setPreparation] = useState("")

    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => console.log(data)

    return ( 
        <form action="post" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="recipetitle">Recipe title</label>
                <input {...register("recipetitle", {required: true})}
                value={recipe} onChange={(re) => setRecipe(re.target.value)}
                type="text" name="recipetitle" id="recipetitle" /> 
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients</label>
                <textarea {...register("ingredients", {required: true})}
                value={ingredients} onChange={(Ie) => setIngreDient(Ie.target.value)}
                name="ingredients" id="ingredients" ></textarea>
            </div>
            <div>
                <label htmlFor="preparationsteps">Preparation Steps</label>
                <textarea {...register("preparationsteps", {required: true})}
                value={preparationsteps} onChange={(pe) => setPreparation(pe.target.value)}
                name="preparationsteps" id="preparationsteps" ></textarea>
            </div>
            <button type="submit">Add Recipe</button>
        </form>
     );
}

export default AddRecipeFrom;