import React from "react";

// style imports
import "../styles/components/footer.scss";
import "../styles/components/boxModel.scss";

// image logo imports
import footerIllastration from "../media/footer illastration.png";

import SendIcon from "@material-ui/icons/Send";

import facebookIcon from "../media/social icons/002-facebook-logo.png";
import tweeterIcon from "../media/social icons/001-twitter-logo-silhouette.png";
import linkedinIcon from "../media/social icons/004-linkedin-logo.png";
import instagramIcon from "../media/social icons/instagram (1).png";
import youtubeIcon from "../media/social icons/005-youtube.png";

import bkashIcon from "../media/vendor icons/BKash-bKash-Logo.png";
import nagadIcon from "../media/vendor icons/nagad-logo-7A70CCFEE0-seeklogo.com.png";
// import roketIcon from "../media/vendor icons/005-youtube.png";
import visaIcon from "../media/vendor icons/g4158.png";
import mastercardIcon from "../media/vendor icons/Mastercard-logo.png";
import amairicanExpressIcon from "../media/vendor icons/amex-logo-png.png";

import hotlinkeIcon from "../media/social icons/customer-service-2-line.png";
import callIcon from "../media/social icons/phone-line.png";
import emailIcon from "../media/social icons/mail-send-line.png";

function Footer() {
  return (
    <footer>
      <div className="grid__parent">
        <img
          className="col_1_4 footer__illustration"
          src={footerIllastration}
          alt=""
        />
        <div className="col_2_4 mid_section">
          <section className="social_link_container flex">
            <a href="null" className="social_links fa">
              <img src={facebookIcon} alt="" className="social_link" />
            </a>
            <a href="null" className="social_links">
              <img src={tweeterIcon} alt="" className="social_link" />
            </a>
            <a href="null" className="social_links">
              <img src={linkedinIcon} alt="" className="social_link" />
            </a>
            <a href="null" className="social_links">
              <img src={instagramIcon} alt="" className="social_link" />
            </a>
            <a href="null" className="social_links">
              <img src={youtubeIcon} alt="" className="social_link" />
            </a>
          </section>

          <section className="subscription">
            <h3>SUBSCRIBE</h3>
            <h6>Get the leatest news from zDrop</h6>
            <form action="./action" className="flex">
              <input
                type="email"
                name="email"
                id="getEmail"
                placeholder="Email address"
              />
              <SendIcon role="button" className="submit_ico" />
            </form>
            <div className="quick_links flex">
              <a href="null" className="link">
                About zDrop
              </a>
              <a href="null" className="link">
                FAQ & Support
              </a>
              <a href="null" className="link">
                Term & Condition
              </a>
              <a href="null" className="link">
                Privacy Policy
              </a>
            </div>
          </section>

          <section className="payment_partner flex">
            <a href="null">
              <img src={bkashIcon} alt="" />
            </a>
            <a href="null">
              <img src={nagadIcon} alt="" />
            </a>
            <a href="null">
              <img src={visaIcon} alt="" />
            </a>
            <a href="null">
              <img src={mastercardIcon} alt="" />
            </a>
            <a href="null">
              <img src={amairicanExpressIcon} alt="" />
            </a>
            {/* <a href="">
              <img src="" alt="" />
            </a> */}
          </section>
        </div>
        <div className="col_3_4 right_sec flex">
          <section className="contact">
            <h3>CONTACT US</h3>
            <div className="block flex">
              <div className="img_con">
                <img src={hotlinkeIcon} alt="" />
              </div>
              <div>
                <h5>Hotline:</h5>
                <br />
                <h6>
                  <a href="tel:+8801929459195">
                    +8801929459195 (10am-10pm/Sat-Thur)
                  </a>
                </h6>
              </div>
            </div>
            <div className="block flex">
              <div className="img_con">
                <img src={callIcon} alt="" />
              </div>
              <div>
                <h5>Whole Sales</h5>
                <br />
                <h6>
                  <a href="tel:+8801929459195">01929459195 (10am-12pm)</a>
                </h6>
              </div>
            </div>
            <div className="block flex">
              <div className="img_con">
                <img src={emailIcon} alt="" />
              </div>
              <div>
                <h5>Email</h5>
                <br />
                <h6>
                  <a href="mailto:support.example@gmail.com">
                    support.example@gmail.com
                  </a>
                </h6>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
