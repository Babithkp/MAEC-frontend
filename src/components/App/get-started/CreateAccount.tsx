import blueMap from "../../../../public/mapwithbluebackgroung.jpg";
import ieeLogo from "../../../../public/IEElogo-White.png";
import { Button } from "../../ui/button";
import { FaSortDown } from "react-icons/fa";
export default function CreateAccount() {
  return (
    <main className="md:flex min-h-screen">
      <section className="md:w-[40%] relative text-white ">
        <img
          src={blueMap}
          alt="map"
          className="w-full h-full object-cover blur-[2px]"
        />
        <div className="absolute max-md:top-[2rem] max-md:left-[-4rem] top-[7rem] px-24 flex flex-col gap-5">
          <img src={ieeLogo} alt="iee logo" className="w-[10rem] max-md:w-[8rem]" />
          <h4 className="text-3xl max-md:text-xl font-bold">
            Get your evaluation in 5 days or less!
          </h4>
        </div>
      </section>
      <section className="md:w-[60%] h-screen max-md:p-3 max-md:px-5 p-14 px-16 md:overflow-y-scroll">
        <div className="flex w-full justify-between mb-10">
          <div>
            <Button
              className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none"
              onClick={() => (window.location.href = "/")}
            >
              <FaSortDown className="text-[#2aaae0] rotate-[90deg]" size={20} />
              <p className="text-black">Back to Home</p>
            </Button>
          </div>
          <div>
            <Button variant={"outline"} className="font-bold rounded-full">
              Login
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Let's get started!</h1>
          <div className="md:w-[60%]">
            <div className="border-b flex flex-col mb-5 gap-5">
              <label>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input type="email" required className="outline-none mb-5"/>
            </div>
            <div className="border-b flex flex-col mb-5 gap-5">
              <label>
                Confirm Email Address <span className="text-red-500">*</span>
              </label>
              <input type="email" required className="outline-none mb-5"/>
            </div>
            <div className="border-b flex flex-col mb-5 gap-5">
              <label>
                Password <span className="text-red-500">*</span>
              </label>
              <input type="email" required className="outline-none mb-5"/>
            </div>
            <div className="border-b flex flex-col mb-5 gap-5">
              <label>
              Confirm Password <span className="text-red-500">*</span>
              </label>
              <input type="email" required className="outline-none mb-5"/>
            </div>
            <Button className="bg-[#2aaae0] w-full rounded-full py-6">Create account</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
