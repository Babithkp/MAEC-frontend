import { FaSortDown } from "react-icons/fa";
import ieeLogo from "/maec_small_logo.jpg";
export default function Reviews() {
  return (
    <section className="flex my-10 max-md:gap-5 justify-around max-md:flex-col max-md:items-center">
      <div className="w-[20%] max-md:w-[90%] flex max-md:text-center flex-col gap-5 max-md:items-center">
        <h5 className="text-4xl font-bold max-md:text-xl ">What our customers say about us</h5>
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
              Thank you so much for such a great service, your customer service
              is also one in a million, very nice, kind and responsive! I got a
              great guidance before, during and after my evaluation was
              completed. Keep it up!
            </p>
            <p className="text-2xl font-bold">Suzanne</p>
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
              Thanks a lot MAEC. I had a great experience with your company. I
              expected to get my documents in 3- 5 business days but recievd
              those just in one day.
            </p>
            <p className="text-2xl font-bold">Sara</p>
          </div>
        </div>
      </div>
    </section>
  );
}
