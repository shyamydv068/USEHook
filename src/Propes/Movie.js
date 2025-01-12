import React from 'react'

const Movie = ({img,title,year}) => {
  return (
    <div className="movie">
      <img src= {img} alt="Poster" />
      <p>{title}</p>
      <p>Years: {year} </p>
    </div>
  )
}

export default Movie;
