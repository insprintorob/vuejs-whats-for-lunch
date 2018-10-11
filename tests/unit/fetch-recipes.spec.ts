import { fetchRecipes } from '../../src/whats-for-lunch';

const mockResponse = {
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

jest.mock('node-fetch', () => {
  return (url: string) => {
    return {
      json : () => {
        return mockResponse;
      },
    };
  };
});

describe('Fetch recipes function test', () => {
  it('should fetch ingredients', async () => {
    const result = await fetchRecipes();
    expect(result.length).toBeGreaterThan(1);
    expect(result[0].title).toBe('Ham and Cheese Toastie');
  });
});
