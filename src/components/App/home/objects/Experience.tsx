import { Button } from "../../../ui/button";
import Blue_cut from "./Blue_cut";

export default function Experience() {
  return (
    <section className="h-[80vh]  mt-10 gap-10  flex justify-center flex-col items-center bg-[#f9fdff]">
      <div className="md:scale-150">
        <Blue_cut />
      </div>
      <h5 className="text-4xl max-md:text-center font-bold">Translation with the ‘Experienced’</h5>
      <p className="text-center w-[50%] max-md:w-[90%]">
        To celebrate the premium service of our 20 years in business, ITS has launched 3 day standard processing time after receipt and approval of your documents. This means you are 3 days closer to that school acceptance letter, admission applications, job offer or visa approval in Germany.
      </p>
      <Button className="bg-[#2aaae0] rounded-full" onClick={() => (window.location.href = "get-started")}>Start Translation</Button>
    </section>
  );
}
