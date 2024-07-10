import { FaSortDown } from "react-icons/fa";
export default function Tools() {
  return (
    <section className="h-[50vh] mt-10 gap-10  flex justify-center flex-col items-center ">
      <h5 className="text-3xl max-md:text-2xl font-bold">Helpful tools</h5>
      <a href="/document-requirement" className="p-5 flex flex-col gap-5 w-[40%] rounded-lg border max-md:w-[90%] hover:scale-110 duration-100 transition-transform">
        <div className="w-full flex justify-between">
          <p className="text-2xl font-bold">Documentation</p>{" "}
          <FaSortDown className="text-[#2aaae0] rotate-[-90deg]" size={20} />
        </div>
        <p className="text-slate-700">
          Requirements vary by country and report type. Use this easy tool to
          find out what documents to submit.
        </p>
      </a>
    </section>
  );
}
