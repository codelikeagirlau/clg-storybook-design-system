import React from "react";
import Avatar from "../Avatar/Avatar";
import Logo from "../Logo/Logo";
import NavMenu from "../NavMenu/NavMenu";
import Username from "../Username/Username";

const MastHead = ({
  username_text,
  logo_src,
  logo_alt,
  nav_items,
  avatar_src,
}) => {
  return (
    <header>
      <Logo src={logo_src} alt={logo_alt} />
      {nav_items && <NavMenu nav_items={nav_items} />}
      <div className="account">
        <Avatar src={avatar_src} />
        <Username username_text={username_text} />
      </div>
    </header>
  );
};
export default MastHead;
