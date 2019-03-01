import { ADDED_ENTRY } from './types';

const initialState = {
  data: [{ hey: 'yo' }],
};

export default function reducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case ADDED_ENTRY:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}
