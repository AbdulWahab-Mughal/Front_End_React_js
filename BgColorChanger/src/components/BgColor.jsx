import React, { useState } from "react";

const ColorList = [
  {
    label: "Red",
    color: "#FF0000",
    to: "/",
  },
  {
    label: "Black",
    color: "#000000",
    to: "/black",
  },
  {
    label: "Gray",
    color: "#778899",
    to: "/gray",
  },
  {
    label: "Yellow",
    color: "#FFD700",
    to: "/yellow",
  },
  {
    label: "Green",
    color: "#008000",
    to: "/green",
  },
  {
    label: "Orange",
    color: "#FF8C00",
    to: "/orange",
  },
  {
    label: "Blue",
    color: "#00008B",
    to: "/blue",
  },
  {
    label: "Brown",
    color: "#8B4513",
    to: "/brown",
  },
  {
    label: "Pink",
    color: "#FF1493",
    to: "/pink",
  },
  {
    label: "Violet",
    color: "#9400D3",
    to: "/violet",
  },
];
const BgColor = () => {
  const [isColor, setIsColor] = useState("#FF0000");
  //   console.log(isColor);
  return (
    <>
      <div
        className=" w-full h-screen duration-200"
        style={{ backgroundColor: isColor }}
      >
        <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0">
          <ul className="flex flex-wrap justify-center gap-3 rounded-lg bg-white px-4 py-2 shadow-lg">
            {ColorList.map((val, index) => (
              <li
                key={index}
                className=" active:bg-slate-600 rounded-xl px-2 py-1 text-white shadow-lg hover:text-blue hover:cursor-pointer"
                style={{ backgroundColor: val.color }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsColor(val.color);
                }}
              >
                <a href={val.to}>{val.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BgColor;
