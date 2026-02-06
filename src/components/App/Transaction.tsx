import reviewStart from "/count-review.svg";
import reviewsimg from "/review3.svg";
import { Button } from "../ui/button";
export default function Transaction() {
  return (
    <main className="flex flex-col items-center justify-center mb-10">
      <section className="w-[90%] max-md:w-[100%] font-medium">
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-center text-4xl font-bold ">
          ITS Translation Services.
          </h1>
          <p className="text-center ">
          Get your official documents translated into German language by our certified translation services.
          </p>
        </div>
        <div className="p-5 flex-col flex gap-5 ">
          <p className="">
          Specialize in the translation official documents such as; Acdemic transcript and certificates, Birth Certificate, Marriage Certificate, official letters, bank statements, Application letters, Licenses and Employment Contracts etc.
          </p>
          <p className="">
          Translation Fee: €18 per document.
          </p>
          <p>
            Processing Time: <span className="font-bold">3 business days</span>.
          </p>
        </div>
      </section>
      <section className="w-[90%] max-md:w-[100%] font-medium p-5">
          <p>How It Works:</p>
          <ul className="list-disc ml-5">
            <li>Create your account and login.</li>
            <li>Upload your documents for translation.</li>
            <li>Pay the fee.</li>
            <li>Receive your translated documents in your email address in 3 business days.</li>
          </ul>
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
        We care about your success! Contact ITS today for your translation needs, receive your 100% certified translation in no time!
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
