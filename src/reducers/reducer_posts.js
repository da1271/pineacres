import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) { //default state to an object here
  switch (action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
