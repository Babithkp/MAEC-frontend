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
          <ul className="ml-5 list-disc flex flex-col gap-3">
            <li>
              Confirmation of academic institution’s accreditation status.
            </li>
            <li>
              Confirmation of the student’s information with the academic
              institution.
            </li>
            <li>
              Confirmation of the authenticity of your degree certificate and
              transcript.
            </li>
          </ul>
          <p className="font-bold my-1">Certificate Verification: $10.</p>
          <p className="font-bold my-1">Transcript Verification: $10.</p>
          <p className="font-bold my-1">How it works:</p>
          <ul className="ml-5 list-disc flex flex-col gap-3">
            <li>Create your account and login.</li>
            <li>
              Upload your degree certificate and transcript for verification.
            </li>
            <li>
              Receive your verification report in your email within 7 business
              days.
            </li>
          </ul>
          <div className="w-full flex items-center justify-center my-10">
            <Button className="bg-[#2aaae0] font-bold rounded-full">
              Get started
            </Button>
          </div>
        </div>
      </section>
      <section className="flex my-10 max-md:gap-5 justify-center max-md:flex-col items-center">
        <div className="w-[90%] flex text-center flex-col gap-5 items-center">
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
      </section>
      <NeedAssistance />
    </main>
  );
}
