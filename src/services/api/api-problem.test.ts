import { ApiErrorResponse } from 'apisauce';
import { getGeneralApiProblem } from './api-problem';

test('handles connection errors', () => {
  // tslint:disable-next-line:no-object-literal-type-assertion
  expect(getGeneralApiProblem({ problem: 'CONNECTION_ERROR' } as ApiErrorResponse<null>)).toEqual({
    kind: 'cannot-connect',
    temporary: true,
  });
});

test('handles network errors', () => {
  // tslint:disable-next-line:no-object-literal-type-assertion
  expect(getGeneralApiProblem({ problem: 'NETWORK_ERROR' } as ApiErrorResponse<null>)).toEqual({
    kind: 'cannot-connect',
    temporary: true,
  });
});

test('handles timeouts', () => {
  // tslint:disable-next-line:no-object-literal-type-assertion
  expect(getGeneralApiProblem({ problem: 'TIMEOUT_ERROR' } as ApiErrorResponse<null>)).toEqual({
    kind: 'timeout',
    temporary: true,
  });
});

test('handles server errors', () => {
  // tslint:disable-next-line:no-object-literal-type-assertion
  expect(getGeneralApiProblem({ problem: 'SERVER_ERROR' } as ApiErrorResponse<null>)).toEqual({
    kind: 'server',
  });
});

test('handles unknown errors', () => {
  // tslint:disable-next-line:no-object-literal-type-assertion
  expect(getGeneralApiProblem({ problem: 'UNKNOWN_ERROR' } as ApiErrorResponse<null>)).toEqual({
    kind: 'unknown',
    temporary: true,
  });
});

test('handles unauthorized errors', () => {
  expect(
    // tslint:disable-next-line:no-object-literal-type-assertion
    getGeneralApiProblem({ problem: 'CLIENT_ERROR', status: 401 } as ApiErrorResponse<null>),
  ).toEqual({
    kind: 'unauthorized',
  });
});

test('handles forbidden errors', () => {
  expect(
    // tslint:disable-next-line:no-object-literal-type-assertion
    getGeneralApiProblem({ problem: 'CLIENT_ERROR', status: 403 } as ApiErrorResponse<null>),
  ).toEqual({
    kind: 'forbidden',
  });
});

test('handles not-found errors', () => {
  expect(
    // tslint:disable-next-line:no-object-literal-type-assertion
    getGeneralApiProblem({ problem: 'CLIENT_ERROR', status: 404 } as ApiErrorResponse<null>),
  ).toEqual({
    kind: 'not-found',
  });
});

test('handles other client errors', () => {
  expect(
    // tslint:disable-next-line:no-object-literal-type-assertion
    getGeneralApiProblem({ problem: 'CLIENT_ERROR', status: 418 } as ApiErrorResponse<null>),
  ).toEqual({
    kind: 'rejected',
  });
});

test('handles cancellation errors', () => {
  expect(
    // tslint:disable-next-line:no-object-literal-type-assertion
    getGeneralApiProblem({ problem: 'CANCEL_ERROR' } as ApiErrorResponse<null>),
  ).toBeNull();
});
