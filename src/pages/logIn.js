import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Button,
  Input,
  IconDash,
  IconEndBracket,
  IconStartBracket,
} from "../components/";
import { context } from "../provider/react-provider";
import { useKeyPress } from "../hooks/useEnterPress";

export const LogIn = () => {
  const { logIn } = useContext(context);
  const isClicked = useKeyPress(13);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signout = () => navigate("/signout");
  const homePage = () => navigate("/");
  const recover = () => navigate("/recover");

  if (isClicked === true) logIn({ email, password });

  return (
    <Layout status="logging">
      <div className="h100 flex flex-col items-center">
        <div
          className="flex justify-center items-center mt-7 pointer"
          onClick={() => homePage()}
        >
          <IconStartBracket />
          <IconDash />
          <IconEndBracket />
        </div>
        <div
          className="font-lobster c-primary fs-56 lh-70 pointer"
          onClick={() => homePage()}
        >
          Boginoo
        </div>
        <div className="font-ubuntu bold c-primary fs-32 lh-37 mt-6">
          Нэвтрэх
        </div>
        <Input
          fatherClass="flex flex-col items-center mt-6"
          className="fs-18 lh-23 br-none bx-sh-2 br-ra-100 h-4 w-38 ph-4 outline-none"
          placeholder="name@mail.domain"
          label="Цахим хаяг"
          labelClassName="font-ubuntu fs-18 lh-23 h-4 w-38 pa-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          fatherClass="flex flex-col items-center "
          className="fs-18 lh-23 br-none bx-sh-2 br-ra-100 h-4 w-38 ph-4 outline-none"
          placeholder="••••••••••"
          label="Нууц үг"
          type="password"
          labelClassName="font-ubuntu fs-18 lh-23 h-4 w-38 pa-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex w-37 mt-4 justify-between">
          <div className="font-ubuntu c-primary flex">
            <input
              type="checkbox"
              className="br-primary-1 w-2 h-2 br-ra-4 ma-none mr-2 pointer"
            ></input>
            <div>Намайг сана</div>
          </div>
          <div onClick={() => recover()} className="font-ubuntu pointer">
            Нууц үгээ мартсан
          </div>
        </div>
        <Button
          onclick={() => logIn({ email, password })}
          className="font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-19 ph-4 ml-4 b-primary mt-5 pointer outline-none"
        >
          Нэвтрэх
        </Button>
        <div
          onClick={() => signout()}
          className="font-ubuntu c-primary w-26 mt-4 pointer mb-7"
        >
          Шинэ хэрэглэгч бол энд дарна уу?
        </div>
      </div>
    </Layout>
  );
};
