import { useSetRecoilState } from "recoil";
import { Button } from "../../ui/button";
import { evalutonForm } from "../../../store/context";

export default function Pay() {
  const setPage = useSetRecoilState(evalutonForm);
  const nextButtonHandler = () => {
   
  };
  const prevButtonHandler = () => {
    setPage({
      informaton: { timeline: true, page: false },
      evaluations: { timeline: true, page: false },
      education: { timeline: true, page: false },
      delivery: { timeline: true, page: false },
      review: { timeline: true, page: true },
      pay: { timeline: false, page: false },
    });
  };
  return (
    <form className="px-10 max-md:p-0 flex flex-col gap-5 max-md:w-full w-[70%] md:border-l">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">Order Summary</h2>
        <div>
          <div className="w-full  flex justify-between p-3 pr-5 font-bold">
            <p className="md:mr-20">ITEM</p>
            <p className="md:ml-20">DESCRIPTION/QTY</p>
            <p>PRICE</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p className="">Education Document Report</p>
            <p>Education (US)</p>
            <p>$95.00</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p>3 Business Days - NOT GUARANTEED</p>
            <p> $0.00</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p>Email Delivery</p>
            <p>$0.00</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p>Transaction Conv. Fee</p>
            <p>$3.45</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p>Order Total:</p>
            <p className="font-bold">$98.45</p>
          </div>
        </div>
        
        <p>
          To pay by money order, contact Customer Service at (704) 772-0109.
          Orders paid by money order do not incur a transaction conv. fee.
        </p>
        <div className="flex items-start gap-5 mt-10 ">
          <input
            id="checkEdu"
            type="checkbox"
            name="radio-2"
            className=" checkbox checkbox-info [--chkfg:white]"
          />
          <label htmlFor="checkEdu" className="flex justify-between w-full">
            I AGREE TO THE TERMS AND CONDITIONS & REFUND POLICY SET BY MAEC.
          </label>
        </div>
      </div>
      <div className="w-full justify-end flex mt-5 gap-5">
        <Button
          variant={"outline"}
          className="border-[#2aaae0] font-bold rounded-full"
          onClick={prevButtonHandler}
          type="button"
        >
          Back
        </Button>
        <Button
          className="bg-[#2aaae0] font-bold rounded-full"
          onClick={nextButtonHandler}
          type="button"
        >
          Pay Now
        </Button>
      </div>
    </form>
  );
}
