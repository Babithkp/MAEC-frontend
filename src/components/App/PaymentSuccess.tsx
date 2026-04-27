import { TiTick } from "react-icons/ti";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { capturePaypalPayment, compeltePayment } from "../../http/fetch";

export default function PaymentSuccess() {
  useEffect(() => {
    async function fetch() {
      try {
        const params = new URLSearchParams(window.location.search);
        const orderId = params.get("token");
        
        if (orderId) {
          const response = await capturePaypalPayment({ id: orderId });
          if (response.status === 200) {
            if (localStorage.getItem("userId")) {
              const userId = localStorage.getItem("userId");
              const req = await compeltePayment({ id: userId, order_id: orderId });
              if (req.status === 200) {
                window.location.href = "/";
              }
            }
          }
        } else{
          if (localStorage.getItem("userId")) {
            const userId = localStorage.getItem("userId");
            const req = await compeltePayment({ id: userId, order_id: "00" });
            if (req.status === 200) {
              window.location.href = "/";
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetch();
  }, []);
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
      <Button
        className="bg-primary"
        onClick={() => (window.location.href = "/")}
      >
        Home
      </Button>
    </main>
  );
}
