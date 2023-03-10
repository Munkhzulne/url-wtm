import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const context = createContext();

export const Provider = ({ children }) => {
  const [user, setUser] = useState();
  const [links, setLinks] = useState({
    long: "",
    short: "",
  });
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const logIn = ({ email, password }) => {};

  const createUser = ({ email, password, rePassword }) => {};

  const logOut = () => {};

  const getLongLink = (id) => {};

  const addHistory = (long, domain, random) => {};

  const resetPassword = (email) => {};

  return (
    <context.Provider
      value={{
        logIn,
        createUser,
        user,
        logOut,
        links,
        setLinks,
        domain: "",
        getLongLink,
        addHistory,
        resetPassword,
      }}
    >
      {children}
    </context.Provider>
  );
};
