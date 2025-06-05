import React from "react";
import { useLoader } from "../contexts/LoaderContext";

const Loader = () => {
  const { loader } = useLoader();

  if (!loader) return null;

  return (
    <div className="loader-overlay">
      <span class="loader"></span>
    </div>
  );
};

export default Loader;
