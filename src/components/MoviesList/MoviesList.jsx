import React from "react";
import { connect } from "react-redux";

import VisibilityFilterInput from "../VisibilityFilterInput/VisibilityFilterInput";
import { MovieCardView } from "../MovieCardView/MovieCardView";

import "./MoviesList.scss";

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  return { visibilityFilter };
};

function MoviesList(props) {
  const { documentaries, visibilityFilter } = props;
  let filteredDocumentaries = documentaries;

  if (visibilityFilter !== "") {
    filteredDocumentaries = documentaries.filter((m) =>
      m.Title.includes(visibilityFilter)
    );
  }

  if (!documentaries) return <div className="MainView" />;

  return (
    <div className="MoviesList">
      <div className="filterWrap">
        <VisibilityFilterInput visibilityFilter={visibilityFilter} />
      </div>

      <div>
        {filteredDocumentaries.map((m) => (
          <MovieCardView key={m._id} documentaries={m} />
        ))}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(MoviesList);
