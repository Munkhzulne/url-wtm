import React, { useState, useEffect, useContext } from "react";
import { Button, DownArrow } from "./";
import { useNavigate, useLocation } from "react-router-dom";
import { context } from '../provider/react-provider'

export const Navigation = () => {
  const { user, logOut } = useContext(context)

  const location = useLocation().pathname;
  const navigate = useNavigate();
  const [button, setButton] = useState();

  const pathHistory = () => {
    navigate("/history");
  };

  useEffect(() => {
    const dropdown = () => {
      document.getElementById("dropdown").style.display = "block";
      document.body.addEventListener("click", listener);
    };
    const listener = () => {
      document.getElementById("dropdown").style.display = "none";
      document.body.removeEventListener("click", listener);
    };

    if (user) {
      setButton(
        <div
          className="font-ubuntu fs-20 lh-23 bold mr-5 ml-5 pointer"
          onClick={() => dropdown()}
        >
          {user.name}
          <DownArrow className="w-2 h-1 ml-1" />
        </div>
      );
    } else {
      setButton(
        <Button
          onclick={() => navigate("/login")}
          className="font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-18 ph-4 ml-4 b-primary pointer outline-none"
        >
          Нэвтрэх
          </Button>
      );
    }
  }, [user, navigate]);

  return (
    <div className="w100 mt-5 mr-7 flex justify-end items-center">
      <div className="font-ubuntu fs-20 lh-23 bold c-primary">
        ХЭРХЭН АЖИЛЛАДАГ ВЭ?
      </div>
      {location === "/login" ||
        location === "/signout" ||
        location === "/recover" ? (
          <div></div>
        ) : (
          button
        )}
      <div className="dropdown" id="dropdown">
        <div
          className="font-ubuntu fs-20 lh-23 bold c-primary pointer"
          onClick={() => pathHistory()}
        >
          History
        </div>
        <div
          className="font-ubuntu fs-20 lh-23 bold c-primary pointer mt-1"
          onClick={() => logOut()}
        >
          Sign out
        </div>
      </div>
    </div>
  );
};
