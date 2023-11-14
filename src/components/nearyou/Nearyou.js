import "./nearyou.css";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import { GrFormPrevious } from "react-icons/gr";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <BsArrowRight className="icon" />
        {/* <MdNavigateNext className="icon" /> */}
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
        {/* <GrFormPrevious className="icon" /> */}
      </button>
    </div>
  );
};

const Nearyou = () => {
  const settings = {
    dots: false,
    // infinite: true,
    infinite: false,
    speed: 1000,
    // speed: 0,
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
    <section className="recentview nearyou">
      <h2 className="viewed_h2">Popular Near You</h2>
      <div className="nearyou_header">
        <h3>Concerts</h3>
        <Link to="#">
          <span className="display">See All</span>
          <span>See All Concerts</span>
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
                        src="https://s1.ticketm.net/dam/a/4c8/cee4224d-ed9f-4267-81a4-61be2a1f44c8_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Pop</span>
                    <h3>P!NK</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/d3e/8de85b2b-e7ac-4130-8e57-bb927919ed3e_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Pop</span>
                    <h3>U2</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/71d/ad124f24-1532-4dae-937f-d32c3340471d_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Pop</span>
                    <h3>Eagle</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/299/a5f71942-e2eb-4ee0-9bcb-41ca10dfd299_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Pop</span>
                    <h3>Walmart Presents: Heroes & Headliers</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/1d1/47cc9b10-4904-4dec-b1d6-539e44a521d1_1825531_RETINA_PORTRAIT_16_9.jpg?"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Country</span>
                    <h3>Shania Twain</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src=" //s1.ticketm.net/dam/a/ad3/335352d0-e124-42d1-994e-269015f98ad3_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>R&B</span>
                    <h3>Commodores</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/0f6/599f3957-71a6-4749-8f07-db7c14da80f6_1437941_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Country</span>
                    <h3>Lady A</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/9d7/d6a4ea2e-7985-42a5-9019-50d64d22f9d7_603461_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>R&B</span>
                    <h3>Spinners</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/079/02b389f9-7a55-411c-8c0b-da6a0b9ce079_1161071_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Country</span>
                    <h3>The Bull's Santa Jam</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/7d5/97b67038-f926-4676-be88-ebf94cb5c7d5_1802151_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Pop</span>
                    <h3>Ed Sheeran</h3>
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

export default Nearyou;
