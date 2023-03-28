import React from "react";

const Card = (props) => {
  const { Poster, imdbID } = props.movie;
  return (
    <div className="card" onClick={() => props.setSelectMovie(imdbID)}>
      <img src={Poster} alt="" className="cardImage" />
    </div>
  );
};

export default Card;
