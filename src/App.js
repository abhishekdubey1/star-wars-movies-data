import React, { useEffect, useState } from "react";
import axios from "axios";

// import useToggle from "./hooks/useToggle";
// import useFormState from "./hooks/useFormState";
import "./styles.css";

export default function App() {
  // const [isHappy, toggleIsHappy] = useToggle(true);
  // const [isHealthy, toggleIsHealthy] = useToggle(true);

  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  // const [name, setName, resetName] = useFormState("");

  // useEffect(() => {
  //   console.log("isHappy changed");
  // }, [isHappy]);
  // useEffect(() => {
  //   console.log("isHealthy changed");
  // }, [isHealthy]);

  useEffect(() => {
    function fetchData() {
      fetch(`https://swapi.dev/api/films/${number}/`)
        .then(function (response) {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }

          // Examine the text in the response
          response.json().then(function (data) {
            setMovie(data);
            console.log(data);
          });
        })
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
        });
    }
    fetchData();
  }, [number]);

  return (
    <div className="App">
      <div className="movie-selector">
        <h1>Pick a movie</h1>
        <h4>The StarShip Movie Number you chose is {number}</h4>
        <select value={number} onChange={(e) => setNumber(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>
      <div className="movie-data">
        <h3 id="movie-name">{movie.title}</h3>
        <h5 id="movie-episode">Episode: {movie.episode_id}</h5>
        <p id="movie-opening">{movie.opening_crawl} </p>
        <h6 id="movie-makers">
          This movie was directed by {movie.director} and produced by{" "}
          {movie.producer}
        </h6>
      </div>
      {/* {isHappy ? (
        <h3 onClick={toggleIsHappy}>happy</h3>
      ) : (
        <h3 onClick={toggleIsHappy}>sad</h3>
      )}
      {isHealthy ? (
        <h3 onClick={toggleIsHealthy}>Healthy</h3>
      ) : (
        <h3 onClick={toggleIsHealthy}>Unhealthy</h3>
      )}

      <h4 onClick={resetName}>{name}</h4>
      <input value={name} placeholder="enter your name" onChange={setName} /> */}
    </div>
  );
}
