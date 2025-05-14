import React from 'react'
import './App.css'
import IngredientsList from './components/IngredientsList'
import Header from './components/Header'
import ClaudeRecipe from './components/ClaudeRecipe'

function App() {
  const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
  const [recipeShown, setRecipeShown] = React.useState(false)

  async function getRecipe() {
        console.log("Button Clicked")
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        console.log(recipeMarkdown)
  }

  function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }
  

  return (
    <>

      <Header/>
      
      
      <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }

            {recipeShown && <ClaudeRecipe />}
        </main>
    </>
  )
}

export default App

