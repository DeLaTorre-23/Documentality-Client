import React from "react";

import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import { setFilter } from "../../actions/actions";

function VisibilityFilterInput(props) {
  return (
    <Form.Control
      className="filterInput"
      onChange={(e) => props.setFilter(e.target.value)}
      value={props.visibilityFilter}
      placeholder="Filter a documentary"
    />
  );
}

export default connect(null, { setFilter })(VisibilityFilterInput);
