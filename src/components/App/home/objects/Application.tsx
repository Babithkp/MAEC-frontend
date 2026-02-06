import { Button } from "../../../ui/button";import processImg from "/process.png";

export default function Application() {
  return (
    <section className=" bg-[#f9fdff] ">
      <div className="flex p-20 max-md:p-10 gap-10 justify-center items-center max-md:flex-col">
        <div className="w-1/2 max-md:w-full flex flex-col gap-5 max-md:items-center">
          <h5 className="text-3xl font-bold  max-md:text-2xl">How It Works</h5>
          <p className="max-md:text-center">
          Getting your document translated is easy with ITS. Our streamlined digital process means you stay informed every step of the way and receive your documents in 3 days!
          </p>
          <Button className="bg-[#2aaae0] rounded-full w-fit" onClick={() => (window.location.href = "get-started")}>Apply now</Button>
        </div>
        <figure className="w-1/2 max-md:hidden">
          <img src={processImg} className="w-full h-full" />
        </figure>
        <div className="flex flex-col text-center gap-10 justify-center text-xl font-semibold md:hidden">
          <div>
            <span className="text-5xl text-[#caeefd]">01</span>
            <p >Create an account</p>
          </div>
          <div>
            <span className="text-5xl text-[#caeefd]">02</span>
            <p >Enter your details</p>
          </div>
          <div>
            <span className="text-5xl text-[#caeefd]">03</span>
            <p >Upload documents</p>
          </div>
          <div>
            <span className="text-5xl text-[#caeefd]">04</span>
            <p >Recieve documents</p>
          </div>
        </div>
      </div>
    </section>
  );
}
