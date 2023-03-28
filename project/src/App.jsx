import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Book from "./pages/Book";
import Event from "./pages/Event";
import EventPage from "./pages/EventPage";
import SalePage from "./pages/SalePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/event" element={<Event />}>
          <Route path=":id" element={<EventPage />} />
        </Route>
        <Route path="/sale" element={<SalePage />} />
      </Routes>
    </>
  );
}

export default App;
