import React from "react";
import './CustomLoader.css'
import { Audio } from "react-loader-spinner";

const CustomLoader = () => {
  return (
    <div className="Loader">
        <Audio
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
  )
}

export default CustomLoader;