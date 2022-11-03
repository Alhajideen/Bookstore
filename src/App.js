import { Route, Routes } from 'react-router-dom';
import BookContainer from './Components/BookContainer';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <section className="book-app">
        <Nav />
        <Routes>
          <Route path="/" element={<BookContainer />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
