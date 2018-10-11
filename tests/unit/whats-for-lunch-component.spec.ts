import { shallowMount } from '@vue/test-utils';
import WhatsForLunch from '@/components/WhatsForLunch.vue';

const mockRecipesResponse = {
    recipes: [
        {
            title: 'Ham and Cheese Toastie',
            ingredients: ['Ham', 'Cheese', 'Bread', 'Butter'],
        },
        {
            title: 'Fry-up',
            ingredients: ['Bacon', 'Eggs', 'Baked Beans', 'Mushrooms', 'Sausage', 'Bread'],
        },
    ],
};

const mockIngredientsResponse = {
    ingredients: [
        {
            'title': 'Ham',
            'best-before': '2018-10-20',
            'use-by': '2018-10-25',
        },
        {
            'title': 'Cheese',
            'best-before': '2018-10-20',
            'use-by': '2018-10-25',
        },
    ],
};

jest.mock('node-fetch', () => {
    return (url: string) => {
        return {
            json : () => {
                switch (url) {
                    case 'recipes.json':
                        return mockRecipesResponse;
                    case 'ingredients.json':
                        return mockIngredientsResponse;
                }
            },
        };
    };
});

describe('WhatsForLunch.vue', () => {
  it('renders whats for lunch wihout errors', () => {
    shallowMount(WhatsForLunch, {}); // Will trigger whatsForLunch();
  });
});
