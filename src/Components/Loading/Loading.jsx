import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loading d-flex align-items-center justify-content-center vh-100 bg-dark text-white">
        <h2>
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

        </h2>
      </div>
    </>
  );
};

export default Loading;
