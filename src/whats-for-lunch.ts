import moment from 'moment';

/**
 * Fetch recipes
 *
 * @return Promise
 * @throws Error
 */
async function fetchRecipes() : Promise<Array<any>> {
    let results : Array<any>;

    let response : any = await fetch('recipes.json');
    let json = await response.json();

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
async function fetchIngredients() : Promise<Array<any>> {
    let results : Array<any>;

    let response : any = await fetch('ingredients.json');
    let json = await response.json();
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
async function whatsForLunch() : Promise<Array<any>> {
    let whatsForLunch : Array<any> = [];
    let bottomRecipes : Array<any> = [];
    let recipes : any;
    let ingredients : any;

    try {
        recipes = await fetchRecipes();
        ingredients = await fetchIngredients();
    } catch (e) {
        console.log('Error getting the lunchtime menu');
        console.log(e);
    }

    /**
     * Using let in a for loop forces the JS interpereter to create a new copy of the variable for each iteration, which means var is faster
     */
    for (var recipe of recipes) {
        let pastUseBy = false;
        let pastBestBefore = false;

        for (var ingredient of recipe.ingredients) {
            let thisIngredient = ingredients.find((element : any) => {
                return element.title === ingredient;
            });

            // Dont check missing ingredients
            if (thisIngredient === undefined) {
                continue;
            }

            let bestBefore = moment(thisIngredient['best-before']).unix();
            let useBy = moment(thisIngredient['use-by']).unix();
            let now = moment().unix();

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

        whatsForLunch.push(recipe);
    }

    // Insert recipes with ingredients past the best before date at the bottom
    for (var bottomRecipe of bottomRecipes) {
        whatsForLunch.push(bottomRecipe);
    }

    return Promise.resolve(whatsForLunch);
}


export default whatsForLunch;