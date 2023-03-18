import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card'

const Form = () => {

  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("wa");
  const [sortGoodBad, setSortGoodBad] = useState(null)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=7b972eefbba621f914713275c4092f65&query=${search}&language=en-US`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search])

  return (
    <div>
      <div className="form-component">
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Search by title"
              id="search-input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <input type="submit" value="Search" />
          </form>

          <div className="btn-sort-container">
            <div
              className="btn-sort"
              id="goodToBad"
              onClick={() => setSortGoodBad("goodToBad")}
            >
              Top<span>👍</span>
            </div>
            <div
              className="btn-sort"
              id="badToGood"
              onClick={() => setSortGoodBad("badToGood")}
            >
              Flop<span>👎</span>
            </div>
          </div>
        </div> 
      </div>

      
      <div className="result">
        {moviesData
          .slice(0, 12)
          .sort((a, b) => {
            if(sortGoodBad === "goodToBad"){
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToBad"){
              return a.vote_average - b.vote_average;
            } 
          }) 
          .map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default Form