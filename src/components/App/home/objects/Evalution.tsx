import { Button } from "../../../ui/button";import ieeLogo from "/msac_small_logo.png";

export default function Evalution() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center gap-10">
      <figure>
        <img src={ieeLogo} className="w-[5rem]" />
      </figure>
      <h5 className="text-4xl font-bold max-md:text-2xl">
      Get started today
      </h5>
      <p className="w-[60%] max-md:w-[90%] text-center text-lg">
      Join the thousands of people just like you who have made ITS their trusted translation service! We are here to answer your questions on chat, email ..24/7!
      </p>
      <Button className="bg-[#2aaae0] rounded-full" onClick={() => (window.location.href = "get-started")}>Get started</Button>
    </section>
  );
}
