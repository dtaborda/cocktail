// tslint:disable-next-line:no-submodule-imports
import { call, put } from 'redux-saga/effects';
import { FilterTypes } from '../screens/Search/Search';
// Actions Creators
export const COCKTAIL_LIST_REQUEST = 'COCKTAIL_LIST_REQUEST';
export const COCKTAIL_LIST_SUCCESS = 'COCKTAIL_LIST_SUCCESS';
export const COCKTAIL_LIST_FAILURE = 'COCKTAIL_LIST_FAILURE';

export const FILTER_COCKTAIL_LIST_REQUEST = 'FILTER_COCKTAIL_LIST_REQUEST';
export const FILTER_COCKTAIL_LIST_SUCCESS = 'FILTER_COCKTAIL_LIST_SUCCESS';
export const FILTER_COCKTAIL_LIST_FAILURE = 'FILTER_COCKTAIL_LIST_FAILURE';

export const COCKTAIL_REQUEST = 'COCKTAIL_REQUEST';
export const COCKTAIL_SELECTED = 'COCKTAIL_SELECTED';
import * as Types from '../services/api/api.types';

// Actions
export const cocktailListRequest = () => {
  return {
    type: COCKTAIL_LIST_REQUEST,
  };
};

export const cocktaiLRequest = (drink: Types.Drink) => {
  return {
    type: COCKTAIL_REQUEST,
    drink,
  };
};

export const filterCocktaiLRequest = (data: FilterTypes) => {
  return {
    type: FILTER_COCKTAIL_LIST_REQUEST,
    data,
  };
};

// Reducer
export const initialState = {
  drink: null,
  fetching: false,
  error: null,
  cocktailList: [],
};

export function reducer(state = initialState, action: any) {
  switch (action.type) {
    case COCKTAIL_LIST_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
        drink: null,
      };
    case COCKTAIL_LIST_SUCCESS:
      return {
        ...state,
        cocktailList: action.concktailList,
        fetching: false,
        error: null,
      };
    case COCKTAIL_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    case COCKTAIL_SELECTED:
      return {
        ...state,
        drink:action.drink,
      };
    case FILTER_COCKTAIL_LIST_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
        drink: null,
      };
    case FILTER_COCKTAIL_LIST_SUCCESS:
      return {
        ...state,
        cocktailList: action.concktailList,
        fetching: false,
        error: null,
      };
    case FILTER_COCKTAIL_LIST_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}

// Sagas
export function* fetchCocktailListRequest(api: any, actions: any) {
  // make the call to the api
  const response = yield call(api.getCocktailList);
  if (response.kind === 'ok') {
    yield put({ type: COCKTAIL_LIST_SUCCESS, concktailList: response.data });
  } else {
    yield put({ type: COCKTAIL_LIST_FAILURE, error: response.error });
  }
}

export function* fetchFilterCocktailListRequest(api: any, actions: any) {
  // make the call to the api
  const response = yield call(api.getFilterCocktailList, actions.data.query);
  if (response.kind === 'ok') {
    yield put({ type: COCKTAIL_LIST_SUCCESS, concktailList: response.data });
  } else {
    yield put({ type: COCKTAIL_LIST_FAILURE, error: response.error });
  }
}

export function* fetchCocktailRequest(actions: any) {
  // make the call to the api
  yield put({ type: COCKTAIL_SELECTED, drink: actions.drink });
}
