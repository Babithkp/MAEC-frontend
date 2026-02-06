import mapImg from "/mapbackground.avif";import { Button } from "../../../ui/button";
export default function Home() {
  return (
    <section className=" w-full font-bold text-6xl max-md:text-3xl relative flex flex-col  items-center  gap-5">
      <img
        src={mapImg}
        alt="world map"
        loading="lazy"
        className="relative h-[80vh] w-full object-cover "
      />
      <div className="absolute top-[10%] flex w-[50%] flex-col items-center justify-center max-md:w-[80%] gap-5">
        <p className="text-base flex gap-5 font-medium items-center">
          A MEMBER OF <span className="text-4xl font-serif">BIBB</span>
        </p>
        <h1 className="text-center w-[90%]">
          Your Path to Success: Fast{" "}
          <span className="text-[#2aaae0]">3-Day</span> Document Translations, Flat Rate Guarantee!
        </h1>
          <Button className="bg-[#2aaae0] font-bold rounded-full p-6" onClick={()=>window.location.href = "get-started"}>
          Get Started
          </Button>
      </div>
    </section>
  );
}
