import moment from 'moment';
const fetch = require('node-fetch'); // Importing it makes it mockable

/**
 * Fetch recipes
 *
 * @return Promise
 * @throws Error
 */
async function fetchRecipes(): Promise<any[]> {
    let results: any[];

    const response: any = await fetch('recipes.json');
    const json = await response.json();

    if (!json || !json.recipes) {
        return Promise.reject(Error('Bad response. Maybe the internet is down?'));
    }

    results = json.recipes;
    return Promise.resolve(results);
}

/**
 * Fetch ingredients
 *
 * @return Promise
 * @throws Error
 */
async function fetchIngredients(): Promise<any[]> {
    let results: any[];

    const response: any = await fetch('ingredients.json');
    const json = await response.json();
    if (!json || !json.ingredients) {
        return Promise.reject(Error('Bad response. Maybe the internet is down?'));
    }

    results = json.ingredients;
    return Promise.resolve(results);
}

/**
 * Return an array of recipes that are good to eat
 * @return Promise
 */
async function whatsForLunch(): Promise<any[]> {
    const results: any[] = [];
    const bottomRecipes: any[] = [];
    let recipes: any;
    let ingredients: any;

    try {
        recipes = await fetchRecipes();
        ingredients = await fetchIngredients();
    } catch (e) {
        console.log('Error getting the lunchtime menu');
        console.log(e);
    }

    /**
     * Using let in a for loop forces the JS interpereter to create a new copy
     * of the variable for each iteration, which means var is faster
     */
    for (const recipe of recipes) {
        let pastUseBy = false;
        let pastBestBefore = false;

        for (const ingredient of recipe.ingredients) {
            const thisIngredient = ingredients.find((element: any) => {
                return element.title === ingredient;
            });

            // Dont check missing ingredients
            if (thisIngredient === undefined) {
                continue;
            }

            const bestBefore = moment(thisIngredient['best-before']).unix();
            const useBy = moment(thisIngredient['use-by']).unix();
            const now = moment().unix();

            if (now > useBy) {
                pastUseBy = true;
            }

            if (now > bestBefore) {
                pastBestBefore = true;
            }
        }

        if (pastUseBy === true) {
            continue;
        }

        if (pastBestBefore === true ) {
            bottomRecipes.push(recipe);
            continue;
        }

        results.push(recipe);
    }

    // Insert recipes with ingredients past the best before date at the bottom
    for (const bottomRecipe of bottomRecipes) {
        results.push(bottomRecipe);
    }

    return Promise.resolve(results);
}


export { whatsForLunch, fetchIngredients, fetchRecipes };
