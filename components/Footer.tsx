import React from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div>
          <div>
            <Logo />
            <p>
              Discover curated furniture collections at Shopcart, blending style
              and comfort to elevate your living spaces.
            </p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
