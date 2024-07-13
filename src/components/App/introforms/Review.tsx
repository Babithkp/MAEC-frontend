import { useSetRecoilState } from "recoil";
import { Button } from "../../ui/button";
import { evalutonForm } from "../../../store/context";

export default function Review() { 
    const setPage = useSetRecoilState(evalutonForm);

    const nextButtonHandler = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setPage({
          informaton: { timeline: true, page: false },
          evaluations: { timeline: true, page: false },
          education: { timeline: true, page: false },
          delivery: { timeline: true, page: false },
          review: { timeline: true, page: false },
          pay: { timeline: true, page: true },
        });
      };
      const prevButtonHandler = () => {
        setPage({
          informaton: { timeline: true, page: false },
          evaluations: { timeline: true, page: false },
          education: { timeline: true, page: false },
          delivery: { timeline: true, page: true },
          review: { timeline: false, page: false },
          pay: { timeline: false, page: false },
        });
      };

    return (
    <form className="px-10 max-md:px-2 flex flex-col gap-5 max-md:w-full w-[70%] md:border-l">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">Review & Pay</h2>
        <div className="bg-[#e5f6fd] rounded-xl border-[#c6e1ea] border p-5">
          <p>
            All documents listed below must be sent to MyIEE for your evaluation
            report. Upon receipt and review of your credentials, MyIEE may
            require additional documentation. If so, we will contact you
          </p>
        </div>
        {/* <p className="font-bold">User Profile</p>
        <div className="flex justify-between flex-wrap gap-5 p-5 border">
          
            <div className="flex flex-col md:w-[40%]">
              <p>APPLICANT’S FULL NAME</p>
              <p className="font-medium">babith k p</p>
            </div>
            <div className="flex flex-col md:w-[40%]">
              <p>DATE OF BIRTH</p>
              <p className="font-medium">05/07/1990</p>
            </div>
            <div className="flex flex-col md:w-[40%]">
              <p>MAILING ADDRESS</p>
              <p className="font-medium">near some where, city, country</p>
            </div>
            <div className="flex flex-col md:w-[40%]">
              <p>MAILING ADDRESS</p>
              <p className="font-medium">babithkullachetti44@gmail.com</p>
            </div>
            <div className="flex flex-col md:w-[40%]">
              <p>GENDER</p>
              <p className="font-medium">Male</p>
            </div>
   
        </div> */}
        <p className="font-bold">Your Education</p>
        <div className="flex justify-between flex-wrap gap-5 p-5 border">
       
            <div className="flex flex-col  md:w-[40%]">
              <p>YOUR NAME ON CREDENTIAL</p>
              <p className="font-medium">babith k p</p>
            </div>
            <div className="flex flex-col  md:w-[40%]">
              <p>COUNTRY</p>
              <p className="font-medium">American Samoa</p>
            </div>
            <div className="flex flex-col  md:w-[40%]">
              <p>INSTITUTION TYPE</p>
              <p className="font-medium">Secondary/High School</p>
            </div>
            <div className="flex flex-col  md:w-[40%]">
              <p>YEAR AWARDED</p>
              <p className="font-medium">Not Completed</p>
            </div>
            <div className="flex flex-col  md:w-[40%]">
              <p>NAME OF DIPLOMA/CERTIFICATE</p>
              <p className="font-medium">cse</p>
            </div>
            <div className="flex flex-col  md:w-[40%]">
              <p>INSTITUTION</p>
              <p className="font-medium">west college</p>
            </div>
          
        </div>

        <p className="font-bold">Your Evaluation</p>
        <div className="flex flex-col flex-wrap gap-5 p-5 border">
          <div className="flex flex-col">
            <p>EVALUATION TYPE</p>
            <p className="font-medium flex md:w-1/2 justify-between">
              <span>Education Document Report (US)</span>
              <span>$95</span>
            </p>
          </div>
          <div className="flex flex-col">
            <p>TOTAL PRICE</p>
            <p className="font-medium">$95</p>
          </div>
        </div>

        <p className="font-bold">Expedited Service</p>
        <div className="flex flex-col flex-wrap gap-5 p-5 border">
          <div className="flex flex-col">
            <p>EXPIDITED SERVICE</p>
            <p className="font-medium flex w-full justify-between">
              3 Business Days - NOT GUARANTEED
            </p>
          </div>
          <div className="flex flex-col">
            <p>PROCESSING TIME</p>
            <p className="font-medium">3 Business Days - NOT GUARANTEED</p>
          </div>
          <div className="flex flex-col">
            <p>TOTAL PRICE</p>
            <p className="font-medium">$0</p>
          </div>
        </div>

        <p className="font-bold">RECIPIENT</p>
        <div className="flex flex-col flex-wrap gap-5 p-5 border">
          <div className="flex flex-col ">
            <p>RECIPIENT</p>
            <p className="font-medium">recipent name</p>
          </div>

          <div className="flex flex-col">
            <p>CHOOSE WHICH REPORT YOU WOULD LIKE TO SEND TO THIS RECIPIENT</p>
            <p className="font-medium">US Credential Evaluation</p>
          </div>
          <div className="flex flex-col">
            <p>DELIVERY METHOD</p>
            <p className="font-medium">Email Delivery</p>
          </div>
          <div className="flex flex-col">
            <p>ADDRESS</p>
            <p className="font-medium">ADDRESS of user</p>
          </div>
          <div className="flex flex-col">
            <p>EMAILED COPY</p>
            <p className="font-medium">($20)</p>
          </div>
          <div className="flex flex-col">
            <p>ADDITIONAL COPY</p>
            <p className="font-medium">N/A</p>
          </div>
          <div className="flex flex-col">
            <p>TOTAL PRICE</p>
            <p className="font-medium">$0</p>
          </div>
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
          Next
        </Button>
      </div>
    </form>
  );
}
