import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { Spinner } from "./Loader.styled";

const Loader = () => {
  return (
    <Spinner>
      <RotatingLines
        strokeColor="#6648c8"
        strokeWidth="5"
        animationDuration="0.75"
        width="75"
        visible={true}
      />
    </Spinner>
  );
};

export default Loader;
