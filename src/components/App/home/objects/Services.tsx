import { Button } from "../../../ui/button";import { AiOutlineExclamationCircle } from "react-icons/ai";

// const reportHover = () => {
//   return (
//     <div className="absolute w-[15rem] left-[16rem] top-2 bg-white border p-4 text-xs rounded-lg">
//       This report identifies the institution(s) attended, dates of attendance,
//       credential(s) earned, and the United States educational equivalent
//     </div>
//   );
// };

export default function Services() {
  return (
    <section className=" my-10  gap-10 flex font-bold flex-col justify-center items-center">
      <h2 className="text-4xl ">Services and Fees</h2>
      <div className="flex  max-md:items-center max-md:flex-col gap-5">
        <div className="flex max-md:w-[95%] flex-col border gap-10 p-10  max-md:p-8 pr-32 rounded-2xl">
          <p className="text-xl flex items-center max-md:text-lg gap-2">
            Document Report{" "}
            <div
              className="tooltip  primary-content bg-white"
              data-tip="This report identifies the institution(s) attended, dates of
                attendance, credential(s) earned, and the United States
                educational equivalent"
            >
              <Button className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none ">
                <AiOutlineExclamationCircle
                  className="rotate-180 text-[#2aaae0]"
                  size={20}
                />
              </Button>
            </div>
          </p>
          <span className="text-[#2aaae0] text-3xl ">$95.00</span>
          <Button className="bg-[#2aaae0] font-bold rounded-full w-[8rem]">
            Get Started
          </Button>
        </div>
        <div className="flex flex-col border gap-10 p-10 pr-32 rounded-2xl max-md:p-8 max-md:w-[95%]">
          <p className="text-xl flex items-center max-md:text-lg gap-2">
            Education Course
            <div
              className="tooltip  primary-content bg-white"
              data-tip="This report identifies the institution(s) attended, dates of
                attendance, credential(s) earned, and the United States
                educational equivalent"
            >
              <Button className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none">
                <AiOutlineExclamationCircle
                  className="rotate-180 text-[#2aaae0]"
                  size={20}
                />
              </Button>{" "}
            </div>
          </p>
          <span className="text-[#2aaae0] text-3xl ">$185.00</span>
          <Button className="bg-[#2aaae0] font-bold rounded-full w-[8rem]">
            Get Started
          </Button>
        </div>
        <div className="flex flex-col border gap-10 p-10 pr-32 rounded-2xl relative  max-md:w-[95%]">
          <p className="text-xl flex items-center max-md:text-lg gap-2">
            Translations
            <div
              className="tooltip  primary-content bg-white"
              data-tip="This report identifies the institution(s) attended, dates of
                attendance, credential(s) earned, and the United States
                educational equivalent"
            >
              <Button className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none">
                <AiOutlineExclamationCircle
                  className="rotate-180 text-[#2aaae0]"
                  size={20}
                />
              </Button>
            </div>
          </p>

          <p className="text-[#2aaae0] text-3xl ">
            $60.00
            <span className="text-black text-lg ml-2 font-extralight">
              /page
            </span>
          </p>
          <Button className="bg-[#2aaae0] font-bold rounded-full w-[8rem]">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
