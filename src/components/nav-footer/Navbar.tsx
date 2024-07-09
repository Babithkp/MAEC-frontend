import { Button } from "../ui/button";
import webLogo from "/IEElogo.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../components/ui/dialog";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function Navbar() {
  return (
    <nav className="flex p-8 w-full justify-between">
      <figure>
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
          <Button className="rounded-full bg-[#2aaae0]">Get Started</Button>
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

      <Dialog>
        <DialogTrigger className="md:hidden">
          <RxHamburgerMenu size={30} />
        </DialogTrigger>
        <DialogContent className="h-[105vh] absolute top-[21rem] left-[6rem]">
          <DialogHeader>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </nav>
  );
}
