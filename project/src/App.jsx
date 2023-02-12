import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Book from './Book';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
