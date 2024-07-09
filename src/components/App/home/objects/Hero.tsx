import mapImg from "../../../../../public/mapbackground.avif";import { Button } from "../../../ui/button";
import naces from "/naces.png"
export default function Home() {
  return (
    <section className="font-bold text-6xl max-md:text-3xl relative flex flex-col justify-center items-center h-[80vh] max-md:h-[60vh] gap-5">
      <img
        src={mapImg}
        alt="world map"
        loading="lazy"
        className="absolute  w-full h-full object-cover"
      />
      <span className="text-base flex items-end gap-5 font-medium z-[1]">A MEMBER OF  <img src={naces} alt="naces logo"/></span>
      <h1 className="text-center w-[90%] z-[1]">
        Your Path to Success: Fast <span className="text-[#2aaae0]">3-Day</span>{" "}
        Credential Evaluations, Flat Rate Guarantee!
      </h1>
      <div className="flex gap-3 z-[1]">
        <Button className="bg-[#2aaae0] font-bold rounded-full p-6">Start Evaluation</Button>
        <Button variant={"outline"} className="border-[#2aaae0] bg-transparent font-bold rounded-full p-6">Read Reviews</Button>
      </div>
    </section>
  );
}
