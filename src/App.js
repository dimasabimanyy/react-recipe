import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Meals from './components/Meals';
import Header from './components/Header';

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
      setRecipes(result.data.meals);
    }

    fetchData();
  }, [])

  console.log(recipes);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <Header />
      {/* Search Form */}
      <section id="search">
        <h1>Recipe App</h1>
        <form className="search-form">
          <input value={search} onChange={handleChange} />
          <button className="btn">
            Search
          </button>
        </form>
      </section>
      <Meals recipes={recipes} />
    </div>
  );
}

export default App;
