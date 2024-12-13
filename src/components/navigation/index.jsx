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
            </div>
          ) : (
            <>
              <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-start xs:items-center space-y-4 justify-center group relative">
                {BtnList.slice(0, BtnList.length / 2).map((btn, index) => {
                  
                  return <NavButton key={index} x={0} y={0} {...btn} />;
                })}
              </div>
              <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-end xs:items-center justify-center space-y-4 group relative">
                {BtnList.slice(BtnList.length / 2, BtnList.length).map(
                  (btn, index) => {
                    
                    return <NavButton key={index} x={0} y={0} {...btn} />;
                  }
                )}
              </div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
}
