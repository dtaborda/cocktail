import { all, takeEvery } from 'redux-saga/effects';
import { createApi } from '../services/api/';

import {
  COCKTAIL_LIST_REQUEST,
  COCKTAIL_REQUEST,
  fetchCocktailListRequest,
  fetchCocktailRequest,
  fetchFilterCocktailListRequest,
  FILTER_COCKTAIL_LIST_REQUEST,
} from './CocktailRedux';

const api = createApi();

export default function* rootSaga() {
  yield all([
    takeEvery(COCKTAIL_LIST_REQUEST, fetchCocktailListRequest, api),
    takeEvery(COCKTAIL_REQUEST, fetchCocktailRequest),
    takeEvery(FILTER_COCKTAIL_LIST_REQUEST, fetchFilterCocktailListRequest, api),
  ]);
}
