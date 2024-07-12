import NeedAssistance from "./com/NeedAssistance";export default function Pricing() {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-[80%] text-center">
        <h1 className="text-4xl font-bold my-5 max-md:text-2xl">
          Pricing for Evaluation Reports, Verification Reports & Translation.
        </h1>
        <p className="mb-10">Check out our industry leading low prices!</p>
        <div className="">
          <article className="grid text-sm   mt-5 grid-cols-[16rem,10rem] grid-rows-[3rem,1fr] w-full justify-center">
            <div className="col-start-2 p-5 col-span-full flex justify-around w-full bg-[#f5f5f5] mb-5 rounded-2xl items-center font-bold">
              <p></p>
              <p>Education</p>
            </div>
            <div className="bg-[#f5f5f5] rounded-lg p-2 grid col-span-full grid-cols-[15rem,10rem] justify-items-center items-center">
              <div className="border-b font-bold p-5 w-full h-full flex justify-center items-center">
                Evaluation Report
              </div>
              <div className="bg-white w-full h-full rounded-tl-lg border flex justify-center items-center text-xl font-bold text-[#2aaae0]">
                $25
              </div>

              <div className="border-b font-bold p-5 w-full h-full flex justify-center items-center">
                Verification Report
              </div>
              <div className="bg-white w-full h-full  border flex justify-center items-center text-xl font-bold text-[#2aaae0]">
                $15
              </div>

              <div className="border-b font-bold w-full p-5 h-full flex justify-center items-center">
                Translation
              </div>
              <div className="bg-white w-full h-full  border flex justify-center items-center text-xl font-bold text-[#2aaae0]">
                $20
              </div>
            </div>
          </article>
          <NeedAssistance />
        </div>
      </section>
    </main>
  );
}
