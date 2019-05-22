// a library to wrap and simplify api calls
import { create } from 'apisauce';
import Drink from '../../models/Drink';
import { ApiConfig, DEFAULT_API_CONFIG } from './api-config';
import { getGeneralApiProblem } from './api-problem';
import * as Types from './api.types';

// our "constructor"
export const createApi = (config: ApiConfig = DEFAULT_API_CONFIG) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = create({
    // base URL is read from the "constructor"
    baseURL: config.url,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    timeout: config.timeout,
  });
  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getCocktailList = async (): Promise<Types.GetDrinksResult> => {
    // make the api call
    const response = await Promise.all(
      [1, 2, 3, 4, 5].map(
        async i => api.get(`random.php?i=${i}`),
      ),
    );
    // the typical ways to die when calling an api
    if (!response[0].ok) {
      const problem = getGeneralApiProblem(response[0]);
      if (problem) return problem;
    }

    // transform the data into the format we are expecting
    const drinks = await Promise.all(
      response.map(
        async (r) => {
          const res: any = await r.data;
          return new Drink(res.drinks[0]);
        },
      ),
    );
    try {
      return {
        kind: 'ok',
        data: drinks,
      };
    } catch {
      return { kind: 'bad-data' };
    }
  };

  const getFilterCocktailList = async (query: string): Promise<Types.GetDrinksResult> => {
    // make the api call
    const response = await api.get(`filter.php?${query}`);
    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    // transform the data into the format we are expecting
    const drinks = await Promise.all(
      response.data.drinks.map(
        async (item: any) => {
          const res: any = await api.get(`lookup.php?i=${item.idDrink}`);
          if (!res.ok) {
            const problem = getGeneralApiProblem(response);
            if (problem) return problem;
          }
          return new Drink(res.data.drinks[0]);
        },
      ),
    );

    try {
      return {
        kind: 'ok',
        data: drinks,
      };
    } catch {
      return { kind: 'bad-data' };
    }
  };
  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getCocktailList,
    getFilterCocktailList,
  };
};
