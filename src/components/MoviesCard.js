import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MoviesCard = ({ posterPath }) => {
  return (
    <div className="relative z-20 w-36 pr-2 ">
      <img src={CDN_IMG_URL + posterPath} />
    </div>
  );
};

export default MoviesCard;
