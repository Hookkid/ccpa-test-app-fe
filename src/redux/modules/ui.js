import { createSagaAction } from '../../shared/sagas';
import { createReducer } from '../../shared/reducers';

// Constants
export const constants = {
  SHOW_TOP_MENU: createSagaAction('SHOW_TOP_MENU'),
  HIDE_TOP_MENU: createSagaAction('HIDE_TOP_MENU')
};

// Action Creators
export const actions = {
  showTopMenu: () => ({
    type: constants.SHOW_TOP_MENU.ACTION
  }),
  hideTopMenu: () => ({
    type: constants.HIDE_TOP_MENU.ACTION
  })
};

// Reducer
const initialState = {};

// eslint-disable-next-line complexity
export default createReducer(initialState, (state, action) => {
  switch (action.type) {
    case constants.SHOW_TOP_MENU.ACTION:
      return { ...state, topMenuVisible: true };
    case constants.HIDE_TOP_MENU.ACTION:
      return { ...state, topMenuVisible: false };
    default:
      return state;
  }
});
