import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import { constants } from '../modules/cart';
import * as api from '../api/cart';

function* fetchCartItems(action) {
  try {
    const payload = yield call(api.getCartItems, action.userId);
    yield put({ type: constants.GET_CART_ITEMS.SUCCESS, payload });
  } catch (e) {
    yield put({
      type: constants.GET_CART_ITEMS.FAILED,
      message: e.message || e
    });
  }
}

/**
 * Saga
 */
function* getCartItems() {
  yield takeLatest(constants.GET_CART_ITEMS.ACTION, fetchCartItems);
}

/**
 * Export the root saga by forking all available sagas.
 */
export function* rootSaga() {
  // add more sagas here
  yield all([fork(getCartItems)]);
}
