import React, { useState, useCallback } from "react";
import { buildNavLinks, buildDropdownLinks } from "./data.js";

import Brand from "../../assets/images/brand.svg";
import Hamburger from "../../assets/images/hamburger.svg";
import Close from "../../assets/images/close.svg";
import ChevronDown from "../../assets/images/chevronDown.svg";
import ChevronUp from "../../assets/images/chevronUp.svg";

import { HeaderProps } from "./Header.types";
import "./Header.scss";

const Header: React.FC<HeaderProps> = ({
  mobile,
  baseUrl,
  userId,
  loggedIn,
  profilePic,
  Link
}) => {
  const [show, setShow] = useState(false);
  const toggleShow = useCallback(() => setShow(!show), [setShow]);

  const linkType = loggedIn ? "member" : "guest";
  const navLinks = buildNavLinks(baseUrl)[linkType];
  const dropdownLinks = buildDropdownLinks(baseUrl, userId);

  const Component = mobile ? MobileHeader : DesktopHeader;

  return (
    <Component
      navLinks={navLinks}
      dropdownLinks={dropdownLinks}
      show={show}
      toggleShow={toggleShow}
      profilePic={profilePic}
      loggedIn={loggedIn}
      Link={Link}
    />
  );
};

const MobileHeader = ({
  navLinks,
  dropdownLinks,
  profilePic,
  show,
  toggleShow,
  loggedIn,
  Link
}) => {
  const toggleImage = show ? Close : Hamburger;
  const profileLink = dropdownLinks[0].url; // Provide touch response to pic in dropdown

  return (
    <div className="Header__Mobile_Container">
      <div className="Header__Mobile_Toggle">
        <img src={Brand} className="Header__Brand" />
        <button onClick={toggleShow} className="Header__Mobile_Hamburger">
          <img src={toggleImage} />
        </button>
      </div>
      {show && (
        <div className="Header__Mobile_Collapse">
          <Links links={navLinks} type="Nav" Link={Link} />
          {loggedIn && (
            <div className="Header__Collapse_Relative">
              <a href={profileLink}>
                <img src={profilePic} className="Header__Collapse_ProfilePic" />
              </a>
              <Links links={dropdownLinks} type="Dropdown" Link={Link} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const DesktopHeader = ({
  navLinks,
  dropdownLinks,
  profilePic,
  show,
  toggleShow,
  loggedIn,
  Link
}) => {
  const toggleImage = show ? ChevronUp : ChevronDown;
  return (
    <div className="Header__Container">
      <img src={Brand} className="Header__Brand" />
      <Links links={navLinks} type="Nav" Link={Link} />
      {loggedIn && (
        <div className="Header__Dropdown_Container" onClick={toggleShow}>
          <img src={profilePic} className="Header__Dropdown_Image" />
          <img src={toggleImage} className="Header__Dropdown_Chevron" />
        </div>
      )}
      {show && <Links links={dropdownLinks} type="Dropdown" Link={Link} />}
    </div>
  );
};

const Links = ({ links, type, Link }) => {
  const containerClass = "Header__LinkContainer_" + type;
  const linkClass = "Header__Link_" + type;

  return (
    <div className={containerClass}>
      {links.map(({ label, url, internal }, key) =>
        Link && internal ? (
          <Link key={key} to={url} className={linkClass}>
            {label}
          </Link>
        ) : (
          <a key={key} href={url} className={linkClass}>
            {label}
          </a>
        )
      )}
    </div>
  );
};

export default Header;
