import { combineReducers } from 'redux';
import { preferenceReducer } from './preference/preferenceReducer';
import { interfaceReducer } from './interface/interfaceReducer';

const rootReducer = combineReducers({
  preference: preferenceReducer,
  interface: interfaceReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
