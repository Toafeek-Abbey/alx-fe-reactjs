import App from "./App";
import {createBrowserRouter} from "react-router-dom"
import RecipeDetail from "./components/RecipeDetail";

const router = createBrowserRouter ([
    
    {
      path: "/",
      Component: App
    },
    {
        path: "/about",
        Component: RecipeDetail
    }
   
])

export default router