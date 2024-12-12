"use client";
import React from "react";
import { BtnList } from "@/app/data";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";

export default function Navigation() {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;
  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
    <ResponsiveComponent>

    {({ size }) => {
      return size && size >= 480 ? (
      <div className="w-max flex items-center justify-center group hover:pause relative animate-spin-slow">
        {BtnList.map((btn, index) => {
          const angleRad = (index * angleIncrement * Math.PI) / 180;

          const radius = isLarge
            ? "calc(20vw - 1rem)"
            : isMedium
            ? "calc(30vw - 1rem)"
            : "calc(40vw - 1rem)";
          const x = `calc(${radius}*${Math.cos(angleRad)})`;
          const y = `calc(${radius}*${Math.sin(angleRad)})`;
          return <NavButton key={index} x={x} y={y} {...btn} />;
        })}
      </div>) : (
        <>
          <h1>Navigation Response</h1>
        </>
      );
    }}
      </ResponsiveComponent>
    </div>
  );
}
