import React, { useEffect } from "react";

const ProgressBar = ({ kmCounter }) => {
  useEffect(() => {
    console.log(kmCounter);
  }, kmCounter);
  return (
    <div class="progress">
      <div
        class="progress-bar bg-info"
        role="progressbar"
        style={{ width: `calc(${kmCounter}% / 15)` }}
        aria-valuenow=""
        aria-valuemin="0"
        aria-valuemax="1500"
      ></div>
    </div>
  );
};

export default ProgressBar;
