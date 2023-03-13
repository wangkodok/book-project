import { Routes, Route, } from 'react-router-dom';
import Header from './Header';
import Book from './Book';
import Event from './Event'
import EventPage from './EventPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Book />} />
        <Route path='/event' element={<Event />}>
          <Route path=':id' element={<EventPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
