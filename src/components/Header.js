import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header({ searchTerm, setSearchTerm }) {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearchInput = () => {
    setSearchActive(!searchActive);
  };

  return (
    <header>
      <nav>
        <div className="nav_top">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          <div className="nav_top_icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram px-2"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
        <div className="nav_mid">
          <div className="nav_mid_left">
            <a className="image_mask" href="#">
              <img
                src="https://placehold.co/100x100/EEE/31343C"
                width="30"
                height="24"
                alt="Logo"
              />
              Logo
            </a>

            <div className="nav_info">
              <div className="nav_phone">
                <div className="icon-circle">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="nav_info_box">
                  <p>Phone Number</p>
                  <span>(650) 121-2132</span>
                </div>
              </div>
              <div className="nav_email">
                <div className="icon-circle">
                  <i className="bi bi-envelope-at-fill"></i>
                </div>
                <div className="nav_info_box">
                  <p>Email Us Here</p>
                  <span>example@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="nav_mid_right">
            <i
              className="bi bi-search search-icon"
              onClick={toggleSearchInput}
            ></i>
            <input
              type="text"
              className={`search-input ${searchActive ? "active" : ""}`}
              id="searchInput"
              placeholder="Search here ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="nav_bottom">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="bi bi-list"></i>
          </label>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Project Gallery</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
          <button className="btn_request">Free Consulation</button>
        </div>
      </nav>
    </header>
  );
}
