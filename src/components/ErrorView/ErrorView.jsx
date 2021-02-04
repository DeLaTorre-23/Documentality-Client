import React, { Component } from "React";

export class ErrorView extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="center">
          <h2 className="ErrorTitle">Page Not Found</h2>
          <h3>We couldn't find what you were looking for.</h3>
        </section>
      </React.Fragment>
    );
  }
}
