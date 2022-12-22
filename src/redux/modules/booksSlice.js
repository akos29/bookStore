import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    bookAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.title,
        author: action.payload.author,
      });
    },
    progressUpdate(state, action) {
      const book = state.find((book) => book.id === action.payload);
      book.progress += 1;
    },
  },
});

export const { bookAdded, progressUpdate } = booksSlice.actions;
export default booksSlice.reducer;
