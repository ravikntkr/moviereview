import React, { useEffect, useState } from "react";
import Axios from "axios";
import { myApi } from "../App";
import axios from "axios";

const Movieinfo = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectMovie } = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectMovie}&apikey=${myApi}`)
      .then((response) => setMovieInfo(response.data));
  }, [selectMovie]);
  return (
    <>
      {movieInfo ? (
        <>
          <div className="movieInfoContainer">
            <div className="movieInfomain">
              <div className="movieInfoLeft">
                <img src={movieInfo?.Poster} alt="" className="infoimg" />
              </div>
              <div className="movieInfoRight">
                {/* Movie title */}
                <h1 className="movieTitle">{movieInfo?.Title}</h1>
                {/* Released */}
                <p className="released movieInfoSmtxt">
                  <span className="highlightTxt">{movieInfo?.Released}</span>
                </p>
                {/* Movie genre */}
                <p className="genre movieInfoSmtxt">{movieInfo?.Genre}</p>
                {/* Movie bio */}
                <p className="plot movieInfoSmtxt">{movieInfo?.Plot}</p>
                {/* Type */}
                <p className="type movieInfoSmtxt">
                  Type&nbsp;{" "}
                  <span className="highlightTxt"> {movieInfo?.Type}</span>
                </p>
                {/* Director */}
                <p className="director movieInfoSmtxt">
                  Director&nbsp;{" "}
                  <span className="highlightTxt">{movieInfo?.Director}</span>
                </p>
                {/* Writer */}
                <p className="writer movieInfoSmtxt">
                  Writer&nbsp;{" "}
                  <span className="highlightTxt">{movieInfo?.Writer}</span>
                </p>
                {/* Stars/actors */}
                <p className="actors movieInfoSmtxt">
                  Actors&nbsp;{" "}
                  <span className="highlightTxt">{movieInfo?.Actors}</span>
                </p>

                {/* language */}
                <p className="language movieInfoSmtxt">
                  Language&nbsp;{" "}
                  <span className="highlightTxt">{movieInfo?.Language}</span>
                </p>
                {/* Rating */}
                <p className="rating movieInfoSmtxt">
                  IMDb Rating&nbsp;{" "}
                  <span className="highlightTxt">
                    ⭐{movieInfo?.imdbRating}
                  </span>
                </p>
                {/* production */}
                <p className="production movieInfoSmtxt">
                  Production&nbsp;{" "}
                  <span className="highlightTxt">{movieInfo?.Production}</span>
                </p>
              </div>
              <div className="closeBtn">
                <p className="close" onClick={() => props.setSelectMovie()}>
                  <i className="fa-solid fa-xmark"></i>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loadingbx">
          <div class="leap-frog">
            <div class="leap-frog__dot"></div>
            <div class="leap-frog__dot"></div>
            <div class="leap-frog__dot"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movieinfo;
