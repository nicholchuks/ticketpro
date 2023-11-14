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

const ArtTheatre = () => {
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
        <h3>Arts & Theatre</h3>
        <Link to="#">
          <span className="display">See Sport</span>
          <span>See All Arts & Theatre</span>
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
                        src="https://s1.ticketm.net/dam/a/342/938452ae-3056-4520-a2fb-a900fece7342_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>NIce Shows</span>
                    <h3>Disney On Ice presents into the Magic</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/c51/b53b4103-db5a-41e1-9a0e-9dd59fb5dc51_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Musical</span>
                    <h3>Hamilton (Chicago)</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/00f/b9aebee0-d1cb-4a5c-8e0e-0ca03fd4d00f_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Musical</span>
                    <h3>Hamilton (NY)</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Drama</span>
                    <h3>Harry Potter and the Cursed Child (NY)</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Musical</span>
                    <h3>Hamilton (Touring)</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/ecb/4009df73-beb5-4917-9f4a-6654d8613ecb_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Comedy</span>
                    <h3>Andrew Schulz</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src=" https://s1.ticketm.net/dam/a/962/f68bcf7d-e062-4d6f-affa-40ff15f73962_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Comedy</span>
                    <h3>Dave Chappelle</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/84a/4b4f2132-9467-43b2-aba5-7a5b5db6284a_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Comedy</span>
                    <h3>Gabriel Iglesias</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/b20/a8f3948b-f433-4090-b048-df31e7d03b20_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Comedy</span>
                    <h3>Nate Bargatze</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/68b/e6113bdd-2bdf-46d8-bfa9-c32b09b9768b_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>Comedy</span>
                    <h3>Adam Sandler</h3>
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

export default ArtTheatre;
