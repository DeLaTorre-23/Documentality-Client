import React, { Component } from "React";

import "./FooterView.scss";

export class FooterView extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer">
          <p>
            &copy; <strong>DOC</strong>umentality
          </p>
        </div>
      </footer>
    );
  }
}
