import { Button } from "../ui/button";import webLogo from "/maec_full_logo.jpg";
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
} from "../ui/mobile-dialog";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function Navbar() {
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
    <nav
      className={`flex p-8 w-full justify-between ${
        isOnSignup ? "hidden" : ""
      }`}
    >
      <figure onClick={()=>window.location.href = "/"}>
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
            <a href="/evalutionService">Evalution</a>
          </li>
          <li>
            <a href="/transaction">Translation</a>
          </li>
          <li>
            <a href="/verification">Verification</a>
          </li>
          <li>
            <a href="/document-requirement">Document Requirement</a>
          </li>
          <li>
            <a href="/guidelines">Evalution Guldelines</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
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
            onClick={() => (window.location.href = "loggingIn")}
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
              className="w-full border-none relative "
            >
              <RxCross2 className="absolute right-5" size={25} />
            </AlertDialogCancel>
            <AlertDialogDescription>
              <div className="p-2 w-screen text-black flex justify-end">
                <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3">
                    <AccordionTrigger className="font-bold">By Service</AccordionTrigger>
                    <AccordionContent className="text-start px-5 flex flex-col gap-3">
                      <div>
                        <a href="/evalutionService" className="font-bold">
                          Evaluation
                        </a>
                        <p>
                          Determines your academic standing according to US
                          standards.
                        </p>
                      </div>
                      <div>
                        <a href="/transaction" className="font-bold">
                          Translation
                        </a>
                        <p>
                          Word-for-word translation from one language to another.
                        </p>
                      </div>
                      <div>
                        <a href="/verification" className="font-bold">
                          Verification
                        </a>
                        <p>Service for authenticating documents.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Tools</AccordionTrigger>
                    <AccordionContent className="text-start px-5 flex flex-col gap-3">
                      <div>
                        <a href="/document-requirement" className="font-bold">
                          Document Requirement
                        </a>
                        <p>
                          Requirement vary by country and repoter type. Use this
                          easy tool to find out what documents to submit.
                        </p>
                      </div>
                      <div>
                        <a href="/guidelines" className="font-bold">
                          Evalution Guldelines
                        </a>
                        <p>Evalution Guldelines.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Support</AccordionTrigger>
                    <AccordionContent className="text-start px-5 flex flex-col gap-3">
                      <div>
                        <a href="/pricing" className="font-bold">
                          Pricing
                        </a>
                        <p>Check out MAEC's low pricing.</p>
                      </div>
                      <div>
                        <a href="/contactus" className="font-bold">
                        Contact us
                        </a>
                        <p>Still have a question? We are here to help!</p>
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
              <Button
                variant={"outline"}
                className="font-bold rounded-full"
                onClick={() => (window.location.href = "loggingIn")}
              >
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
