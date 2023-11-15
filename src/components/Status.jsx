import React from "react";

const Status = () => {
  return (
    <section className="stats-wrapper">
      <ul className="status-list">
        <li className="status-list-item">
          <h2 className="text level-1 light">Supplier</h2>
          <h1 className="text level-2 bold">East cost fruits & vegetables</h1>
        </li>
        <li className="status-list-item">
          <h2 className="text level-1 light">Shipping Date</h2>
          <h1 className="text level-2 bold">Thu, Feb 10</h1>
        </li>
        <li className="status-list-item">
          <h2 className="text level-1 light">Total</h2>
          <h1 className="text level-2 bold">$ 15,028.3</h1>
        </li>
        <li className="status-list-item">
          <h2 className="text level-1 light">Category</h2>
          <h1 className="text level-2 bold">Eggs,Sweet,Strawberries, fruit</h1>
        </li>
        <li className="status-list-item">
          <h2 className="text level-1 light">Department</h2>
          <h1 className="text level-2 bold">300-444-678</h1>
        </li>
        <li className="status-list-item">
          <h2 className="text level-1 light">Status</h2>
          <h1 className="text level-2 bold">Awaiting your approval</h1>
        </li>
      </ul>
    </section>
  );
};

export default Status;
