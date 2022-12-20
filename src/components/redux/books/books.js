// Actions
const CREATE = 'bookstore/books/CREATE';
const REMOVE = 'bookstore/books/REMOVE';

export default function reducer(state = [], action) {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((book) => (book.id !== action.payload))];
    default: return state;
  }
}

// Action Creators
export function createBook(book) {
  return { type: CREATE, payload: book };
}

export function removeBook(id) {
  return { type: REMOVE, id };
}
