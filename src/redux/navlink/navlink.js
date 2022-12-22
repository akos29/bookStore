// Actions
const ACTIVE_LINK = 'bookstore/categories/ACTIVE_LINK';

// Reducer

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ACTIVE_LINK:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export function activeStatus(pageName) {
  return { type: ACTIVE_LINK, payload: pageName };
}
