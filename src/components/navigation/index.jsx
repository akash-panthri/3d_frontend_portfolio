"use client"
import React from 'react'
import { BtnList } from "@/app/data";

export default function Navigation() {
  return (
    <div className='flex items-center justify-between relative'>
    
    {BtnList.map((btn, index) => {
                

                return <button key={index}>{btn.label}</button>
              })}
    </div>
  )
}
