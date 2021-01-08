import { combineReducers } from 'redux';
import { preferenceReducer } from './preference/preferenceReducer';

const rootReducer = combineReducers({
  preference: preferenceReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
