import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import { constants } from '../modules/products';
import * as api from '../api/products';

function* fetchProducts(action) {
  try {
    const payload = yield call(api.getAllProducts, action);
    yield put({ type: constants.GET_ALL_PRODUCTS.SUCCESS, payload });
  } catch (e) {
    yield put({
      type: constants.GET_ALL_PRODUCTS.FAILED,
      message: e.message || e
    });
  }
}

/**
 * Saga
 */
function* getAllProducts() {
  yield takeLatest(constants.GET_ALL_PRODUCTS.ACTION, fetchProducts);
}

/**
 * Export the root saga by forking all available sagas.
 */
export function* rootSaga() {
  // add more sagas here
  yield all([fork(getAllProducts)]);
}
