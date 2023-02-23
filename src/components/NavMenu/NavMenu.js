import React from "react";

/**
 * A navigation menu component. App developers must specify their items as an array, including whatever type of link they want to use (e.g. a href, Link, react router dom etc)
 */

const NavMenu = ({ nav_items }) => {
  return (
    <nav>
      <ul>
        {nav_items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </nav>
  );
};
export default NavMenu;
