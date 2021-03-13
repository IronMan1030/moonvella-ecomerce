import React, { useEffect } from "react";
import CategoryCard from "../../../components/CategoryCard/CategoryCard";
import FeaturedProductCard from "../../../components/FeaturedProductCard/FeaturedProductCard";
import Button from "../../../components/Button/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LOGIN } from "../../../settings/constants";
import "./Home.scss";
function Home() {
  useEffect(() => {}, []);

  const categories = [
    { url: "/images/blog/blog-2.jpg", detail: "Furniture" },
    { url: "/images/blog/blog-3.jpg", detail: "Home-Outdoor & Garden" },
    { url: "/images/blog/blog-4.jpg", detail: "Fresh looks for your home" },
    { url: "/images/blog/blog-5.jpg", detail: "Men's must-have styles" },
  ];
  const products = [
    { url: "/images/blog/blog-2.jpg" },
    { url: "/images/blog/blog-3.jpg" },
    { url: "/images/blog/blog-4.jpg" },
    { url: "/images/blog/blog-5.jpg" },
    { url: "/images/blog/blog-6.jpg" },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const handleClickSingIn = () => {
    window.location.href = LOGIN;
  };
  return (
    <div className="container mt-5 home-wrapper">
      <div className="featured-category-block">
        <h5>What’s popular right now</h5>
        <div className="row">
          {categories.map((cate, index) => {
            return (
              <div className="col-md-3" key={index}>
                <CategoryCard imgUrl={cate.url} detail={cate.detail} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="featured-category-block">
        <h5>Popular in Buy and Sell</h5>
        <div className="row">
          {categories.map((cate, index) => {
            return (
              <div className="col-md-3" key={index}>
                <CategoryCard imgUrl={cate.url} detail={cate.detail} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="featured-product-block">
        <h5>Most-loved purses</h5>
        <Carousel
          responsive={responsive}
          draggable={false}
          ssr={true}
          infinite={true}
          containerClass="carousel-container"
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {products.map((product, index) => {
            return <FeaturedProductCard key={index} imgUrl={product.url} />;
          })}
        </Carousel>
      </div>
      <div className="signIn-marketing-block">
        <h3>Mevella’s better when you’re a member</h3>
        <p>See more relevant listings, find what you’re looking for quicker, and more!</p>
        <Button onClick={handleClickSingIn} type="button">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Home;
