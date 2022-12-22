import axios from 'axios';

export const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oEBnVMzTTmWBLoLYfnlX/books';

export default axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oEBnVMzTTmWBLoLYfnlX',
});
// export default axios.create({
//   baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${process.env.API_KEY}`,
// });
