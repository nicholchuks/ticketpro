import "./entertainment.css";
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

const Entertainment = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="recentview sport">
      <h2 className="viewed_h2">ENTERTAINMENT GUIDES</h2>
      {/* <div className="nearyou_header">
        <h3>Family</h3>
        <Link to="#">
          <span className="display">See Sport</span>
          <span>See All Family</span>
        </Link>
      </div> */}

      <div className="nearyou_content">
        <div className="content_items">
          <ul>
            <Slider {...settings}>
              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/92f24a39-fa3d-47f8-8627-44b6f43d7a20_discover-nfl.jfif"
                        alt=""
                      />
                    </div>

                    <h3>NFL</h3>
                    <p>
                      Explore NFL ticket options from the Official Ticket
                      Exchange of the NFL.
                    </p>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/c86c3b3c-10ae-4522-8115-622f1eb3c60e_discover-nba.jfif"
                        alt=""
                      />
                    </div>
                    <h3>NBA</h3>
                    <p>
                      Find great tickets for your favorite NBA teams for
                      must-see games.
                    </p>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/0acea291-c558-4d31-8a72-b9a53501bff8_discover-nhl.jfif"
                        alt=""
                      />
                    </div>
                    <h3>NHL</h3>
                    <p>
                      Get verified tickets to watch your favorite NHL teams take
                      the ice.
                    </p>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/c75f5bc9-4709-45d9-8144-e708d8663543_DiscoverySports_MLS.jpg"
                        alt=""
                      />
                    </div>

                    <h3>MLS</h3>
                    <p>
                      Get Major League Soccer tickets for your favorite team.
                    </p>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/4ca04d4b-603a-42c9-86bc-6bc5c91aaed9_discover-mlb.jfif"
                        alt=""
                      />
                    </div>
                    <h3>MLB</h3>
                    <p>
                      Get Major League Baseball tickets for your favorite team.
                    </p>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://prismic-images.tmol.io/ticketmaster-tm-global/ecc6a899-0085-4526-ad0b-45175d04edf4_discover-broadway.jfif"
                        alt=""
                      />
                    </div>

                    <h3>On Broadway & on Tour</h3>
                    <p>
                      Musical and plays happening on Broadway and on the road.
                    </p>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/ce5/5a55729f-f567-40cd-92b0-8d64d1209ce5_1181471_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                      />
                    </div>

                    <span>Fairs & Festivals</span>
                    <h3>Magic of Lights</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/c/c0e/4d055cc1-d072-4c50-b15f-b65c785dcc0e_105341_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                      />
                    </div>
                    <span>Holiday</span>
                    <h3>Thankmas</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/840/4826ff22-5713-4a6a-ab66-9a18d7a8f840_1044671_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                      />
                    </div>
                    <span>Ice Shows</span>
                    <h3>Disney On Ice presents Mickey's Search Party</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/bb8/04e7c3d2-918b-46c4-8779-152e1b8abbb8_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                      />
                    </div>
                    <span>Other</span>
                    <h3>Jurassic World Live Tour</h3>
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

export default Entertainment;
