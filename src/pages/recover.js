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

export const Recover = () => {
  const navigate = useNavigate();
  const { resetPassword } = useContext(context);
  const [input, setInput] = useState("");

  const homePage = () => {
    navigate("/");
  };
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
          Нууц үг сэргээх
        </div>
        <div className="font-ubuntu fs-16 w-29 h-5 center mt-5">
          Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
        </div>
        <Input
          type="email"
          onChange={(e) => setInput(e.target.value)}
          fatherClass="flex flex-col items-center mt-6"
          className="fs-18 lh-23 br-none bx-sh-2 br-ra-100 h-4 w-38 ph-4 outline-none"
          placeholder="name@mail.domain"
          label="Цахим хаяг"
          id="gmail"
          labelClassName="font-ubuntu fs-18 lh-23 h-4 w-38 pa-2"
        />
        <Button
          onclick={() => resetPassword(input)}
          className="font-ubuntu fs-18 lh-23 br-none up br-ra-100 bold c-default h-4 w-19 ph-4 ml-4 b-primary mt-5 pointer outline-none"
        >
          Илгээх
        </Button>
      </div>
    </Layout>
  );
};
