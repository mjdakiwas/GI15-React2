import { Routes, Route } from "react-router-dom";
import Button from "./components/Button.jsx";
import Counter from "./pages/Counter.jsx";
import MovieSearch from "./pages/movie-app/MovieSearch.jsx";
import TodoList from "./pages/todo-app/TodoList.jsx";

function App() {
  return (
    <>
      <nav>
        <Button src="/" page="Counter" />
        <Button src="/search-movies" page="Search Movies" />
        <Button src="/to-do" page="To Do List" />
      </nav>

      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/search-movies" element={<MovieSearch />} />
        <Route path="/to-do" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
