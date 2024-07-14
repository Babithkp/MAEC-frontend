import { RxCross2 } from "react-icons/rx";
import { Button } from "../ui/button";
export default function PaymentFailed() {
  return (
    <main className="flex justify-center items-center h-[70vh] flex-col gap-10">
      <section className="w-[30%] border-b-[2px] border-red-500 shadow-lg p-5 text-center flex flex-col max-md:w-[90%] items-center gap-5">
        <div className="w-[4rem] h-[4rem] bg-red-600 flex justify-center items-center rounded-full">
          <RxCross2 className="text-white" size={50} />
        </div>
        <h2 className="text-4xl font-medium">Your Payment failed</h2>
        <p className="text-lg font-medium">
          Try again later
        </p>
      </section>
      <Button className="bg-[#2aaae0]" onClick={()=>window.location.href = "/"}>
        Home
      </Button>
    </main>
  );
}
