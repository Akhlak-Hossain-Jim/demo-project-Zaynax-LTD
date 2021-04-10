import React from "react";

import "../styles/components/Promotion.scss";
import "../styles/components/boxModel.scss";

import FavoriteIcon from "@material-ui/icons/Favorite";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import SendIcon from "@material-ui/icons/Send";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import SmsRoundedIcon from "@material-ui/icons/SmsRounded";

function Promotions() {
  return (
    <div className="promotions flex">
      <div className="promotionBox">
        <FavoriteIcon className="icon pink" />
        <h4>Quality and Saving</h4>
        <p>Comprehensive quality control and affordable prices</p>
      </div>
      <div className="promotionBox">
        <TurnedInIcon className="icon blue" />
        <h4>Global Brands</h4>
        <p>Buy you favorite items from your favorite global brands</p>
      </div>
      <div className="promotionBox">
        <SendIcon className="icon orange" />
        <h4>Fast Delivery</h4>
        <p>Fast and convenient door to door delivery</p>
      </div>
      <div className="promotionBox">
        <AccountBalanceWalletIcon className="icon ass" />
        <h4>Secure Payment</h4>
        <p>Different secure payment methods</p>
      </div>
      <div className="promotionBox">
        <SmsRoundedIcon className="icon green" />
        <h4>Professional Service</h4>
        <p>Efficient customer support from passionate team</p>
      </div>
    </div>
  );
}

export default Promotions;
