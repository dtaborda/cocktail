import { GeneralApiProblem } from './api-problem';

export interface Drink {
  id: string;
  name: string;
  picture: string;
  ingredients: [];
  instructions: string;
}

export type GetDrinksResult = { kind: 'ok'; data: Drink[] } | GeneralApiProblem;
