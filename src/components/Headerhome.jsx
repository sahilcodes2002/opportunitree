import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ss from "../images/logo.png";
const Headerhome = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="dashboard-header">
        <div className="flex justify-between">
          <div class="logo-wrapper">
            <div class="logo-image mt-3">
              <img className="rounded-md" src={ss} alt="Design" />
            </div>
            <div class="logo-text"> OPPORTUNITREE</div>
          </div>
          <Link
            to="/signin"
            className="text-white px-3 py-1 bg-[rgb(47,141,113)]  hover:bg-[rgb(18,107,70)] rounded-xl mt-3 mb-auto text-sm"
          >
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Headerhome;
