import MAEClogo from "/msac_small_logo.png";
import { Button } from "../ui/button";
export default function NeedAssistance() {
  return (
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
            Get Started
          </Button>
        </div>
      </div>
    </article>
  );
}