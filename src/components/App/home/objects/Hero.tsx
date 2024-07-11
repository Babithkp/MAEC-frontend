import mapImg from "/mapbackground.avif";import { Button } from "../../../ui/button";
import naces from "/naces.png";
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
        <span className="text-base flex items-end gap-5 font-medium">
          A MEMBER OF <img src={naces} alt="naces logo" />
        </span>
        <h1 className="text-center w-[90%]">
          Your Path to Success: Fast{" "}
          <span className="text-[#2aaae0]">5-Day</span> Credential Evaluations,
          Flat Rate Guarantee!
        </h1>
          <Button className="bg-[#2aaae0] font-bold rounded-full p-6" onClick={()=>window.location.href = "get-started"}>
          Start Evaluation
          </Button>
      </div>
    </section>
  );
}
