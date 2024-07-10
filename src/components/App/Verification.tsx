import { FaSortDown } from "react-icons/fa";
import ieeLogo from "/maec_small_logo.jpg";
import NeedAssistance from "./com/NeedAssistance";
export default function Verification() {
  return (
    <main className="flex justify-center items-center flex-col">
      <section className="w-[90%] max-md:w-[100%] font-medium">
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-center text-4xl font-bold ">
            IEE Evaluation Services
          </h1>
          <p className="text-center">
            Let's begin with the primary purpose of your evaluation.
          </p>
        </div>
        <div className="p-5 flex-col flex gap-5">
          <h2 className="text-3xl font-bold">
            Course-By-Course Evaluation + GPA
          </h2>
          <p className="text-lg font-bold">$325.00</p>
          <p>For Education, Employment, Licensing and Certification</p>
          <p>
            ICD performs a course-by-course evaluation for post-secondary
            courses or degrees. Course-By-Course evaluations are for
            post-secondary (college/university) education only. High school
            level education will not be included in the course-by-course portion
            of the evaluation. However, the evaluation will include a statement
            of completion of High School education.
          </p>
          <p>The Course-by-Course Evaluation Report contains:</p>
          <ul className="ml-5 list-disc">
            <li>Verification of your identity</li>
            <li>All degrees/diplomas/certificates earned</li>
            <li>All institution(s) attended</li>
            <li>Time period(s) of study</li>
            <li>U.S. comparability of the foreign education credentials</li>
            <li>
              A listing of all courses with suggested U.S. semester credits and
              grades
            </li>
            <li>Grade point average (GPA)1 on a 4.0 scale</li>
          </ul>
          <p className="text-sm">
            If the transcript(s) submitted by the institution does not include
            grades or marks, ICD will not be able to calculate GPA.
          </p>
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
      <NeedAssistance/>
    </main>
  );
}