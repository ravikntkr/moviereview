import { useState } from "react";
// Styling
import "./App.css";
import "./Responsive.css";
// Components
import Card from "./Components/Card";
import Movieinfo from "./Components/Movieinfo";
import logo from "./logo.png";
import axios from "axios";
export const myApi = "df0ef981";

function App() {
  const [search, setSearch] = useState();
  const [searchTimeOut, setSearchTimeOut] = useState();
  const [searchList, setSearchList] = useState([]);
  const [selectMovie, setSelectMovie] = useState();

  const fetchData = async (searchStr) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${searchStr}&apikey=${myApi}`
    );
    setSearchList(response.data.Search);
  };

  const onTextChange = (event) => {
    clearTimeout(searchTimeOut);
    setSearch(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    setSearchTimeOut(timeout);
  };
  return (
    <>
      <div className="mainContainer">
        <div className="headerContainer">
          <header>
            <div className="headerLeft">
              <img src={logo} alt="logo" className="logo" />
            </div>
            {/* social icons */}
            <ul className="headerRight">
              <li className="socialIcons">
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li className="socialIcons">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="socialIcons">
                <i className="fa-brands fa-twitter"></i>
              </li>
            </ul>
          </header>
        </div>

        {/* Search bar */}
        <div className="searchArea">
          {/* onSubmit={getMovie} */}
          <form action="">
            <div className="inputBox">
              <i className="fa-solid fa-magnifying-glass searchIcon"></i>
              <input
                type="text"
                placeholder="Enter Movie name"
                // value={text}
                onChange={onTextChange}
              />
            </div>
            {/* <div className="submitBtn">
              <button type="submit" className="submit">
                Search
              </button>
            </div> */}
          </form>
        </div>
      </div>
      {selectMovie && (
        <Movieinfo selectMovie={selectMovie} setSelectMovie={setSelectMovie} />
      )}
      <div className="searchResult">
        <div className="movieContainer">
          {searchList?.length ? (
            searchList.map((movie, index) => (
              <Card key={index} movie={movie} setSelectMovie={setSelectMovie} />
            ))
          ) : (
            <div className="bulb">
              <p className="errorSearch">No result found 🤔</p>
            </div>
          )}
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <p className="author">
          Made by{" "}
          <a href="https://www.linkedin.com/in/ravikantkr/" target={"_blank"}>
            Ravikant K.
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
