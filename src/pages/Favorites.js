import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import axios from 'axios';

const Favorites = () => {

  const [listData, setListData] = useState([])

  useEffect(() => {
    let moviesId = localStorage.movies ? localStorage.movies.split(",") : [];
    // console.log(moviesId)
    for (let i = 0; i < moviesId.length; i++) {
      axios.get(
        `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=7b972eefbba621f914713275c4092f65`
      ).then((res) => setListData((listData) => [...listData, res.data]))
    }
  } ,[])
  return (
    <div className="user-list-page">
      <Header />
      <h2>
        My favorite Movies <span>❤️</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map(movie => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Your list is empty... Select your favorite movies</h2>
        )}
      </div>
    </div>
  );
}

export default Favorites