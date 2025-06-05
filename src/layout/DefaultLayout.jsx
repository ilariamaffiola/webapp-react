import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useLoader } from "../contexts/LoaderContext";
const DefaultLayout = () => {
  const { loader } = useLoader();
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      {loader && <Loader />}
    </>
  );
};

export default DefaultLayout;
