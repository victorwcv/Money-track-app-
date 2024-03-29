import "../styles/navigation.scss";
import avatar from "../assets/avatar.png";
import menuItems from "../utils/menuItems.jsx";
import icons from "../utils/icons.jsx";
import { useState } from "react";

const Navigation = ({ active, setActive }) => {
  return (
    <div className="navigation">
      <div className="user-container">
        <img src={avatar} alt="User avatar" />
        <div className="text">
          <h2>Mike</h2>
          <p>Yoir Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li>{icons.signout} Sign Out</li>
      </div>
    </div>
  );
};

export default Navigation;
