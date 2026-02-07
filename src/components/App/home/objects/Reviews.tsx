import srudent1img from "/reviews/student1.jpg";
import srudent2img from "/reviews/student2.jpg";

export default function Reviews() {
  return (
    <section className="flex my-10 max-md:gap-5 justify-around max-md:flex-col max-md:items-center">
      <div className="w-[20%] max-md:w-[90%] flex max-md:text-center flex-col gap-5 max-md:items-center">
        <h5 className="text-4xl font-bold max-md:text-xl ">
          What our customers say about us
        </h5>
      </div>
      <div className="w-[50%] max-md:w-[90%] flex flex-col gap-5">
        <div className="border p-5 rounded-2xl flex max-md:flex-col max-md:items-center justify-between">
          <div className="flex justify-start items-center flex-col gap-3">
            <figure>
              <img src={srudent1img} className="rounded-full w-[5rem]" />
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
            Very good service and fast delivery. I will use again if I need more official  translations.
            </p>
            <p className="text-2xl font-bold">Suzanne</p>
          </div>
        </div>
        <div className="border p-5 rounded-2xl flex max-md:flex-col max-md:items-center justify-between">
          <div className="flex justify-start items-center flex-col gap-3">
            <figure>
              <img src={srudent2img} className="rounded-full w-[5rem]" />
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
            Translation were excellent, fast and delivered on time. They were super helpful and able to assist in a very urgent matter… quality of their work was great… would definitely recommend ITS for any translation to German language.
            </p>
            <p className="text-2xl font-bold">Sara</p>
          </div>
        </div>
      </div>
    </section>
  );
}
