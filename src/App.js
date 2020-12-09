import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Meals from "./components/Meals";
import Header from "./components/Header";
import Loading from "./images/loading.gif";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const result = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      // Get categories name
      const category = await axios(
        `https://www.themealdb.com/api/json/v1/1/list.php?c=list`
      );

      setCategories(category.data.meals);
      setRecipes(result.data.meals);
      setIsLoading(false);
    };

    fetchData();
  }, [query]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const getPerCategory = async (choosenCategory) => {
    setIsLoading(true);
    // Get selected categories
    const res = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${choosenCategory}`
    );

    setRecipes(res.data.meals);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Header />

      {/* Search Form */}
      <section id="search">
        <div className="form-wrapper">
          <h1>Recipe App</h1>
          <form className="search-form" onSubmit={handleSubmit}>
            <input value={search} onChange={handleChange} />
            <button className="btn">Search</button>
          </form>
        </div>
      </section>

      {/* Category Search */}
      <div className="category">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => getPerCategory(category.strCategory)}
            className="btn btn-category"
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="load">
          <img src={Loading} alt="loading" className="loading-gif" />
        </div>
      ) : (
        <Meals recipes={recipes} />
      )}
    </div>
  );
}

export default App;
