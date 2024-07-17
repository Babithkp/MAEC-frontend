import { Button } from "../ui/button";
import MAEClogo from "/maec_small_logo.jpg";

export default function EvalutionService() {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-[90%] max-md:w-[100%] font-medium">
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-center text-4xl font-bold ">
            MAEC Transcript Evaluation
          </h1>
          <p className="text-center">
            Let’s begin with primary purpose of your Academic transcript
            evaluation.
          </p>
        </div>
        <div className="p-5 flex-col flex gap-5">
          <h2 className="text-3xl font-bold ">
            Course-By-Course Evaluation + GPA
          </h2>
          <p>
            A course-by-course evaluation determines the U.S. equivalency for
            courses and grades obtained at colleges and universities outside of
            the United States. Most universities in the U.S requires that all
            candidates with a bachelors or masters degree from an international
            university must submit a full course-by-course evaluation of their
            transcripts.
          </p>
          <p className="font-bold ">The Course-by-Course Evaluation Report contains:</p>
          <ul className="ml-5 list-disc flex flex-col gap-3">
            <li>U.S. comparability of the foreign education credentials.</li>
            <li>
              A listing of all courses with the equivalent U.S. semester credits
              and grades.
            </li>
            <li>Grade point average (GPA)1 on a 4.0 scale.</li>
            <li>U.S equivalent of final cumulative GPA.</li>
            <li>U.S. comparability of the foreign education credentials</li>
          </ul>
          <p className="font-bold ">Course-By-Course Evaluation fee: $12</p>
          <p className="font-bold mt-5">How it works:</p>
          <ul className="ml-5 list-disc">
            <li>Create your account and enter your information.</li>
            <li>Upload the orginal scanned copy of your transcripts.</li>
            <li>Pay the evaluation fee.</li>
            <li>
              Recieve your transcript evaluation report in your email in 3
              business days.
            </li>
          </ul>

          <p className="text-sm">
            If the transcript submitted does not include grades or marks,
            MAEC will not be able to calculate GPA.
          </p>

          <div className="w-full flex items-center justify-center my-10">
            <Button className="bg-[#2aaae0] font-bold rounded-full" onClick={() => (window.location.href = "get-started")}>Start Evaluation</Button>
          </div>
        </div>
      </section>
  
      <article className=" flex flex-col justify-center items-center w-full py-10 bg-[#f9fdff]">
      <div className="w-[60%] max-md:w-[90%] justify-center items-center gap-7 flex flex-col text-center">
        <img src={MAEClogo} alt="MAEC logo" className="w-[6rem]" />
        <h4 className="text-4xl font-bold text-black max-md:text-2xl">
          Need assistance?
        </h4>
        <p>
          Our customer support team members are available to answer your
          questions 24 hours a day via chat, phone and email!
        </p>
        <div className="gap-5 flex">
          <Button
            variant={"outline"}
            className="font-bold rounded-full border-[#2aaae0]"
            onClick={() => (window.location.href = "contactus")}
          >
            Contact Us
          </Button>
          <Button
            className="font-bold rounded-full bg-[#2aaae0]"
            onClick={() => (window.location.href = "get-started")}
          >
            Start Evaluation
          </Button>
        </div>
      </div>
    </article>
    </main>
  );
}
