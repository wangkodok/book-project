import { Routes, Route } from 'react-router-dom';
import Book from './Book';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Book />} />
      </Routes>
    </>
  );
}

export default App;
