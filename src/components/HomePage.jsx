import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Status from "./Status";
import Table from "./Table";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container-homepage">
        <Status />
        <Table />
      </div>
    </>
  );
};

export default HomePage;
