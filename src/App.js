import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Books />
          }
          />
          <Route
            path="/categories"
            element={
              <Categories />
          }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
