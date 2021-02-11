import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllDirectorsView() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    function getAllDirectors() {
      axios("https://documentality.herokuapp.com/directors", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => {
          setDirectors(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getAllDirectors();
  });

  return (
    <div className="directorTitleWrap">
      <h3>Directors Info</h3>
      <hr />

      <div>
        {directors.map((elm, idx) => (
          <div key={idx} className="titleElement">
            <Link to={`/directors/${elm.Name}`} className="titleElement">
              {elm.Name}
            </Link>
            {/* <p>{elm.Bio}</p> */}
          </div>
        ))}
      </div>
      <hr />
      <Link className="btn btn-danger btnBack" to={`/`}>
        Go Back Me
      </Link>
    </div>
  );
}
