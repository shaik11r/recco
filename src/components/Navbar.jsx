import React from "react";

function NavigationBar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-component-container">
          <img
            className="navbar-image"
            src="https://res.cloudinary.com/dbrdml9bf/image/upload/v1667388846/reeco/61d55f72e02791825a9a1232_reeco-logo-white_m6fyuw.svg"
            alt="Logo"
          />
          <div className="navbar-component">
            <div className="navigation-option">Store</div>
            <div className="navigation-option">Order</div>
            <div className="navigation-option">Analytics</div>
          </div>
        </div>
        <div className="navbar-component-container">
          <img
            className="navbar-image"
            src="https://res.cloudinary.com/dbrdml9bf/image/upload/v1667400559/reeco/icons8-checkout-30_nadj56.png"
            alt="Checkout"
          />
          <div className="navigation-option">Hello,NadeenShaik</div>
          <img
            className="icon-button"
            src="https://res.cloudinary.com/dbrdml9bf/image/upload/v1667401694/reeco/icons8-expand-arrow-24_1_np3fgd.png"
            alt="Expand"
          />
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
