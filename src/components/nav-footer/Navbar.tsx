import { Button } from "../ui/button";
import webLogo from "/IEElogo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function Navbar() {
  const [isOnSignup, setIsOnSignup] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const trigger = () => {
    ref.current?.click();
  };
  useEffect(() => {
    if (window.location.pathname === "/get-started") {
      setIsOnSignup(true);
    } else {
      setIsOnSignup(false);
    }
  }, []);
  return (
    <nav
      className={`flex p-8 w-full justify-between ${
        isOnSignup ? "hidden" : ""
      }`}
    >
      <figure onClick={trigger}>
        <img
          src={webLogo}
          alt="LOGO"
          loading="lazy"
          className="w-[10rem] max-md:w-[8rem]"
        />
      </figure>
      <div className="justify-evenly items-center flex w-full max-md:hidden">
        <ul className="font-medium  flex gap-6 text-sm">
          <li>
            <a href="/">Evalution</a>
          </li>
          <li>
            <a href="/">Translation</a>
          </li>
          <li>
            <a href="/">Extra Copies</a>
          </li>
          <li>
            <a href="/">Verification</a>
          </li>
        </ul>
        <div className="flex gap-3">
          <Button
            className="rounded-full bg-[#2aaae0]"
            onClick={() => (window.location.href = "get-started")}
          >
            Get Started
          </Button>
          <Button
            variant={"outline"}
            className="rounded-full border-[1px] border-black"
          >
            Login
          </Button>
        </div>
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

      <AlertDialog>
        <AlertDialogTrigger>
          <RxHamburgerMenu className="md:hidden" size={25} />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogCancel
              ref={ref}
              className="w-full border-none relative "
            >
              <RxCross2 className="absolute right-5" size={25} />
            </AlertDialogCancel>
            <AlertDialogDescription>
              <div className="w-[50vh] text-black flex justify-end">
                <Accordion type="single" collapsible className="w-[46vh]">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Tools</AccordionTrigger>
                    <AccordionContent className="text-start px-5 flex flex-col gap-3">
                      <div>
                        <a href="/" className="font-bold">
                          Document Requirement
                        </a>
                        <p>
                          Requirement vary by country and repoter type. Use this
                          easy tool to find out what documents to submit.
                        </p>
                      </div>
                      <div>
                        <a href="/" className="font-bold">
                          Evalution Guldelines
                        </a>
                        <p>Evalution Guldelines</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Support</AccordionTrigger>
                    <AccordionContent className="text-start px-5 flex flex-col gap-3">
                      <div>
                        <a href="/" className="font-bold">
                          Pricing
                        </a>
                        <p>Check out IEE's low pricing.</p>
                      </div>
                      <div>
                        <a href="/" className="font-bold">
                          FAQ
                        </a>
                        <p>
                          Still have question? Check out our Frequently Asked
                          Question page to find the help you need.
                        </p>
                      </div>
                      <div>
                        <a href="/" className="font-bold">
                          Cantact us
                        </a>
                        <p>We are here to help.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AlertDialogDescription>
            <div className="flex justify-center gap-5 pt-5">
              <Button
                onClick={() => (window.location.href = "get-started")}
                className="bg-[#2aaae0] font-bold rounded-full"
              >
                Get started
              </Button>
              <Button variant={"outline"} className="font-bold rounded-full">
                Login
              </Button>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  );
}
