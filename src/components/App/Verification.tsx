import { FaSortDown } from "react-icons/fa";import ieeLogo from "/maec_small_logo.jpg";
import NeedAssistance from "./com/NeedAssistance";
import { Button } from "../ui/button";
export default function Verification() {
  return (
    <main className="flex justify-center items-center flex-col">
      <section className="w-[90%] max-md:w-[100%] font-medium">
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-center text-4xl font-bold ">MAEC Verification</h1>
          <p className="text-center">
            Let’s begin with the primary purpose of verifying of academic
            credentials.
          </p>
        </div>
        <div className="p-5 flex-col flex gap-5">
          <h2 className="text-3xl font-bold">Academic Verification Report</h2>

          <p>
            The verification of degree certificates and transcripts is done to
            determine the authenticity of bachelors or masters degree
            certificate and transcript. This process proves to universities in
            the U.S that your academic credentials are genuine.
          </p>

          <p className="font-bold">
            The academic verification report includes:
          </p>
          <ul className="ml-5 list-disc">
            <li>Confirmation of academic institutions accreditation status.</li>
            <li>
              Confirmation of the student’s information with the academic
              institution.
            </li>
            <li>
              Confirmation of the authenticity of your degree certificate and
              transcript.
            </li>
            <li>Certificate Verification: $15</li>
            <li>Transcript Verification: $15</li>
          </ul>

          <p className="font-bold">How it works:</p>
          <ul className="ml-5 list-disc">
            <li>Create your account and login.</li>
            <li>
              Upload your degree certificate and transcript for verification
            </li>
            <li>
              Receive your verification report in your email within 7 business
              days.
            </li>
          </ul>
          <div className="w-full flex items-center justify-center my-10">
            <Button className="bg-[#2aaae0] font-bold rounded-full">
              Get started button
            </Button>
          </div>
        </div>
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
          <a href="/" className="text-[#2aaae0] font-bold flex items-center ">
            View more reviews{" "}
            <FaSortDown className="text-[#2aaae0] rotate-[-90deg]" size={20} />
          </a>
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
                I recently used International Education Evaluations for a
                foreign credential evaluation, and I was very impressed with
                their service. The entire process was smooth and efficient.
              </p>
              <p className="text-2xl font-bold">Sandra</p>
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
                Hello, My experience with your institution was very satisfying.
                I reviewed many institutions, and among them, yours not only had
                more reasonable prices but also prepared my certificate in a
                relatively short time- Tank you.
              </p>
              <p className="text-2xl font-bold">sahar</p>
            </div>
          </div>
        </div>
      </section>
      <NeedAssistance />
    </main>
  );
}
