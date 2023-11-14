import "./sport.css";
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

const Sport = () => {
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
        <h3>Sports</h3>
        <Link to="#">
          <span className="display">See Sport</span>
          <span>See All Sports</span>
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
                        src="https:////s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>NBA</span>
                    <h3>Golden State Warriors</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/c62/0636ff21-e369-4b8c-bee4-214ea0a81c62_1339761_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>NBA</span>
                    <h3>Phoenix Suns</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>NBA</span>
                    <h3>Atlanta Hawks</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/776/6e685963-bebc-4e28-80e5-db72b4915776_1339921_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>NBA</span>
                    <h3>Memphis Grizzlies</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/022/6fdae8b5-6fa8-4793-8829-edef2a77a022_1339671_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>NBA</span>
                    <h3>Sacramento Kings</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/512/fb748312-e0a4-455f-95e1-6fda0c1c1512_1339851_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>NBA</span>
                    <h3>Orlando Mafgic</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/a01/dc895acf-863e-4f90-9316-98302e99fa01_1761311_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>NBA</span>
                    <h3>Utah Jazz</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/0b3/b24190d1-e7d1-4435-81b4-f45b5943b0b3_1339891_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>NBA</span>
                    <h3>Milwaukee</h3>
                  </Link>
                </div>
              </li>

              <li>
                <div className="content_item_main">
                  <Link to="#">
                    <div className="content_item_img img_container">
                      <img
                        src="https://s1.ticketm.net/dam/a/593/de5707a0-fc3b-4ad8-bdfc-4f880b488593_RETINA_PORTRAIT_16_9.jpg"
                        alt=""
                        width="608px"
                        height="342px"
                      />
                    </div>
                    <span>NBA</span>
                    <h3>Brooklyn Nets</h3>
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
                    <span>NBA</span>
                    <h3>Portland Trail Blazers</h3>
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

export default Sport;
