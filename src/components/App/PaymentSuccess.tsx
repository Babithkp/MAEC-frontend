import { TiTick } from "react-icons/ti";
import { Button } from "../ui/button";
export default function PaymentSuccess() {
  return (
    <main className="flex justify-center items-center h-[70vh] flex-col gap-10">
      <section className="w-[30%] border-b-[2px] border-green-500 shadow-lg p-5 text-center flex flex-col max-md:w-[90%] items-center gap-5">
        <div className="w-[4rem] h-[4rem] bg-green-600 flex justify-center items-center rounded-full">
          <TiTick className="text-white" size={50} />
        </div>
        <h2 className="text-4xl font-medium">Your Payment was successful</h2>
        <p>
          Thank you for your payment. we will be in contact with more details
          shortly
        </p>
      </section>
      <Button className="bg-[#2aaae0]" onClick={()=>window.location.href = "/"}>
        Home
      </Button>
    </main>
  );
}
