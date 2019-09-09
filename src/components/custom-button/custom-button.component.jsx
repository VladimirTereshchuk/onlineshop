import React from "react";
import { connect } from "react-redux";
import "./custom-buttom.styles.scss";
import { addItem } from "../../redux/cart/cart.actions";
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default connect()(CustomButton);
