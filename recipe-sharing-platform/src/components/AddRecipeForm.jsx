import { useState } from "react";
import { useForm } from "react-hook-form";
import *as React from "react";

function AddRecipeFrom() {
    const [recipe, setRecipe] = useState("")
    const [ingredients, setIngreDient] = useState("")
    const [preparationsteps, setPreparation] = useState("")

    React.useEffect(() => {
        setErrors("recipe", {
          type: "manual",
          message: "Dont Forget Your Recipe Should Be Cool!",
        })
      }, [setErrors])

    const {register, setErrors, formState: { errors }} = useForm()
    const onSubmit = (data) => console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return ( 
        <form action="post" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="recipetitle">Recipe title</label>
                <input {...register("recipetitle", {required: true})}
                value={recipe} onChange={(re) => setRecipe(re.target.value)}
                aria-invalid={errors.recipe ? "true" : "false"}
                type="text" name="recipetitle" id="recipetitle"
                /> 
                {errors.recipe && <span role="alert">This field is required</span>}
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