import React from "react";
import { contactData, buildAboutLinks, socialLinks } from "./data.js";

import Brand from "../../assets/images/brand.svg";
import Envelope from "../../assets/images/envelope.svg";
import Phone from "../../assets/images/phone.svg";
import Facebook from "../../assets/images/facebook-square.svg";
import Twitter from "../../assets/images/twitter.svg";
import Instagram from "../../assets/images/instagram.svg";

import { FooterProps } from "./Footer.types";
import "./Footer.scss";

const Footer: React.FC<FooterProps> = ({ baseUrl }) => {
  const aboutLinks = buildAboutLinks(baseUrl);
  return (
    <div className="Footer__Container">
      <img src={Brand} className="Footer__Brand" />
      <div className="Footer__Sections_Container">
        <div className="Footer__Contact">
          <h3 className="Footer__Section_Header">Contact Us</h3>
          <ul>
            <li>
              <img src={Envelope} className="Footer__Icon" />
              <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
            </li>
            <li>
              <img src={Phone} className="Footer__Icon" />
              <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
            </li>
          </ul>
        </div>

        <div className="Footer__About">
          <h3 className="Footer__Section_Header">About Revel</h3>
          <ul>
            {aboutLinks.map(({ label, url }, key) => (
              <li>
                <a href={url}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="Footer__Follow">
          <h3 className="Footer__Section_Header">Follow Us</h3>
          <ul>
            <li>
              <a href={socialLinks.facebook}>
                <img src={Facebook} className="Footer__Icon" />
                Facebook
              </a>
            </li>
            <li>
              <a href={socialLinks.twitter}>
                <img src={Twitter} className="Footer__Icon" />
                Twitter
              </a>
            </li>
            <li>
              <a href={socialLinks.instagram}>
                <img src={Instagram} className="Footer__Icon" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Footer__Copyright">© Revel 2020</div>
    </div>
  );
};

export default Footer;
