import React from "react";

export default function Heading({ tag, judul }) {
  return (
    <div className="space-y-2 text-center sm:text-start  ">
      <h4 className="font-medium sm:text-xl text-md text-second">{tag}</h4>
      <h3 className="sm:text-4xl tracking-wider leading-normal text-2xl   ">
        {judul}
      </h3>
    </div>
  );
}
