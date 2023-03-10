import React from "react";
import { Navigation } from "./";

export const Layout = ({ children, status }) => {
  return (
    <div
      className="flex flex-col items-center pa-3"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Navigation status={status} />

      <div className="w100 flex-1">{children}</div>

      <div className="font-ubuntu fs-16 lh-18">Made with WTM</div>
    </div>
  );
};
