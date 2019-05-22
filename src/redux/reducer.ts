import {
  initialState as initialStateCocktails,
  reducer as reducerCocktails,
} from './CocktailRedux';

export const initialState = {
  app: initialStateCocktails,
};

export const reducers = {
  app: reducerCocktails,
};
