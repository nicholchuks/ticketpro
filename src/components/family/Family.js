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

const Family = () => {
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
          slidesToShow: 3,
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
      <div className="nearyou_header">
        <h3>Family</h3>
        <Link to="#">
          <span className="display">See Sport</span>
          <span>See All Family</span>
        </Link>
      </div>

      <div className="nearyou_content">
        <div className="content_items">
          <ul>
            <Slider {...settings}>
              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/e73/30c9cdbd-72bb-4ce0-8f3e-6d783f09ce73_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                      />
                    </div>
                    <span>Ice Shows</span>
                    <h3>Disney On Ice presents Find Your Hero</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/342/938452ae-3056-4520-a2fb-a900fece7342_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                      />
                    </div>
                    <span>Ice Shows</span>
                    <h3>Disney On Ice presents into the Magic</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/fd5/84291ed9-2ccc-45c8-841d-d011c04c6fd5_1685001_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                      />
                    </div>
                    <span>NFL</span>
                    <h3>Cleverland Browns</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                      />
                    </div>
                    <span>Alternative Rock</span>
                    <h3>Coachella valley Music and Arts Festival</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/a21/0309f480-d48e-4952-83e0-e935bb59fa21_1709401_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                      />
                    </div>
                    <span>Ice Shows</span>
                    <h3>Disney on Ice presents Frozen and Encanto</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/654/b07e2979-e523-483b-a209-ba7c1c04a654_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                      />
                    </div>
                    <span>Ice Shows</span>
                    <h3>Disney on Ice presents Magic in the Stars</h3>
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

export default Family;
