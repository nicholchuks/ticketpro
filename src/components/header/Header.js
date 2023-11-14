import "./header.css";
import { NavLink } from "react-router-dom";
// import { CiLocationArrow1 } from "react-icons/ci";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav_left">
            <div className="menu_toggle">
              <HiOutlineMenuAlt2 className="toggle_btn" />
            </div>
            <NavLink to="/">
              <div className="logo">
                <svg
                  class="sc-13cul6w-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 135 24"
                  fill="#fff"
                >
                  <path d="M41.57 6.27c-4.02 0-6.97 3.63-6.97 7.4 0 3.62 2.38 5.32 5.9 5.32 1.3 0 2.66-.3 3.9-.68l.4-2.5a8.98 8.98 0 0 1-3.75.86c-2.04 0-3.23-.71-3.39-2.62l-.02-.34v-.1a6.46 6.46 0 0 1 .52-2.41c.61-1.55 1.48-2.62 3.36-2.62 1.33 0 2.02.73 2.02 2.03 0 .28-.02.54-.07.83H39.1a7.57 7.57 0 0 0-.34 2.17h7.5c.2-.9.32-1.8.32-2.72 0-3.09-2-4.62-5.02-4.62zm-5.4.28h-4.15l-4.44 4.41h-.05L29.65 1h-3.19l-3.78 17.7h3.11l1.38-6.44h.05l3.16 6.45h3.6l-3.7-6.62 5.88-5.54zm15.16 8.8a5 5 0 0 1 .15-1.18l1.16-5.3h2.86l.5-2.32h-2.86l.79-3.61-3.42 1.1-.55 2.5h-2.3l-.51 2.32h2.3l-.9 4.11c-.2.97-.4 1.89-.4 2.83 0 2.34 1.52 3.2 3.69 3.2.54 0 1.16-.18 1.7-.3l.56-2.45a4.28 4.28 0 0 1-1.55.28c-.72 0-1.22-.44-1.22-1.18zm-47.14 0c0-.47.07-.9.14-1.18l1.16-5.3h2.86l.5-2.32H5.99l.79-3.61-3.43 1.1-.54 2.5H.5L0 8.87h2.3l-.9 4.11c-.21.97-.4 1.89-.4 2.83C1 18.14 2.52 19 4.69 19c.54 0 1.16-.18 1.7-.3l.56-2.45a4.27 4.27 0 0 1-1.55.28c-.71 0-1.22-.44-1.22-1.18zm12.48-1.98c0-2.29 1.42-4.65 3.97-4.65.88 0 1.7.21 2.33.62l.78-2.6a11.4 11.4 0 0 0-3.19-.47c-4.4 0-7.22 3.23-7.22 7.48 0 3.14 2.04 5.24 5.2 5.24 1.05 0 2.1-.1 3.07-.57l.36-2.5c-.83.4-1.81.61-2.6.61-2.18 0-2.7-1.58-2.7-3.16zM14.5 1.31h-3.19l-.67 3.02h3.2l.66-3.02zm-4.36 5.24L7.54 18.7h3.19l2.61-12.16h-3.19zm72.06-.27c-1.43 0-2.81.26-4.17.73l-.45 2.53a9.48 9.48 0 0 1 4.02-.95c1.12 0 2.45.35 2.45 1.58 0 .36 0 .71-.1 1.04h-1.11c-3 0-7.52.3-7.52 4.32 0 2.24 1.57 3.47 3.78 3.47 1.76 0 2.86-.78 3.95-2.15h.05l-.33 1.87h2.68c.29-2.3 1.5-7.06 1.5-8.7 0-2.85-2.3-3.74-4.75-3.74zM80 16.68c-.82 0-1.62-.42-1.62-1.27 0-2.05 2.56-2.31 4.1-2.31h1.13c-.5 1.96-1.24 3.58-3.61 3.58zM71.6 6.27c-1.72 0-3.5.73-4.31 2.31h-.05c-.17-1.47-1.67-2.31-3.12-2.31-1.5 0-2.9.66-3.75 1.9h-.05l.29-1.62h-2.98l-.26 1.35-2.23 10.8h3.18l1.26-5.78c.4-1.63 1-4.2 3.16-4.2.82 0 1.5.57 1.5 1.46 0 .74-.23 1.87-.4 2.6l-1.28 5.93h3.18L67 12.92c.4-1.65.95-4.2 3.17-4.2.8 0 1.5.57 1.5 1.46 0 .74-.24 1.87-.4 2.6l-1.3 5.93h3.2l1.27-5.81c.27-1 .55-2.22.55-3.3a3.4 3.4 0 0 0-3.4-3.33zm41.24 0c-4.02 0-6.97 3.63-6.97 7.4 0 3.62 2.38 5.32 5.9 5.32 1.3 0 2.66-.3 3.9-.68l.4-2.5a9 9 0 0 1-3.75.86c-2.04 0-3.23-.71-3.38-2.62-.01-.12-.03-.22-.03-.34v-.1c.02-.84.2-1.66.53-2.41.6-1.55 1.47-2.62 3.35-2.62 1.33 0 2.02.73 2.02 2.03 0 .28-.02.54-.07.83h-4.36a7.57 7.57 0 0 0-.34 2.17h7.5c.2-.9.32-1.8.32-2.72 0-3.09-2-4.62-5.02-4.62zm10.18 2.57h-.05l.43-2.3h-3.05l-.28 1.64-2.19 10.53h3.19l1.14-5.46c.4-1.96 1.5-3.96 3.76-3.96.4 0 .85.07 1.2.19l.68-3.1a4.9 4.9 0 0 0-1.22-.11c-1.47 0-3.04 1.25-3.61 2.57zm-20.87 6.51c0-.47.07-.9.14-1.18l1.17-5.3h2.85l.5-2.32h-2.85l.78-3.61-3.42 1.1-.55 2.5h-2.3l-.5 2.32h2.3l-.9 4.11c-.22.97-.4 1.89-.4 2.83 0 2.34 1.52 3.2 3.68 3.2.55 0 1.17-.18 1.71-.3l.55-2.45c-.4.17-.98.28-1.55.28-.71 0-1.21-.44-1.21-1.18zm-13.31-5.21c0 3.04 4.13 3.23 4.13 5.2 0 .98-1.12 1.33-2.19 1.33a6.01 6.01 0 0 1-3.04-.94l-.7 2.53a8.8 8.8 0 0 0 3.74.73c2.74 0 5.52-.95 5.52-4.1 0-2.98-4.14-3.55-4.14-5.08 0-.97 1.19-1.23 2.14-1.23.9 0 1.79.26 2.13.44l.69-2.38a13.27 13.27 0 0 0-2.98-.37c-2.53 0-5.3 1.01-5.3 3.87zm43.23-3.86A2.74 2.74 0 0 0 129.33 9c0 1.5 1.23 2.72 2.74 2.72A2.73 2.73 0 0 0 134.81 9c0-1.5-1.23-2.72-2.74-2.72zm.01 5.04A2.23 2.23 0 0 1 129.86 9c0-1.3.95-2.31 2.22-2.31 1.26 0 2.21 1.01 2.21 2.31s-.95 2.32-2.2 2.32zm1.28-3.02c0-.6-.36-.9-1.1-.9h-1.23v3.2h.52V9.17h.44l.9 1.41h.55l-.91-1.4c.5 0 .83-.38.83-.89zm-1.81.48V7.8h.62c.34 0 .66.1.66.47 0 .41-.26.5-.66.5h-.62z"></path>
                </svg>
              </div>
            </NavLink>

            <div className="nav_links">
              <ul>
                <li>
                  <NavLink to="/Concerts">Concerts</NavLink>
                </li>
                <li>
                  <NavLink to="/Sport">Sports</NavLink>
                </li>
                <li>
                  <NavLink to="/Arts & Theatre">Arts & Theatre</NavLink>
                </li>
                <li>
                  <NavLink to="/Family">Family</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav_right">
            <button>
              <svg
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                aria-hidden="true"
                focusable="false"
                class="BaseSvg"
              >
                <path d="M8 6.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM12 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm6.49 12H5.43L1 16.9V23h22v-6.12L18.49 13ZM2.5 17.58 6 14.5h11.93l3.57 3.07v3.93h-19v-3.92Z"></path>
              </svg>
              <span>Sign In/Register</span>
            </button>
          </div>
        </nav>
      </header>
      <div className="headerbottom">
        <div className="content">
          <form class="form">
            <div className="main_content">
              <div className="main_content_1">
                <svg
                  class="svg_main"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m3.17 12.12 5.82 2.5.4.4 2.5 5.81 8.7-17.43-17.42 8.72ZM1 11.49 21.97 1 23 2.03 12.51 23l-1.39-.04L8.1 15.9l-7.06-3.02-.04-1.4Z"></path>
                </svg>
                <input
                  id="city"
                  name="city"
                  className="city input"
                  type="text"
                  placeholder="City or Zip Code"
                />
              </div>
              <div className="main_content_2">
                <svg
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  aria-hidden="true"
                  focusable="false"
                  class="BaseSvg-sc-yh8lnd-0 CalendarIcon___StyledBaseSvg-sc-1a6y0d6-0 hNajXU"
                >
                  <path d="M8.75 3V1h-1.5v2H1v20h17.03L23 18.1V3h-6.25V1h-1.5v2h-6.5Zm6.5 3.5h1.5v-2h4.75v3.25h-19V4.5h4.75v2h1.5v-2h6.5v2Zm6.25 2.75v7.59h-4.66v4.66h.57H2.5V9.25h19Zm-.7 8.91-2.64 2.6v-2.6h2.64ZM4.25 11.25h5.5v5.5h-5.5v-5.5Zm1.5 1.5v2.5h2.5v-2.5h-2.5Z"></path>
                </svg>
                <input type="date" name="date" id="date" className="date" />
                <span>All Date</span>
                <svg
                  class="svg_right"
                  viewBox="0 0 24 24"
                  width="1.5em"
                  height="1.5em"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M3.47 8.26 4.53 7.2 12 14.67l7.47-7.47 1.06 1.06L12 16.8 3.47 8.26Z"></path>
                </svg>
              </div>
            </div>
            <div className="search_main">
              <div className="search">
                <input
                  id="search"
                  name="name"
                  className="search_icon"
                  type="text"
                  placeholder="Search by Artist, Event or Venue"
                />
                <svg
                  class="BaseSvg-sc-yh8lnd-0 MagnifyingGlassIcon___StyledBaseSvg-sc-1pooy9n-0 hsRbmG sc-3g1qn0-12 lctHIw"
                  viewBox="0 0 23 24"
                  width="1.5em"
                  height="1.5em"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M3.78 4.78 1.62 10l2.16 5.22L9 17.38l5.22-2.16L16.38 10l-2.16-5.22L9 2.62 3.78 4.78ZM9 1l6.36 2.64L18 10l-2.33 5.61 6.11 6.11-1.06 1.06-6.1-6.1L9 19l-6.36-2.64L0 10l2.64-6.36L9 1Z"></path>
                </svg>
              </div>
              <button type="button">
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header;
