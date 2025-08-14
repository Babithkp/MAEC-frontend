import reviewStart from "/count-review.svg";
import reviewsimg from "/review3.svg";
import { Button } from "../ui/button";
export default function Transaction() {
  return (
    <main className="flex flex-col items-center justify-center mb-10">
      <section className="w-[90%] max-md:w-[100%] font-medium">
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-center text-4xl font-bold ">
            MSAC Translation Services.
          </h1>
          <p className="text-center ">
            Get your Non-English official documents translated into English
            language by our certified translation services.
          </p>
        </div>
        <div className="p-5 flex-col flex gap-5 ">
          <p className="">
            Specialize in the translation of education and official documents
            such as; Acdemic transcript, Birth Certificate, Marriage
            Certificate, Licenses and Employment Contracts etc.
          </p>
          <p className="">
          Translation Fee: $10 per document.
          </p>
          <p>
            Processing Time: <span className="font-bold">3 business days</span>.
          </p>
        </div>
      </section>
      <section className="w-[50%] max-md:w-[90%] flex flex-col gap-10 items-center justify-center  my-10">
        <div className="font-bold text-2xl max-md:text-xl md:flex gap-5">
          <p>
            <span className="text-[#2aaae0]">300,000</span> translated documents
          </p>
          <p>
            <span className="text-[#2aaae0]">9,000+</span> happy clients
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <img src={reviewStart} alt="total reviws" className="w-[6rem]" />
          <img
            src={reviewsimg}
            alt="total reviws"
            className="border-l border-black p-3 w-[10rem]"
          />
        </div>
        <p className="text-center">
          We care about your success! Contact MSAC today for your translation
          needs, receive your 100% certified translation in no time!
        </p>
      </section>

      <div>
        <Button
          className="font-bold rounded-full bg-[#2aaae0]"
          onClick={() => (window.location.href = "get-started")}
        >
          Start Translation
        </Button>
      </div>
    </main>
  );
}
