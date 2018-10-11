import { fetchIngredients } from '../../src/whats-for-lunch';

let mockResponse = {
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
        return mockResponse
      }
    }
  }
});

describe('Fetch ingredients function test', () => {
  it('should fetch ingredients', async () => {
    let result = await fetchIngredients();
    expect(result.length).toBeGreaterThan(1);
    expect(result[0].title).toBe('Ham');
  });
});
