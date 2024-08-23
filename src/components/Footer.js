import React from "react";

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="shadow-md w-[270px] bg-slate-50 rounded-md h-20 sm:w-[90%] m-auto my-4">
      <div className="p-4 flex flex-col justify-between items-center">
        <p>
          Made with <span role="img" aria-label="heart">❤️</span> by{" "}
          <strong>Muhammad</strong>
        </p>
        <p>&copy; {currYear}. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
