import 'isomorphic-fetch'

const baseUrl = 'https://api.nasa.gov/neo/rest/v1/neo'
const apiKey = "KkIifzR6z7TbydLMscKRRw1NQdM50fwxGjmPBNK4"
export default {
    getLatest,
    getRecipe
}

async function getLatest() {
    const request = await fetch(`${baseUrl}/browse?api_key=${apiKey}`)
    const data = await request.json() 
    const recipes = data.near_earth_objects.map((m) => normalizeMeal(m))
    console.log(recipes)
    return recipes
}

async function getRecipe(recipeId) {
    const request = await fetch(`${baseUrl}/${recipeId}?api_key=${apiKey}`)
    const data = await request.json()
    if (!data.meals) return null
    const recipe = normalizeMeal(data.meals.shift())

    return recipe
}

function normalizeMeal(meal) {
    const newMeal = {}

    newMeal.id = meal.id
    newMeal.name = meal.strMeal
    newMeal.absolute_magnitude_h = meal.strCategory
    newMeal.origin = meal.strArea
  //  newMeal.close_approach_data = meal.close_approach_data.split('\n').filter((i) => i.trim() !== '')
    newMeal.designation = meal.designation
   // newMeal.is_potentially_hazardous_asteroid = meal.is_potentially_hazardous_asteroid ? meal.is_potentially_hazardous_asteroid.split(',') : []
    newMeal.name = meal.name
    newMeal.ingredients = []
    newMeal.name_limited = meal.name_limited
    newMeal.nasa_jpl_url = meal.nasa_jpl_url

    /* for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`] !== '' && meal[`strMeasure${i}`] !== '') {
            newMeal.ingredients.push({
                ingredient: meal[`strIngredient${i}`],
                measure: meal[`strMeasure${i}`]
            })
        }
    } */

    return newMeal
}

