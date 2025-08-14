import { Button } from "../ui/button";
import webLogo from "/msac_full_logo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn, FaSortDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

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
import { getUserProfileById } from "../../http/fetch";

export default function Navbar() {
  const [isOnSignup, setIsOnSignup] = useState(false);
  const [userName, setuserName] = useState<string | null>(null);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("usermail");
    window.location.reload();
  };

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

  useEffect(() => {
    if (localStorage.getItem("usermail") && localStorage.getItem("userId")) {
      const userMail = localStorage.getItem("usermail");
      const userId = localStorage.getItem("userId");
      const name = userMail?.split("@")[0];
      if (name) {
        setuserName(name);
      }
      const fetch = async ()=>{
        const response = await getUserProfileById({userId:userId})
        if(response){
          setuserName(response.data.data.first_name);
          localStorage.setItem("usermail",response.data.data.first_name)
        }
      }
      fetch()
    } else {
      setuserName(null);
    }
   
  }, []);

  return (
    <nav
      className={`flex p-8 w-full justify-between ${
        isOnSignup ? "hidden" : ""
      }`}
    >
      <a href="/">
        <img
          src={webLogo}
          alt="LOGO"
          loading="lazy"
          className="w-[12rem] max-md:w-[13rem]"
        />
      </a>
      <div className="justify-evenly items-center flex w-full max-md:hidden">
        <ul className="font-medium  flex gap-6 text-sm">
          <li>
            <a href="/evalutionService">Evaluation</a>
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
          {!userName && (
            <>
              <Button
                className="rounded-full bg-[#2aaae0]"
                onClick={() => (window.location.href = "/get-started")}
              >
                Get Started
              </Button>
              <Button
                variant={"outline"}
                className="rounded-full border-[1px] border-black"
                onClick={() => (window.location.href = "/loggingIn")}
              >
                Login
              </Button>
            </>
          )}
          {userName && (
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-[#2aaae0] font-bold rounded-full text-white px-3 p-2 flex justify-center items-center">
                {userName} <FaSortDown className=" pb-1" size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => (window.location.href = "/userDashboard")}
                >
                  My Dashboad
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => (window.location.href = "/get-started/Intro")}
                >
                  Evaluation
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logoutHandler}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
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
      <div className="md:hidden">
        <AlertDialog>
          <AlertDialogTrigger>
            <RxHamburgerMenu className="md:hidden" size={25} />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogCancel className="w-full border-none relative ">
                <RxCross2 className="absolute right-5" size={25} />
              </AlertDialogCancel>
              <AlertDialogDescription>
                <div className="p-2 w-screen text-black flex justify-end">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="font-bold  focus:no-underline">
                      Services
                      </AccordionTrigger>
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
                            Word-for-word translation from one language to
                            another.
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
                      <AccordionTrigger className="font-bold focus:no-underline">
                        Tools
                      </AccordionTrigger>
                      <AccordionContent className="text-start px-5 flex flex-col gap-3">
                        <div>
                          <a href="/document-requirement" className="font-bold">
                            Document Requirement
                          </a>
                          <p>
                            Requirement vary by country and repoter type. Use
                            this easy tool to find out what documents to submit.
                          </p>
                        </div>
                        <div>
                          <a href="/guidelines" className="font-bold">
                            Evaluation Guidelines
                          </a>
                          <p>Evaluation Guidelines.</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="font-bold focus:no-underline">
                        Support
                      </AccordionTrigger>
                      <AccordionContent className="text-start px-5 flex flex-col gap-3">
                        <div>
                          <a href="/pricing" className="font-bold">
                            Pricing
                          </a>
                          <p>Check out MSAC's low pricing.</p>
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
              {!userName && (
                <div className="flex justify-center gap-5 pt-5">
                  <Button
                    onClick={() => (window.location.href = "/get-started")}
                    className="bg-[#2aaae0] font-bold rounded-full"
                  >
                    Get started
                  </Button>
                  <Button
                    variant={"outline"}
                    className="font-bold rounded-full"
                    onClick={() => (window.location.href = "/loggingIn")}
                  >
                    Login
                  </Button>
                </div>
              )}

              {userName && (
                <DropdownMenu>
                  <DropdownMenuTrigger className="bg-[#2aaae0] font-bold rounded-full w-fit text-white px-3 ml-5 p-2 flex justify-center items-center">
                    {userName} <FaSortDown className=" pb-1" size={20} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() =>
                        (window.location.href = "/get-started/Intro")
                      }
                    >
                      Evaluation
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => (window.location.href = "/userDashboard")}
                    >
                      My Dashboard 
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={logoutHandler}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </AlertDialogHeader>
            <AlertDialogFooter></AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </nav>
  );
}
