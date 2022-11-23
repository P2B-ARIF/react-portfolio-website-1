import React from "react";
import "./Portfolio.css";
import img1 from "./../../assets/image2.jpeg";

const Portfolio = () => {
  let img =
    "https://cdn.dribbble.com/userupload/2849058/file/original-207a16d7c7d74cae1f1e4f60a0dace93.png?compress=1&resize=450x338&vertical=top";

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href={img} className="btn" target="__blank">
              Github
            </a>
            <a href={img} className="btn btn-primary" target="__blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href={img} className="btn" target="__blank">
              Github
            </a>
            <a href={img} className="btn btn-primary" target="__blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href={img} className="btn" target="__blank">
              Github
            </a>
            <a href={img} className="btn btn-primary" target="__blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href={img} className="btn" target="__blank">
              Github
            </a>
            <a href={img} className="btn btn-primary" target="__blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href={img} className="btn" target="__blank">
              Github
            </a>
            <a href={img} className="btn btn-primary" target="__blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href={img} className="btn" target="__blank">
              Github
            </a>
            <a href={img} className="btn btn-primary" target="__blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
