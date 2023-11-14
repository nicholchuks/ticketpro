import "./discover.css";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <BsArrowRight className="icon" />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <BsArrowLeft className="icon" />
      </button>
    </div>
  );
};

const Discover = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="recentview sport">
      <h2 className="viewed_h2">Discover More</h2>

      <div className="nearyou_content">
        <div className="content_items">
          <ul>
            <Slider {...settings}>
              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/d85d70d7-6c75-4d33-9397-31c368a094ce_EADP-Mobile-Header-NBA+Generic.jpg"
                        alt=""
                        width="291px"
                        height="164px"
                        className="discover_img"
                      />
                    </div>

                    <span>Sports</span>
                    <h3>Top NBA Games of the 2023-24 Season</h3>
                    <p>
                      We're rounded up some of the NBA's most exciting games for
                      the 2023-2024 season
                    </p>
                    <span className="blue">DISCOVER MORE</span>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/303c6a4c-5a3e-4b06-92c3-5a304362ab01_top-nhl-matchups.png"
                        alt=""
                        className="discover_img"
                        width="291px"
                        height="164px"
                      />
                    </div>

                    <span>Sports</span>
                    <h3>Top NHL Games of the 2023-24 Season</h3>
                    <p>
                      Check out our most-anticipated NHl games of the 2023-24
                      season.
                    </p>
                    <span className="blue">DISCOVER MORE</span>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="                        https://prismic-images.tmol.io/ticketmaster-tm-global/d5569f40-2313-45a7-ad1a-972d18db7e21_generic-football-1024x819.jpg"
                        alt=""
                        width="291px"
                        height="164px"
                        className="discover_img"
                      />
                    </div>

                    <span>Sports</span>
                    <h3>
                      Salute to Service: The NFL's Commitment to the Military...
                    </h3>
                    <p>
                      Learn more about the NFL's years-round commitment to honor
                      and empower service members, veterans and their family.
                    </p>
                    <span className="blue">DISCOVER MORE</span>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/f39aee27-1a9d-482c-b180-fc744042e040_world-series-champions-1024x819.jpg"
                        alt=""
                        width="291px"
                        height="164px"
                        className="discover_img"
                      />
                    </div>

                    <span>Sports</span>
                    <h3>The Last 10 MLB World Series Winners...</h3>
                    <p>
                      Take a trip down memory lane and revisit the last 10 teams
                      who were crowned the best in the MLB.
                    </p>
                    <span className="blue">DISCOVER MORE</span>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/ff228926-01eb-476a-b7a7-f6bff7a994d2_iStock_000043978748_concert-fans-1024x584.jpg"
                        alt=""
                        width="291px"
                        height="164px"
                        className="discover_img"
                      />
                    </div>

                    <span>General Info</span>
                    <h3>Ticketmaster Face Value Exchange</h3>
                    <p>
                      How Ticketmaster's Face Value Exchange offers fans the
                      flexibility to sell their tickets should their plans
                      change.
                    </p>
                    <span className="blue">DISCOVER MORE</span>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/f9df8212-227b-47ff-a132-47419af51c64_iStock_000011675169_broadway-1024x583.jpg"
                        alt=""
                        width="291px"
                        height="164px"
                        className="discover_img"
                      />
                    </div>

                    <span>Arts & Theatre</span>
                    <h3>Tips for Buying Broadway Theatre Tickets</h3>
                    <p>
                      Here are some tips to help you make sure you're purchasing
                      Broadway tickets you can trust.
                    </p>
                    <span className="blue">DISCOVER MORE</span>
                  </Link>
                </div>
              </li>
            </Slider>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Discover;
