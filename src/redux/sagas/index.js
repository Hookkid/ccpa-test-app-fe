import { all, fork } from 'redux-saga/effects';

import { rootSaga as products } from './products';
import { rootSaga as cart } from './cart';
import { rootSaga as account } from './account';

function* rootSaga() {
  yield all([fork(products), fork(account), fork(cart)]);
}

export default rootSaga;
