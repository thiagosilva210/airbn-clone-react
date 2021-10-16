import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://travelshopgirl.com/wp-content/uploads/2015/10/airbnb_horizontal_lockup_web.jpg"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input
          type="text"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />

        <Link to={`/search/fname=${inputSearch}`}>
          <SearchIcon />
        </Link>
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
