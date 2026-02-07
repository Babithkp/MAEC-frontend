import { TiSocialFacebook } from "react-icons/ti";
import ieeLogo from "/msac_full_logo.png";
import rating from "/rating.png";
import { Button } from "../ui/button";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isOnSignup, setIsOnSignup] = useState(false);

  useEffect(() => {
    if (
      window.location.pathname === "/get-started" ||
      window.location.pathname === "/loggingIn"
    ) {
      setIsOnSignup(true);
    } else {
      setIsOnSignup(false);
    }
  }, []);
  return (
    <footer className={`${isOnSignup ? "hidden" : ""}`}>
      <div className={`grid px-5 md:grid-cols-5 text-sm py-10 max-md:gap-10 `}>
        <div className="flex flex-col gap-10">
          <a href="/">
            <img src={ieeLogo} alt="iee logo" className="w-[12rem]" />
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <a href="/aboutus">About us</a>
          <a href="/get-started">My account</a>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold">Help Center</p>
          <a href="/contactus">Contact Us</a>
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold">Contact Us</p>
          <p className="font-bold">
            Support@internationaltranslationservice.de
          </p>
          <a href="/">
            <img src={rating} alt="rating" />
          </a>
          <div className="flex ">
            <Button variant={"ghost"} className="p-[2px] text-[#2aaae0]">
              <TiSocialFacebook
                size={30}
                className="border-[#2aaae0] border-[1px] text-[#2aaae0] rounded-full p-1"
              />
            </Button>
            <Button variant={"ghost"} className="p-[2px] text-[#2aaae0]">
              <FaLinkedinIn
                size={30}
                className="border-[#2aaae0] border-[1px] text-[#2aaae0] rounded-full p-1"
              />
            </Button>
            <Button variant={"ghost"} className="p-[2px] text-[#2aaae0]">
              <FaInstagram
                size={30}
                className="border-[#2aaae0] border-[1px] text-[#2aaae0] rounded-full p-1"
              />
            </Button>
            <Button variant={"ghost"} className="p-[2px] text-[#2aaae0]">
              <FaTwitter
                size={30}
                className="border-[#2aaae0] border-[1px] text-[#2aaae0] rounded-full p-1"
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="md:flex text-sm max-md:text-xs  justify-center max-md:text-center items-center bg-black text-slate-500  py-5">
        <p>Ⓒ 2024 MSAC. all right reserved.</p>
        <ul className="flex flex-wrap gap-3 max-md:px-5 justify-center">
          <li>
            <a href="/" className="underline hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="underline hover:text-white">
              Cookie Policy
            </a>
          </li>
          <li>
            <a href="/" className="underline hover:text-white">
              Terms And Conditions
            </a>
          </li>
          <li>
            <a href="/" className="underline hover:text-white">
              Sitemap
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
