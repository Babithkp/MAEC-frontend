import naces from "/naces.png";
import map from "/half_globe.webp";
import blutCutLogo from "/blue_cut.svg";
import ieeLogo from "/maec_small_logo.jpg";
import { Button } from "../ui/button";
import stud1 from "/reviews/student3.jpg"
import stud2 from "/reviews/student4.jpg"
export default function Aboutus() {
  return (
    <main className="min-h-[80vh] flex-col flex justify-center items-center ">
      <section className="w-[80%] max-md:w-[95%] flex flex-col justify-center items-center text-center gap-10 overflow-hidden ">
        <span className="text-base flex items-end gap-5 font-medium">
          A MEMBER OF <img src={naces} alt="naces logo" />
        </span>
        <h1 className="text-4xl font-bold">
          We provide <span className="text-[#2aaae0]">evaluation</span> and{" "}
          <span className="text-[#2aaae0]">translation</span> services
        </h1>
        <p>
          Established in 1981, Maryland Academic Evaluation Center, LLC provides
          evaluation and translation services of foreign diplomas, certificates,
          and transcripts. Maryland Academic Evaluation Center, LLC is also a
          member of the National Association of Credential Evaluation Services
          [NACES]. We also offer services to the immigration industry. With over
          35 years of experience under our belt, our reports are used for
          immigration, education, employment, professional licensing, and
          teacher certification.
        </p>
        <figure className="w-[40rem] mt-5 h-[20rem]">
          <img
            src={map}
            alt="map of globe"
            className="w-full h-full object-cover"
          />
        </figure>
      </section>
      <section className="bg-[#f9fdff] flex w-full py-10 justify-center">
        <div className="w-[55%] max-md:w-[80%] text-center flex flex-col justify-center items-center gap-10">
          <img src={ieeLogo} alt="iee logo" className="w-[6rem]" />
          <h3 className="font-bold text-4xl">Our mission</h3>
          <p>
            MAEC advances the global mobility and integration of people into
            academic and professional settings by evaluating and advocating for
            the recognition of international educational qualifications and
            enabling individuals to fully utilize their education.
          </p>
        </div>
      </section>
      <section className="h-[80vh]  gap-10  flex justify-center flex-col items-center my-20">
        <img src={blutCutLogo} className="w-[30rem] max-md:w-[20rem]" />
        <h5 className="text-4xl max-md:text-center font-bold">
          Evaluation with the ‘Experienced’
        </h5>
        <p className="text-center w-[50%] max-md:w-[90%] ">
          Maryland Academic Evaluation Center has provided quality evaluation
          services for over 35 years. During this time we have prepared
          thousands of education reports on education performed outside the
          United States. Such reports have been used for immigration, education,
          employment, and professional licensing and certification. Our reports
          are accepted by hundreds of colleges and universities, the Agency for
          International Development of the U.S. Office of Education, the U.S.
          Department of Labor, and the U.S. Immigration and Naturalization
          Service.
        </p>
        <p className="text-center w-[50%] max-md:w-[90%] ">
          Our evaluations are accepted at hundreds of U.S. colleges and
          universities.
        </p>
      </section>
      <section className="flex my-10 max-md:gap-5 justify-around max-md:flex-col max-md:items-center bg-[#f9fdff] ">
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
                <img src={stud1} className="rounded-full w-[5rem] h-[5rem]" />
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
                MAEC EVALUATION IS simply Super. I like mainly customer support
                24/7 always they respond any time and evaluation time also very
                less and low price.
              </p>
              <p className="text-2xl font-bold">JENNIFER</p>
            </div>
          </div>
          <div className="border p-5 rounded-2xl flex max-md:flex-col max-md:items-center justify-between">
            <div className="flex justify-start items-center flex-col gap-3">
              <figure>
                <img src={stud2} className="rounded-full w-[5rem]" />
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
                Excellent and fast services. Very efficient chat service as
                well. I recommend MAEC and I'll use their services in the future
                again!
              </p>
              <p className="text-2xl font-bold">Alex</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-5 justify-center items-center my-10">
        <img src={ieeLogo} alt="iee logo" className="w-[6rem]" />
        <h3 className="font-bold text-4xl">Connect with us</h3>
        <p className="w-[60%] text-center">
          Our customer support team members are available to answer your
          questions 24 hours a day via chat, phone and email!
        </p>

        <Button
          variant={"outline"}
          className="border-[#2aaae0] font-bold rounded-full"
          onClick={() => (window.location.href = "/contactus")}
        >
          Contact Us
        </Button>
      </section>
    </main>
  );
}
