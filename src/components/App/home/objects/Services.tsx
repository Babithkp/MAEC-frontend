import { Button } from "../../../ui/button";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function Services() {
  return (
    <section className=" my-10  gap-10 flex font-bold flex-col justify-center items-center">
      <h2 className="text-4xl ">Services and Fees</h2>
      <div className="flex w-[95%] justify-center items-center max-md:flex-col gap-5">
        <div className="flex max-md:w-[95%]  flex-col border gap-10 p-10  max-md:p-8 pr-32 rounded-2xl">
          <p className="text-xl flex items-center max-md:text-lg gap-2">
            Transcript Evaluation.
            <div
              className="tooltip  primary-content bg-white"
              data-tip="Determines your academic standing according to US standards"
            >
              <Button className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none ">
                <AiOutlineExclamationCircle
                  className="rotate-180 text-[#2aaae0]"
                  size={20}
                />
              </Button>
            </div>
          </p>
          <p className="text-sm font-medium">
            A course-by-course evaluation determines the U.S. equivalency for
            courses and grades obtained at colleges and universities outside of
            the United States.
          </p>
          <Button className="bg-[#2aaae0] font-bold rounded-full w-[8rem]">
            Get Started
          </Button>
        </div>
        <div className="flex flex-col border gap-10 p-10 pr-32 rounded-2xl max-md:p-8 max-md:w-[95%]">
          <p className="text-xl flex items-center max-md:text-lg gap-2">
            Document Verification
            <div
              className="tooltip  primary-content bg-white"
              data-tip="This report proves that your academic documents are genuine."
            >
              <Button className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none">
                <AiOutlineExclamationCircle
                  className="rotate-180 text-[#2aaae0]"
                  size={20}
                />
              </Button>{" "}
            </div>
          </p>
          <p className="text-sm font-medium">
            This a process that verifies the authenticity of your academic
            certificate and transcript.
          </p>
          <Button className="bg-[#2aaae0] font-bold rounded-full w-[8rem]">
            Get Started
          </Button>
        </div>
        <div className="flex flex-col border gap-10 p-10 pr-32 rounded-2xl relative  max-md:w-[95%]">
          <p className="text-xl flex items-center max-md:text-lg gap-2">
            Translations
            <div
              className="tooltip  primary-content bg-white"
              data-tip="Word-for-word translation from one language to another"
            >
              <Button className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none">
                <AiOutlineExclamationCircle
                  className="rotate-180 text-[#2aaae0]"
                  size={20}
                />
              </Button>
            </div>
          </p>
          <p className="text-sm font-medium">
            The official certified translation of academic credentials from
            another language to English.
          </p>

          <Button className="bg-[#2aaae0] font-bold rounded-full w-[8rem]">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
