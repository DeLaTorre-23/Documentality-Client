import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./Slider.scss";

import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";

export class Slider extends Component {
  render() {
    const style = {
      color: "white",
    };

    const sliderLine = document.querySelector(".container-carousel");
    const sliderMovies = document.querySelectorAll(".movieCarousel");

    const rightArrow = document.getElementById("right-arrow");
    const leftArrow = document.getElementById("left-arrow");

    // ---- ---- ---- Event Listener for left-arrow ---- ---- ----
    leftArrow.addEventListener("click", () => {
      sliderLine.scrollRight += sliderLine.offsetWidth;
      const indicatorActive = document.querySelector(".pagination .active");
      if (indicatorActive.nextSibling) {
        indicatorActive.nextSibling.classList.add("active");
        indicatorActive.classList.remove("active");
      }
    });

    // ---- ---- ---- Event Listener for right-arrow ---- ---- ----
    rightArrow.addEventListener("click", () => {
      sliderLine.scrollLeft -= sliderLine.offsetWidth;

      const indicatorActive = document.querySelector(".pagination .active");
      if (indicatorActive.previousSibling) {
        indicatorActive.previousSibling.classList.add("active");
        indicatorActive.classList.remove("active");
      }
    });

    // ---- ---- ---- Event Listener for right-arrow ---- ---- ----
    const numPagination = Math.ceil(sliderMovies.length / 5);
    for (let i = 0; i < numPagination; i++) {
      const indicator = document.createElement("button");

      if (i === 0) {
        indicator.classList.add("active");
      }
      document.querySelector(".pagination"), appendChild(indicator);
      indicator.addEventListener("click", (e) => {
        sliderLine.scrollLeft = i * sliderLine.offsetWidth;
        document
          .querySelector(".pagination . active")
          .classList.remove("active");
        e.target.classList.add("active");
      });
    }

    // ---- ---- ---- Hover ---- ---- ----
    carousel.forEach((carousel) => {
      carousel.addEventListener("mouseenter", (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
          carousel.forEach((carousel) => carousel.classList.remove("hover"));
          element.classList.add("hover");
        }, 300);
      });
    });

    sliderLine.addEventListener("mouseleave", () => {
      carousel.forEach((carousel) => carousel.classList.remove("hover"));
    });

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
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img2} alt="" />
                </a>
              </div>
              <div className="movieCarousel">
                <a href="#">
                  <img className="img-carousel" src={img1} alt="" />
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
