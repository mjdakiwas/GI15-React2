import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Counter from "./pages/Counter.jsx";
import MovieSearch from "./pages/MovieSearch.jsx";
import TodoList from "./pages/TodoList.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/search-movies" element={<MovieSearch />} />
        <Route path="/to-do" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
