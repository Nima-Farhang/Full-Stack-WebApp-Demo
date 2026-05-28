import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: true,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,

  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

function Owlview({ products }) {
  return (
    <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
      {products ? (
        products.map((product) => {
          const { id, image, price, brand, name, rating, numReviews } = product;
          return (
            <section key={id} className="dvMainSlider">
              <div className="card-group">
                <div className="card h-100">
                  <Link to={`/product/${id}`}>
                    <Card.Img src={image} />
                  </Link>

                  <div className="card-body">
                    <Link to={`/product/${id}`}>
                      <h5 className="card-title">{name}</h5>
                    </Link>
                    <p className="card-text">{brand}</p>

                    <Rating
                      value={rating}
                      text={`${numReviews} reviews`}
                      color={"#f8e825"}
                    />

                    <p className="card-text">Price:{price}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      ) : (
        <h1>"SLIDE NOT FOUND"</h1>
      )}
    </OwlCarousel>
  );
}

export default Owlview;
