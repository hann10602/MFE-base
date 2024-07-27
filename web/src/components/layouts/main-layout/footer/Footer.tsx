import { Layout } from "antd";
import React from "react";
import "./index.scss";
import { Icon } from "@iconify-icon/react";
import { Link } from "react-router-dom";

type Props = {};

const { Footer } = Layout;

export const FooterLayout = (props: Props) => {
  return (
    <Footer>
      <div className="layout__footer-column">
        <p className="layout__footer-column__title">Category</p>
        <div className="layout__footer-column__content">
          <div className="layout__footer-column__category-wrapper">
            <Link to="search?category=man">Man</Link>
            <Link to="search?category=woman">Woman</Link>
            <Link to="search?category=kid">Kid</Link>
          </div>
        </div>
      </div>
      <div className="layout__footer-column">
        <p className="layout__footer-column__title">Follow us</p>
        <div className="layout__footer-column__content">
          <Link
            to="https://www.facebook.com"
            className="layout__footer-column__wrapper"
          >
            <Icon icon="fa:facebook-official" width={24} height={24} />
            <p>Facebook</p>
          </Link>
          <Link
            to="https://www.instagram.com"
            className="layout__footer-column__wrapper"
          >
            <Icon icon="streamline:instagram-solid" width={24} height={24} />
            <p>Instagram</p>
          </Link>
          <Link
            to="https://www.linkedin.com"
            className="layout__footer-column__wrapper"
          >
            <Icon icon="bi:linkedin" width={24} height={24} />
            <p>Linkedin</p>
          </Link>
        </div>
      </div>
      <div className="layout__footer-column">
        <p className="layout__footer-column__title">Download</p>
        <div className="layout__footer-column__content">
          <Link
            to="https://www.apple.com/vn/app-store/"
            className="layout__footer-column__wrapper"
          >
            <Icon icon="logos:apple-app-store" width={24} height={24} />
            <p>App store</p>
          </Link>
          <Link
            to="https://play.google.com/store/games?hl=vi-VN"
            className="layout__footer-column__wrapper"
          >
            <Icon icon="logos:google-play-icon" width={24} height={24} />
            <p>Google play</p>
          </Link>
        </div>
      </div>
    </Footer>
  );
};
