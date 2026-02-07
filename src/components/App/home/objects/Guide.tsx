import { Button } from "../../../ui/button"; import { IoDocumentTextOutline } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import siginGif from "/Login.gif";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GoGlobe } from "react-icons/go";
export default function Guide() {
  return (
    <section className="  flex justify-center flex-col items-center mt-10 overflow-hidden">
      <div className="flex w-[70%] max-md:w-[90%] max-md:flex-col">
        <div className="w-1/2 max-md:w-full flex flex-col gap-5 max-md:items-center">
          <h3 className="text-4xl max-md:text-2xl font-medium">
            ITS makes it easy
          </h3>
          <Button
            className="flex gap-7 py-10 max-md:w-full w-[80%] hover:bg-transparent hover:border hover:border-[#2aaae0] hover:scale-110 duration-100 transition-transform"
            variant={"outline"} onClick={() => (window.location.href = "get-started")}
          >
            <div className="p-2 bg-[#e4f8ff] rounded-lg">
              <GoGlobe size={20} className="w-[2rem] h-[2rem]" />
            </div>
            <p className="flex text-base justify-between items-center">
              I need a Translation
              <div
                className="tooltip  primary-content "
                data-tip="world-for-word translation from one language to another."
              >
                <div className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none">
                  <AiOutlineExclamationCircle
                    className="rotate-180 text-[#2aaae0]"
                    size={20}
                  />
                </div>
              </div>
            </p>
            <div>
              <FaSortDown
                className="text-[#2aaae0] rotate-[-90deg]"
                size={20}
              />
            </div>
          </Button>
          <Button
            className="flex gap-7 py-10  max-md:w-full w-[80%] hover:bg-transparent hover:border hover:border-[#2aaae0] hover:scale-110 duration-100 transition-transform"
            variant={"outline"} onClick={() => (window.location.href = "get-started")}
          >
            <div className="p-2 bg-[#e4f8ff] rounded-lg">
              <IoDocumentTextOutline size={20} className="w-[2rem] h-[2rem]" />
            </div>
            <p className="flex text-base justify-between items-center">
              I need an verification
              <div
                className="tooltip  primary-content "
                data-tip="Determlnes your academic standing according to US standards"
              >
                <div className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none">
                  <AiOutlineExclamationCircle
                    className="rotate-180 text-[#2aaae0]"
                    size={20}
                  />
                </div>
              </div>
            </p>
            <div>
              <FaSortDown
                className="text-[#2aaae0] rotate-[-90deg]"
                size={20}
              />
            </div>
          </Button>

          <Button
            className="flex gap-7 py-10 max-md:w-full w-[80%] hover:bg-transparent hover:border hover:border-[#2aaae0] hover:scale-110 duration-100 transition-transform"
            variant={"outline"} onClick={() => (window.location.href = "get-started")}
          >
            <div className="p-2 bg-[#e4f8ff] rounded-lg ">
              <GoGlobe size={20} className="w-[2rem] h-[2rem]" />
            </div>
            <p className="flex text-base justify-between items-center">
              I need a Verification
              <div
                className="tooltip  primary-content "
                data-tip="world-for-word translation from one language to another."
              >
                <div className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none">
                  <AiOutlineExclamationCircle
                    className="rotate-180 text-[#2aaae0]"
                    size={20}
                  />
                </div>
              </div>
            </p>
            <div>
              <FaSortDown
                className="text-[#2aaae0] rotate-[-90deg]"
                size={20}
              />
            </div>
          </Button>
          <p>
            Not sure which service you need? Let’s get you started within no
            time!{" "}
          </p>
          <Button
            variant={"outline"}
            className="border border-[#2aaae0] w-fit rounded-full font-bold" onClick={() => (window.location.href = "get-started")}
          >
            Get started
          </Button>
        </div>
        <figure className="w-[50%] h-full max-md:w-full">
          <img src={siginGif} className="w-full h-full object-cover" />
        </figure>
      </div>
    </section>
  );
}
