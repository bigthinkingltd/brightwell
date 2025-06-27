import Link from 'next/link';
import React from 'react';


const boxes = [
    {
      title: "Houses",
      description: "Information about the Houses; Wonder, Wild, Watch and Wisdom",
      link: "/houses",
    },
    {
      title: "Shop & Supplies",
      description: "Everything you need for starting a new term at brightwell",
      link: "/shop&supplies",
    },
    {
      title: "Admissions",
      description: "",
      link: "/admissions",
    },
    {
      title: "Archives",
      description: "A treasure trove of Brightwell information, from history to pet care",
      link: "/archives",
    },
    {
      title: "Proclamations",
      description: "News and views from Brightwell Academy",
      link: "/proclamations",
    },
    {
      title: "Brightspell",
      description: "Sign up for the school newsletter and never miss a date!",
      link: "/brightspell",
    },
  ];

  export default function Boxes() {
    return (
      <div className="flex justify-center py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {boxes.map((box, index) => (
            <Link
              key={index}
              href={box.link}
              className="border border-black p-6 text-center"
            >
              <h2 className="text-black text-xl font-bold mb-2">{box.title}</h2>
              <p className="text-gray-700">{box.description}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }