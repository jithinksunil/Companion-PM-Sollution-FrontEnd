import React from "react";
import "./body.css";

function Body({ children }) {
  return (
    <div className = " h-full w-screen md:w-full overflow-y-scroll scrollbar-hidden pl-5 pr-5 md:pr-10 py-2  text-white" >
    {children}
    </div>
  );
}

export default Body;
