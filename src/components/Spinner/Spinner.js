import React from "react";
import Loader from "react-loader-spinner";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="loader">
      <Loader
        type="TailSpin"
        color="#53eba9"
        height={80}
        width={80}
        // timeout={3000}
      />
    </div>
  );
};

export default Spinner;
