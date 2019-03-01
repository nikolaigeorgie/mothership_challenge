import { combineReducers } from 'redux';
import DeliveriesReducer from '../Deliveries/reducer';

export default combineReducers({
  deliveries: DeliveriesReducer,
});
