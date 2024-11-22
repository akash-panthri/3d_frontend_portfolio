"use client";
import React from "react";
import { BtnList } from "@/app/data";

export default function Navigation() {
  const angleIncrement = 360 / BtnList.length;
  return (
    <div className="w-full fixed h-screen flex items-center justify-center">

   
    <div className="flex items-center justify-between relative">
      {BtnList.map((btn, index) => {
        const angleRad = (index * angleIncrement * Math.PI) / 180;

        const radius = "calc(20vw - 1rem)";
        const x = `calc(${radius}*${Math.cos(angleRad)})`;
        const y = `calc(${radius}*${Math.sin(angleRad)})`;
        return <button key={index} className="absolute" style={{transform:`translate(${x}, ${y})`}}>{btn.label}</button>;
      })}
    </div>
    </div>
  );
}