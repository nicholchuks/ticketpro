import ArtTheatre from "../art_theatre/ArtTheatre";
import Discover from "../discover/Discover";
import Entertainment from "../entertainment/Entertainment";
import Family from "../family/Family";
import Nearyou from "../nearyou/Nearyou";
import Sport from "../sport/Sport";
import "./recentview.css";
import { Link } from "react-router-dom";

const RecentView = () => {
  return (
    <section className="recentview">
      <h2 className="viewed_h2">Recently Viewed</h2>
      <div className="recent_viewed_content">
        <Link to="#">
          <div className="recent_main_content">
            <img
              src="https://s1.ticketm.net/dam/a/c26/f3bc3686-a6c2-4324-a6cb-18ab2441ac26_1339991_RETINA_PORTRAIT_3_2.jpg"
              alt=""
              width="32px"
              height="32px"
            />

            <span>Golden State Warriors</span>
          </div>
          <button className="recent_btn">
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m23 21.89-1.06 1.05-9.91-9.89L2.06 23 1 21.95 10.97 12 1 2.05 2.06 1l9.97 9.95 9.91-9.89L23 2.11 13.09 12 23 21.89Z"></path>
            </svg>
          </button>
        </Link>

        <Link to="#">
          <div className="recent_main_content">
            <img
              src="https://s1.ticketm.net/dam/a/4c8/cee4224d-ed9f-4267-81a4-61be2a1f44c8_RETINA_PORTRAIT_3_2.jpg"
              alt=""
              width="32px"
              height="32px"
            />
            <span>Pink</span>
          </div>
          <button className="recent_btn">
            <svg
              class="BaseSvg-sc-yh8lnd-0 CrossIcon___StyledBaseSvg-sc-4hkemq-0 ckLyyv sc-48yh47-1 dNvwYw"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m23 21.89-1.06 1.05-9.91-9.89L2.06 23 1 21.95 10.97 12 1 2.05 2.06 1l9.97 9.95 9.91-9.89L23 2.11 13.09 12 23 21.89Z"></path>
            </svg>
          </button>
        </Link>

        <Link to="#">
          <div className="recent_main_content">
            <img
              src="https://s1.ticketm.net/dam/a/4ff/f702dc0a-f02e-4ad5-8c78-ab18c737a4ff_RETINA_PORTRAIT_3_2.jpg"
              alt=""
              width="32px"
              height="32px"
            />
            <span>Matt Rife</span>
          </div>
          <button className="recent_btn">
            <svg
              class="BaseSvg-sc-yh8lnd-0 CrossIcon___StyledBaseSvg-sc-4hkemq-0 ckLyyv sc-48yh47-1 dNvwYw"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m23 21.89-1.06 1.05-9.91-9.89L2.06 23 1 21.95 10.97 12 1 2.05 2.06 1l9.97 9.95 9.91-9.89L23 2.11 13.09 12 23 21.89Z"></path>
            </svg>
          </button>
        </Link>

        <Link to="#">
          <div className="recent_main_content">
            <img
              src="//s1.ticketm.net/dam/a/281/6526035c-aba4-4ee7-883d-771b98fc5281_1708421_RETINA_PORTRAIT_3_2.jpg"
              alt=""
              width="32px"
              height="32px"
            />
            <span>Harry Potter and the Cursed Child (NY)</span>
          </div>
          <button className="recent_btn">
            <svg
              class="BaseSvg-sc-yh8lnd-0 CrossIcon___StyledBaseSvg-sc-4hkemq-0 ckLyyv sc-48yh47-1 dNvwYw"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m23 21.89-1.06 1.05-9.91-9.89L2.06 23 1 21.95 10.97 12 1 2.05 2.06 1l9.97 9.95 9.91-9.89L23 2.11 13.09 12 23 21.89Z"></path>
            </svg>
          </button>
        </Link>

        <Link to="#">
          <div className="recent_main_content">
            <img
              src="https://s1.ticketm.net/dam/a/ae2/5beb62d8-2c29-4c5c-aa7d-c7513e229ae2_1340121_RETINA_PORTRAIT_3_2.jpg"
              alt=""
              width="32px"
              height="32px"
            />
            <span>Atlanta Hawks</span>
          </div>
          <button className="recent_btn">
            <svg
              class="BaseSvg-sc-yh8lnd-0 CrossIcon___StyledBaseSvg-sc-4hkemq-0 ckLyyv sc-48yh47-1 dNvwYw"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m23 21.89-1.06 1.05-9.91-9.89L2.06 23 1 21.95 10.97 12 1 2.05 2.06 1l9.97 9.95 9.91-9.89L23 2.11 13.09 12 23 21.89Z"></path>
            </svg>
          </button>
        </Link>
      </div>

      <div className="advert">
        <div className="advert_content">
          <div className="advert_img">
            <img
              src="https://tpc.googlesyndication.com/simgad/13772801380455299196"
              width="728px"
              height="90px"
              alt=""
            />
          </div>
          <p className="advert_p">Advertisement</p>
        </div>
      </div>
      <Nearyou />
      <Sport />
      <ArtTheatre />
      <Family />
      <Entertainment />
      <Discover />
    </section>
  );
};

export default RecentView;
