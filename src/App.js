import { Route, Routes } from 'react-router-dom';
import BookContainer from './Components/BookContainer';
import Category from './Components/Category';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <section className="book-app">
        <Nav />
        <Routes>
          <Route path="/" element={<BookContainer />} />
          <Route path="/categories" element={<Category />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
