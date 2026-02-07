import { Button } from "../../../ui/button";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../ui/tooltip"
import { useState } from "react";

export default function Services() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  return (
    <section className=" my-10  gap-10 flex font-bold flex-col justify-center items-center overflow-hidden">
      <h2 className="text-4xl ">Services</h2>
      <div className="flex w-[95%] justify-center items-center max-md:flex-col gap-5">
        <div className="flex max-md:w-[95%]  flex-col border gap-10 p-10  max-md:p-8 pr-32 rounded-2xl">
          <p className="text-xl flex items-center max-md:text-lg gap-2">
            German Translations
            <Tooltip open={open} onOpenChange={setOpen}>
              <TooltipTrigger asChild>
                <Button
                  className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <AiOutlineExclamationCircle
                    className="rotate-180 text-[#2aaae0]"
                    size={20}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white p-2 px-5 text-center">
                <p>Determines your academic <br />standing according to US standards</p>
              </TooltipContent>
            </Tooltip>
          </p>
          <p className="text-sm font-medium">
            The official certified translation of a document from one language to German language.
          </p>
          <Button
            className="bg-[#2aaae0] font-bold rounded-full w-[8rem]"
            onClick={() => (window.location.href = "/evalutionService")}
          >
            Get Started
          </Button>
        </div>
        <div className="flex flex-col border gap-10 p-10 pr-30 rounded-2xl max-md:p-8 max-md:w-[95%]">
          <p className="text-xl flex items-center max-md:text-lg gap-2">
            Document Authentication
            <Tooltip open={open2} onOpenChange={setOpen2} >
              <TooltipTrigger asChild>
                <Button
                  className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none"
                  onClick={() => setOpen2((prev) => !prev)}
                >
                  <AiOutlineExclamationCircle
                    className="rotate-180 text-[#2aaae0]"
                    size={20}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white p-2 px-5 text-center">
                <p>This report proves that <br />your academic documents are genuine.</p>
              </TooltipContent>
            </Tooltip>
          </p>
          <p className="text-sm font-medium">
            This is a process that verifies the authenticity of your official documents and credentials.
          </p>
          <Button
            className="bg-[#2aaae0] font-bold rounded-full w-[8rem]"
            onClick={() => (window.location.href = "/verification")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
