import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState(['The Shawshank Redemption', 'The Godfather', 'The Dark Knight']);
  const [newMovie, setNewMovie] = useState("");

  const addMovie = () => {
    if (newMovie.trim() !== '') {
      setMovies([...movies, newMovie.trim()]);
      setNewMovie('');
    }
  };

  const removeMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  };

  return (<div className="App">
    <h1>Lesson 9</h1>
    <p>A movie favorite using .map.</p>
    <input
      value={newMovie}
      onChange={(e) => setNewMovie(e.target.value)}
      placeholder="Type a movie name"
    />
    <button onClick={addMovie}>Add Movie</button>
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie}<button onClick={() => removeMovie(index)}>Remove</button></li>
      ))}
    </ul>
  </div>);
}

export default App;
