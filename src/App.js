import React from "react";
import {
  HomeDefault,
  LogIn,
  SignOut,
  Recover,
  History,
  Result,
  Shortened,
} from "./pages";
import { Provider } from "./provider/react-provider";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./style/main.scss";
import { ReDirect } from "./components/redirect";

const App = () => {
  return (
    <HashRouter>
      <Provider>
        <Routes>
          <Route path="/" exact element={<HomeDefault />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/history" element={<History />} />
          <Route path="/result" element={<Result />} />
          <Route path="/shortened" element={<Shortened />} />
          <Route path="*" element={<ReDirect />} />
        </Routes>
      </Provider>
    </HashRouter>
  );
};

export default App;
