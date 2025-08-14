import { Button } from "../ui/button";
import MAEClogo from "/msac_small_logo.png";
export default function Pricing() {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-[80%] text-center">
        <h1 className="text-4xl font-bold my-5 max-md:text-2xl">
          Pricing for Evaluation Reports, Verification Reports & Translation.
        </h1>
        <p className="mb-10">Check out our industry leading low prices!</p>
        <div className="">
          <article className="grid text-sm   mt-5 grid-cols-[16rem,10rem] w-full justify-center">
  
            <div className="bg-[#f5f5f5] rounded-lg p-2 grid col-span-full grid-cols-[15rem,10rem] justify-items-center items-center">
              <div className="border-b font-bold p-5 w-full h-full flex justify-center items-center">
                Evaluation Report
              </div>
              <div className="bg-white w-full h-full rounded-tl-lg border flex justify-center items-center text-xl font-bold text-[#2aaae0]">
                $12
              </div>

              <div className="border-b font-bold p-5 w-full h-full flex justify-center items-center">
                Verification Report
              </div>
              <div className="bg-white w-full h-full  border flex justify-center items-center text-xl font-bold text-[#2aaae0]">
                $10
              </div>

              <div className="border-b font-bold w-full p-5 h-full flex justify-center items-center">
                Translation
              </div>
              <div className="bg-white w-full h-full  border flex justify-center items-center text-xl font-bold text-[#2aaae0]">
                $10
              </div>
            </div>
          </article>
          <article className=" flex flex-col justify-center items-center w-full py-10 bg-[#f9fdff]">
      <div className="w-[60%] max-md:w-[90%] justify-center items-center gap-7 flex flex-col text-center">
        <img src={MAEClogo} alt="MAEC logo" className="w-[6rem]" />
        <h4 className="text-4xl font-bold text-black max-md:text-2xl">
          Need assistance?
        </h4>
        <p>
          Our customer support team members are available to answer your
          questions 24 hours a day via chat, phone and email!
        </p>
        <div className="gap-5 flex">
          <Button
          variant={"outline"}
            className="font-bold rounded-full border-[#2aaae0]"
            onClick={() => (window.location.href = "contactus")}
          >
            Contact Us
          </Button>
          <Button
            className="font-bold rounded-full bg-[#2aaae0]"
            onClick={() => (window.location.href = "get-started")}
          >
            Start Evaluation
          </Button>
        </div>
      </div>
    </article>
        </div>
      </section>
    </main>
  );
}
