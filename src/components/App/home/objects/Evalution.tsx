import { Button } from "../../../ui/button";import ieeLogo from "/maec_small_logo.jpg";

export default function Evalution() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center gap-10">
      <figure>
        <img src={ieeLogo} className="w-[5rem]" />
      </figure>
      <h5 className="text-4xl font-bold max-md:text-2xl">
        Get an evaluation today
      </h5>
      <p className="w-[60%] max-md:w-[90%] text-center text-lg">
        Join the thousands of people just like you who have made MAEC their
        trusted evaluation service! We are here to answer your questions on
        chat, email and phone 24/7!
      </p>
      <Button className="bg-[#2aaae0] rounded-full">Start Evaluation</Button>
    </section>
  );
}
