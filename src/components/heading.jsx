import React from "react";
import ButtonMain from "./button";


function Heading({ images }) {
  return (
    <section class="body-slide">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h2 class="heading-text">Take your investing to the next level</h2> 
            <p>Invest with ease using crypto from all round the world</p>
            <ButtonMain
              classname="heading-button"
              content="Discover platform"
            />
          </div>
          <div class="carousel-item">
            <h2 class="heading-text">Invest For Future In Best Platform</h2>
            <p>Earn passive income up tp 20% per annum paid in bits daily</p>
            <ButtonMain classname="heading-button" content="Get started" />
          </div>
          <div class="carousel-item">
            <h2 class="heading-text">Safe and secure investment company</h2>
            <p class="Paragragh-text">
              Pick the right protection for your finacial growth
            </p>
            <ButtonMain classname="heading-button" content="Open account" />
          </div>
        </div>
      </div>
      <div class="carousel-indicators slide-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </section>
  );
}

export default Heading;
