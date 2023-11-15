import React from "react";

const Header = () => {
  return (
    <header className="header_wrapper">
      <div className="container">
        <div className="breadcrumbs-nav">
          <span className="text">Order &gt; </span>
          <span className="text underline"> Order 32457ABC</span>
        </div>
        <div className="order-title-wrapper">
          <h1 className="heading">Order 32457ABC</h1>
          <div className="button-group">
            <button className="button secondary">Back</button>
            <button className="button primary">Approve Order</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
