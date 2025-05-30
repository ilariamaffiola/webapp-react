import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
