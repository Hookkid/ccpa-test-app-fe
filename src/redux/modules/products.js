import { createSagaAction } from '../../shared/sagas';
import { createReducer } from '../../shared/reducers';

// Constants
export const constants = {
  GET_ALL_PRODUCTS: createSagaAction('GET_ALL_PRODUCTS')
};

// Action Creators
export const actions = {
  getAllProducts: () => ({ type: constants.GET_ALL_PRODUCTS.ACTION })
};

// Reducer
const initialState = {
  records: [],
  total: 0
};

export default createReducer(initialState, (state, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case constants.GET_ALL_PRODUCTS.SUCCESS:
      return { ...state, productList: payload };
  }
});
