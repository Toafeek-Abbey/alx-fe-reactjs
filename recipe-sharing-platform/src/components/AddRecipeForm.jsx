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

    const {register, setErrors,  formState: { errors }} = useForm()
    const onSubmit = (data) => console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    const validate = () => {
        if(recipe && ingredients && preparationsteps == "") {
            alert("The input is require")
        }
    }

    return ( 
        <form action="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-lg shadow-lg md:p-6 sm:p-4 transition-transform duration-300 ease-in-out">
                <label htmlFor="recipetitle" className="text-blue-800 my-4 hover:text-blue-500 font-bold">Recipe title</label>
                <input {...register("recipetitle", {required: true})}
                value={recipe} onChange={(re) => setRecipe(re.target.value)}
                aria-invalid={errors.recipe ? "true" : "false"}
                type="text" name="recipetitle" id="recipetitle" 
                /> 
                {errors.recipe && <span role="alert">This field is required</span>}
            </div>
            <div className="rounded-lg shadow-lg md:p-6 sm:p-4 transition-transform duration-300 ease-in-out">
                <label htmlFor="ingredients" className="text-blue-800 my-4 hover:text-blue-500">Ingredients</label>
                <textarea {...register("ingredients", {required: true})}
                value={ingredients} onChange={(Ie) => setIngreDient(Ie.target.value)}
                name="ingredients" id="ingredients" ></textarea>
            </div>
            <div className="rounded-lg shadow-lg md:p-6 sm:p-4 transition-transform duration-300 ease-in-out">
                <label htmlFor="preparationsteps" className="text-blue-800 my-4 hover:text-blue-500">Preparation Steps</label>
                <textarea {...register("preparationsteps", {required: true})}
                value={preparationsteps} onChange={(pe) => setPreparation(pe.target.value)}
                name="preparationsteps" id="preparationsteps" ></textarea>
            </div>
            <button type="submit" onClick={validate}>Add Recipe</button>
        </form>
     );
}

export default AddRecipeFrom;