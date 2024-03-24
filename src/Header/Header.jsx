import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaPenFancy } from "react-icons/fa";
import { IoIosBook } from "react-icons/io";
import { SiApacheopenoffice } from "react-icons/si";

const Header = (props) => {
  // console.log(props.title);
  const [input, setInput] = useState("");

  const handleClick = () => {
    props.setTitle(input);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    props.setTitle(e.target.value);
  };

  return (
    <div className="header">
      <div className="company"><SiApacheopenoffice /> Deseret Book</div>
      <div className="search">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search for a book"
          className="input"
        />
        <button className="button" onClick={handleClick}>
          Search
        </button>
      </div>
      <div className="icons">
        <div className="icon">
          <FaPenFancy size={"2rem"} />
        </div>
        <div className="icon">
          <IoIosBook />
        </div>
      </div>
    </div>
  );
};

export default Header;
