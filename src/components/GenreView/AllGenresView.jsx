import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllGenresView() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    function getAllGenres() {
      axios("https://documentality.herokuapp.com/genres", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => {
          setGenres(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getAllGenres();
  });
  return (
    <div>
      <div className="genreTitleWrap">
        <h3>Genres Info</h3>
        <hr />
      </div>
      <div>
        {genres.map((elm, idx) => (
          <div key={idx}>
            <p className="titleElement">{elm.Name}</p>
            <p>{elm.Description}</p>
          </div>
        ))}
        <hr />
        <Link className="btn btn-danger btnBack" to={`/`}>
          Go Back Me
        </Link>
      </div>
    </div>
  );
}
