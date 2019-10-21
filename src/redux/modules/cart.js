import { createSagaAction } from '../../shared/sagas';
import { createReducer } from '../../shared/reducers';

// Constants
export const constants = {
  GET_CART_ITEMS: createSagaAction('GET_CART_ITEMS')
};

// Action Creators
export const actions = {
  getCartItems: ({ userId }) => ({ type: constants.GET_CART_ITEMS.ACTION, userId })
};

// Reducer
const initialState = {};

export default createReducer(initialState, (state, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case constants.GET_CART_ITEMS.SUCCESS:
      return { ...state, userId: payload };
  }
});
