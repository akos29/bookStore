import bookStoreAPI, { baseURL } from '../../apis/bookStoreAPI';
// Actions
const CREATE = 'bookstore/books/CREATE';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

// const initialState = [
//   {
//     id: uuidv4(),
//     title: 'Capital in the Twenty-First Century',
//     author: 'Suzanne Collins',
//     category: 'Action',
//     currentChapter: 'Chapter 17',
//     progress: 0,
//   },
// ];

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];
    case REMOVE:
      return [...state.filter((book) => (book.id !== action.payload))];
    case FETCH_BOOKS:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export const createBook = (book) => async (dispatch) => {
  await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: CREATE, payload: book }));
};

export const removeBook = (id) => async (dispatch) => {
  await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: REMOVE, payload: id }));
};

export const afetchBooks = () => async (dispatch) => {
  const response = await bookStoreAPI.get('/books');
  dispatch({ type: FETCH_BOOKS, payload: response.data });
};

export const fetchBooks = () => async (dispatch) => {
  await fetch(baseURL)
    .then((res) => res.json())
    .then((books) => {
      const booksArray = [];
      Object.keys(books).forEach((key) => {
        booksArray.push({
          item_id: key,
          author: books[key][0].author,
          title: books[key][0].title,
          category: books[key][0].category,
        });
      });
      dispatch({ type: FETCH_BOOKS, payload: booksArray });
    });
};

export const displaBooks = () => async (dispatch) => {
  await dispatch(fetchBooks());
};
