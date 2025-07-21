import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#e6007e",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        right: "-15px",
        zIndex: 2,
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#e6007e",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        left: "-15px",
        zIndex: 2,
      }}
    />
  );
}

const visitors = [
  {
    name: "Saloni B.",
    age: "24yrs",
    height: "5'3",
    language: "Hindi",
    city: "Gwalior",
    image: "images/womenpic.jpg",
  },
  {
    name: "Saloni B.",
    age: "24yrs",
    height: "5'3",
    language: "Hindi",
    city: "Gwalior",
    image: "images/womenpic.jpg",
  },
  {
    name: "Saloni B.",
    age: "24yrs",
    height: "5'3",
    language: "Hindi",
    city: "Gwalior",
    image: "images/womenpic.jpg",
  },
  {
    name: "Saloni B.",
    age: "24yrs",
    height: "5'3",
    language: "Hindi",
    city: "Gwalior",
    image: "images/womenpic.jpg",
  },
  {
    name: "Saloni B.",
    age: "24yrs",
    height: "5'3",
    language: "Hindi",
    city: "Gwalior",
    image: "images/womenpic.jpg",
  },
  {
    name: "Saloni B.",
    age: "24yrs",
    height: "5'3",
    language: "Hindi",
    city: "Gwalior",
    image: "images/womenpic.jpg",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

const RecentVisitors = () => {
  return (
    <div className="recent-visitor mt-5 px-3 position-relative">
      <h6 className="mb-3">
        Recent Visitors{" "}
        <span className="badge bg-danger ms-2">{visitors.length}</span>
      </h6>

      <Slider {...settings}>
        {visitors.map((visitor, index) => (
          <div key={index}>
            <div className="profile-blk text-center px-2">
              <div className="img-profile mb-2">
                <img
                  src={visitor.image}
                  alt={visitor.name}
                  className="rounded-circle"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                />
              </div>
              <h6>{visitor.name}</h6>
              <p className="text-muted" style={{ fontSize: "14px" }}>
                {visitor.age}, {visitor.height}, {visitor.language},{" "}
                {visitor.city}
              </p>
              <div className="connect-btn mt-2">
                <a
                  href="#"
                  className="btn btn-sm"
                  style={{
                    backgroundColor: "#e6007e",
                    color: "#fff",
                    borderRadius: "20px",
                    padding: "6px 16px",
                    fontWeight: "bold",
                  }}
                >
                  Connect Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentVisitors;
