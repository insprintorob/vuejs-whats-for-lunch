import { whatsForLunch } from '../../src/whats-for-lunch';

let mockRecipesResponse = {
    "recipes": [
        {
            "title": "Ham and Cheese Toastie",
            "ingredients": ["Ham", "Cheese", "Bread", "Butter"]
        },
        {
            "title": "Fry-up",
            "ingredients": ["Bacon", "Eggs", "Baked Beans", "Mushrooms", "Sausage", "Bread"]
        }
    ]
};

let mockIngredientsResponse = {
    "ingredients": [
        {
            "title": "Ham",
            "best-before": "2018-10-20",
            "use-by": "2018-10-25"
        },
        {
            "title": "Cheese",
            "best-before": "2018-10-20",
            "use-by": "2018-10-25"
        }
    ]
};

jest.mock('node-fetch', () => {
    return (url : string) => {
        return {
            json : () => {
                switch(url) {
                    case 'recipes.json':
                        return mockRecipesResponse;
                    case 'ingredients.json':
                        return mockIngredientsResponse;
                }
            }
        }
    }
});

describe('Whats for lunch function test', () => {
    it('Should show me whats for lunch', async () => {
        let results = await whatsForLunch();
        expect(results.length).toBeGreaterThan(1);
        expect(results[0].title).toBe('Ham and Cheese Toastie');
    });
});