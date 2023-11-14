import { Link } from "react-router-dom";
import "./hero.css";
import RecentView from "../recentview/RecentView";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <div className="banner_content">
          <h3>Matt Rife</h3>
          <p>Comedy</p>
          <Link>
            <span>Find Tickets</span>
          </Link>
        </div>
      </div>

      <div className="hero_card">
        <div className="hero_card_left">
          <div className="hero_card_left_main">
            <div className="hero_left_content">
              <div className="img_container">
                <img
                  src="https://s1.ticketm.net/dam/a/a21/0309f480-d48e-4952-83e0-e935bb59fa21_1709401_TABLET_LANDSCAPE_16_9.jpg"
                  alt="hero img"
                  width="624px"
                  height="351px"
                  className="hero_img"
                />
              </div>
              <div className="hero_main_content">
                <p>Fronzen & Encanto</p>
                <h3>Disney on ice presents</h3>
              </div>
            </div>

            <div className="hero_left_content">
              <div className="img_container">
                <img
                  src="https://s1.ticketm.net/dam/a/cca/e73070ad-a63b-4ffd-8aaa-852506c16cca_TABLET_LANDSCAPE_16_9.jpg"
                  alt="hero img"
                  width="624px"
                  height="351px"
                  className="hero_img"
                />
              </div>
              <div className="hero_main_content">
                <p>Rock</p>
                <h3>Noah Kahan</h3>
              </div>
            </div>

            <div className="hero_left_content">
              <div className="img_container">
                <img
                  src="https://s1.ticketm.net/dam/a/7c6/408d2882-d61f-435b-9a11-e79e399e37c6_SOURCE"
                  alt="hero img"
                  width="624px"
                  height="351px"
                  className="hero_img"
                />
              </div>
              <div className="hero_main_content">
                <p>Comedy</p>
                <h3>Jeff Dunham</h3>
              </div>
            </div>

            <div className="hero_left_content">
              <div className="img_container">
                <img
                  src="https://s1.ticketm.net/dam/a/5e6/52ae20d9-9b8c-4cd3-8840-d692652805e6_SOURCE"
                  alt="hero img"
                  width="624px"
                  height="351px"
                  className="hero_img"
                />
              </div>
              <div className="hero_main_content">
                <p>Rock</p>
                <h3>Pentatonix</h3>
              </div>
            </div>
          </div>
          <RecentView />
        </div>
        <div className="hero_card_right">
          <div className="hero_right_content">
            <div className="hero_right_content_1"></div>
            <div className="advertisement">Advertisement</div>
          </div>
          <section className="featured">
            <h2 className="viewed_h2">Featured</h2>
            <ul className="featured_items">
              <li>
                <Link to="#">
                  <div className="featured_items_img">
                    <img
                      src="https://prismic-images.tmol.io/ticketmaster-tm-global/19cfcdd7-5ab6-463b-b79a-2ba789637613_Hotels1.png"
                      alt="feature_img"
                      width="350px"
                      height="169px"
                    />
                  </div>
                  <h3 className="featured_content">Hotels</h3>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <div className="featured_items_img">
                    <img
                      src="https://prismic-images.tmol.io/ticketmaster-tm-global/f0113677-a22e-4487-8d62-72fd2c95d97c_Discovery-Ticket-Deals-Tile.jpg"
                      alt="feature_img"
                      width="350px"
                      height="169px"
                    />
                  </div>
                  <h3 className="featured_content">Ticket Deals</h3>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <div className="featured_items_img">
                    <img
                      src="https://prismic-images.tmol.io/ticketmaster-tm-global/57548281-056e-406f-a13d-dce8ce7f9fbd_Discovery-Tile-Gift-Cards.jpg"
                      alt="feature_img"
                      width="350px"
                      height="169px"
                    />
                  </div>
                  <h3 className="featured_content">Give the Gift of Live</h3>
                </Link>
              </li>

              <li>
                <Link to="#">
                  <div className="featured_items_img">
                    <img
                      src="https://prismic-images.tmol.io/ticketmaster-tm-global/a2203df7-d78d-4879-b52f-c768656b2dac_Discovery-Tile-Sell-Page.jpg"
                      alt="feature_img"
                      width="350px"
                      height="169px"
                    />
                  </div>
                  <h3 className="featured_content">Sell on Ticketmaster</h3>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
