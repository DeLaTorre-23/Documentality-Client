import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./Slider.scss";

import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
export class Slider extends Component {
  render() {
    const style = {
      color: "withe",
    };
    return (
      <div className="slider-favoriteList slider-container">
        <div className="slider-title-controls">
          <h3>Favorite List</h3>
          <div className="pagination"></div>
        </div>
        <div className="main-container">
          <button
            role="button"
            id="left-arrow"
            style={style}
            className="left-arrow"
          >
            <i className="fas fa-angle-left"></i>
          </button>
          <div className="container-carousel">
            <div className="carousel">
              <div className="movie">
                <a href="#">
                  <img src="../../assets/images/img1.png" alt="" />
                </a>
              </div>
              <div className="movie">
                <a href="#">
                  <img src="../assets/images/img2.png" alt="" />
                </a>
              </div>
              <div className="movie">
                <a href="#">
                  <img src="../../assets/images/img1.png" alt="" />
                </a>
              </div>
              <div className="movie">
                <a href="#">
                  <img src="../../assets/images/img2.png" alt="" />
                </a>
              </div>
              <div className="movie">
                <a href="#">
                  <img src="../../assets/images/img1.png" alt="" />
                </a>
              </div>
              <div className="movie">
                <a href="#">
                  <img src="../../assets/images/img2.png" alt="" />
                </a>
              </div>
              <div className="movie">
                <a href="#">
                  <img src="../../../assets/images/img1.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <button role="button" id="right-arrow" className="right-arrow">
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
    );
  }
}
