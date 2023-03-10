import React from 'react'

const Card = ({movie}) => {

    const genreFinder = () => {
        let genreArray = [];
        for (let i = 0; movie.genre_ids.length; i++) {
            switch (movie.genre_ids[i]) {
              case 28:
                genreArray.push(`Action`);
                break;
              case 12:
                genreArray.push(`Adventure`);
                break;
              case 16:
                genreArray.push(`Animation`);
                break;
              case 35:
                genreArray.push(`Comedy`);
                break;
              case 80:
                genreArray.push(`Police`);
                break;
              case 99:
                genreArray.push(`Documentary`);
                break;
              case 18:
                genreArray.push(`Drama`);
                break;
              case 10751:
                genreArray.push(`Family`);
                break;
              case 14:
                genreArray.push(`Fantasy`);
                break;
              case 36:
                genreArray.push(`History`);
                break;
              case 27:
                genreArray.push(`Horror`);
                break;
              case 10402:
                genreArray.push(`Music`);
                break;
              case 9648:
                genreArray.push(`Mystery`);
                break;
              case 10749:
                genreArray.push(`Romance`);
                break;
              case 878:
                genreArray.push(`Science-fiction`);
                break;
              case 10770:
                genreArray.push(`TV`);
                break;
              case 53:
                genreArray.push(`Thriller`);
                break;
              case 10752:
                genreArray.push(`War`);
                break;
              case 37:
                genreArray.push(`Western`);
                break;
              default:
                break;
            }
        }

        return genreArray.map((genre) => <li key={genre}>{genre}</li>)
    }

  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={`${movie.title} poster`}
      />
      <h2>{movie.title}</h2>
      {movie.release_date ? <h5>released: {movie.release_date}</h5> : null}
      <h4>
        {movie.vote_average}/10 <span>⭐</span>
      </h4>
      <ul>
        {movie.genre_ids ? genreFinder() : null}
      </ul>
    </div>
  );
}

export default Card