"use client";
import React, { useState, useEffect } from "react";
import DigitalClock from "../ui/DigitalClock";
import AnalogClock from "../ui/AnalogClock";
import Button from "@mui/material/Button";

export default function Header(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <header className="sticky p-0 top-0 bg-gray-100 z-50">
      <div className="flex w-[calc(100% - 10px)] border-b-2 border-black">
        <div className="px-6 py-12 basis-3/12 grow-0 border-r-2 border-black text-black font-extrabold  ">
          <DigitalClock />
        </div>
        <div className="px-6 py-10 basis-1/12 grow-0 border-r-2 border-black text-black font-extrabold  ">
          <AnalogClock />
        </div>
        <div className="px-6 py-12 basis-6/12 grow border-r-2 border-black text-white font-extrabold  ">
          <h1 className="text-3xl text-gray-400"></h1>
        </div>
        <div className="px-6 py-12 basis-1/12 grow-0 border-black bg-black text-white font-extrabold  ">
          <h1 className="text-3xl text-gray-400"></h1>
        </div>
      </div>
    </header>
  );
}
