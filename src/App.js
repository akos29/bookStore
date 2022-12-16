import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <>
      <Header />
      <div>
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
            element={(
              <div className="container">
                <Categories />
              </div>
            )}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
