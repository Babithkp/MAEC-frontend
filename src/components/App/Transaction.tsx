import reviewStart from "/count-review.svg";
import reviewsimg from "/review3.svg";
import ieeLogo from "/maec_small_logo.jpg";
import { Button } from "../ui/button";
export default function Transaction() {
  return (
    <main className="flex flex-col items-center justify-center mb-10">
      <section className="w-[90%] max-md:w-[100%] font-medium">
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-center text-4xl font-bold ">
            MAEC Translation Services.
          </h1>
          <p className="text-center ">
            Get your Non-English official documents translated into English
            language by our certified translation services.
          </p>
        </div>
        <div className="p-5 flex-col flex gap-5 ">
          <p className="capitalize">
            Specialized in education and Legal documents: Birth certificate,
            marriage certificate, licenses and employment contracts.
          </p>
          <p className="font-bold">
            Translation of academic documents, birth certificates, Marriage
            certificates, and any other legal or official documents: $10 per
            documents.
          </p>
          <p>Processing Time: 3 business days.</p>
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
          We care about your success! Contact MAEC today for your translation
          needs, receive your 100% certified translation in no time!
        </p>
      </section>
      <section className="flex my-10 max-md:gap-5 justify-around max-md:flex-col max-md:items-center">
        <div className="w-[20%] max-md:w-[90%] flex max-md:text-center flex-col gap-5 max-md:items-center">
          <h5 className="text-4xl font-bold max-md:text-xl ">
            What our customers say about us
          </h5>
          <p className="">
            We have helped thousands of people just like you accomplish their
            dreams through education, licensing, military and employment. But
            don't just take our word for it. Take the word of these individuals
            who have trusted MAEC with their evaluation experience and want to
            share it with you.
          </p>
        </div>
        <div className="w-[50%] max-md:w-[90%] flex flex-col gap-5">
          <div className="border p-5 rounded-2xl flex max-md:flex-col max-md:items-center justify-between">
            <div className="flex justify-start items-center flex-col gap-3">
              <figure>
                <img src={ieeLogo} className="rounded-full w-[5rem]" />
              </figure>
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                />
              </div>
            </div>
            <div className="w-[80%] max-md:w-[90%] flex flex-col gap-5 max-md:text-center">
              <p className="text-slate-600 ">
                Very fast delivery, only within 3 days. And customer service is
                responsive.
              </p>
              <p className="text-2xl font-bold">Yasin</p>
            </div>
          </div>
          <div className="border p-5 rounded-2xl flex max-md:flex-col max-md:items-center justify-between">
            <div className="flex justify-start items-center flex-col gap-3">
              <figure>
                <img src={ieeLogo} className="rounded-full w-[5rem]" />
              </figure>
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-yellow-400"
                  disabled
                />
              </div>
            </div>
            <div className="w-[80%] max-md:w-[90%] flex flex-col gap-5 max-md:text-center">
              <p className="text-slate-600">
                Like the way you Translate and what you guys say is what you do .
                Like for example you stated that you will sent my original
                document back to me and you did. Thank you very much
              </p>
              <p className="text-2xl font-bold">Ruth</p>
            </div>
          </div>
        </div>
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
