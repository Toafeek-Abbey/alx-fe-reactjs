import { useState } from "react"
function AddRecipeFrom() {
    const [formData, setFormData] = useState({recipetitle: "", ingredients: "", preparationsteps: ""})
  
    const handleChange = (e) => {
        const {recipetitle, value} = e.target
        setFormData(prevState => ({...prevState, [recipetitle]: value}))
  
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return ( 
        <form action="post" onSubmit={handleSubmit} className="max-w-3xl mx-auto sm:p-4 p-6 bg-white shadow-lg rounded-2xl mt-10">
            <div>
                <label htmlFor="recipetitle" className="text-xl font-semibold">Recipe title</label>
                <input type="text" className="text-xl font-semibold" name="recipetitle" id="recipetitle" value={formData.recipetitle}
                  onChange={handleChange}/> 
            </div>
            <div>
                <label htmlFor="ingredients" className="text-xl font-semibold">Ingredients</label>
                <textarea name="ingredients" className="text-xl font-semibold" id="ingredients"
                value={formData.recipetitle}
                  onChange={handleChange}></textarea>
            </div>
            <div>
                <label htmlFor="preparationsteps" className="text-xl font-semibold">Preparation Steps</label>
                <textarea name="preparationsteps" className="text-xl font-semibold" id="preparationsteps" value={formData.recipetitle}
                  onChange={handleChange}></textarea>
            </div>
            <button type="submit">Add Recipe</button>
        </form>
     );
}

export default AddRecipeFrom;