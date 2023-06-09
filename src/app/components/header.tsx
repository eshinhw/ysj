"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { DM_Serif_Display } from "next/font/google";
import { IM_Fell_French_Canon_SC } from "next/font/google";
import { IM_Fell_Double_Pica_SC } from "next/font/google";
import { RxMagnifyingGlass } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import SearchBar from "./search-bar";
import { useState } from "react";
import Weather from "./weather";

const fell_french = IM_Fell_French_Canon_SC({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  // const handleSearch = () => {
  //   let search: HTMLElement = document.getElementById("search__bar")!;
  //   if (search?.style.display === "none") {
  //     search.style.display = "block";
  //     setShowSearchBar(true);
  //   } else {
  //     search.style.display = "none";
  //     setShowSearchBar(false);
  //   }
  // };
  const now = new Date();
  const getDay = () => {
    switch (now.getDay()) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  };

  const getMonth = () => {
    switch (now.getMonth()) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
        return "";
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="flex flex-row items-center justify-between my-3 mx-2 lg:hidden">
        <GiHamburgerMenu className="w-4 h-4" />
        <span className="text-xl lg:text-3xl">
          <Link href="/" className={fell_french.className}>
            The Yonge Street Journal
          </Link>
        </span>
        <Link href="/login">
          <FaUser className="w-4 h-4" />
        </Link>
      </div>
      {/* Mobile Date and Subscribe */}
      <div className="flex border-solid border-t-2 text-sm justify-between mx-2 lg:hidden">
        <div className="text-xs py-2">
          {getDay()}, {getMonth()} {now.getDate()}, {now.getFullYear()}
        </div>
        <Link href="/write" className="text-xs py-2">
          Write
        </Link>
        <Link href="/subscribe" className="text-xs py-2">
          Subsribe
        </Link>
      </div>

      {/* Laptop Top Bar */}
      <div className="hidden my-5 lg:mx-20 xl:mx-40 lg:flex flex-row items-center justify-between">
        <div className="flex flex-row gap-4 justify-center items-center">
          <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
          <RxMagnifyingGlass
            className="w-6 h-6 cursor-pointer"
            onClick={() => setShowSearchBar(!showSearchBar)}
          />
          {showSearchBar ? <SearchBar /> : <></>}
        </div>

        <div className="hidden lg:flex lg:flex-row lg:gap-4">
          <Link href="/write" className="uppercase border-black">
            Write
          </Link>
          <Link href="/subscribe" className="uppercase border-black">
            Subscribe
          </Link>
          <Link href="/login" className="uppercase">
            Log In
          </Link>
        </div>
      </div>

      {/* Laptop Date, Header, Weather  */}
      <div className="hidden lg:mx-20 xl:mx-40 lg:flex border-b-2 py-10 justify-between items-center">
        {/* Date */}
        <div className="text-xs w-18">
          <p className="font-bold">
            {getMonth()} {now.getDate()}, {now.getFullYear()}
          </p>
          <p>{getDay()}</p>
        </div>
        {/* Title */}
        <div className="lg:text-3xl xl:text-6xl cursor-pointer text-center">
          <Link href="/" className={fell_french.className}>
            The Yonge Street Journal
          </Link>
        </div>
        {/* Weather */}
        <Weather />
      </div>
    </>
  );
}
