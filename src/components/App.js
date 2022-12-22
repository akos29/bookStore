import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Categories from './Categories';
import Books from './Books';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
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
