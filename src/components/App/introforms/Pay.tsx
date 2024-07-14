import { useSetRecoilState } from "recoil";
import { Button } from "../../ui/button";
import { evalutonForm } from "../../../store/context";
import { ChangeEvent, useEffect, useState } from "react";
import { getDocumentByUserId } from "../../../http/fetch";

interface DocumentRate {
  courseByCourse: number;
  academicCredentail: number;
  translation: number;
}
interface DocumentQuantity {
  courseByCourse: string[];
  academicCredentail: string[];
  translation: string[];
}

export default function Pay() {
  const setPage = useSetRecoilState(evalutonForm);
  const [totalRate, setToatlRate] = useState(0)
  const [isChecked,setIsChecked] = useState<boolean>(false)
  const [isError,setIsError] = useState<string|null>(null)
  const [materialRate, setMaterialRate] = useState<DocumentRate>({
    courseByCourse: 0,
    academicCredentail: 0,
    translation: 0,
  });
  const [quantity, setQuantity] = useState<DocumentQuantity>({
    courseByCourse: [],
    academicCredentail: [],
    translation: [],
  });


  const agreeInputHandler = (event:ChangeEvent<HTMLInputElement>)=>{
    const checked = event.target.checked
    if(checked){
      setIsChecked(checked)
    }else{
      setIsChecked(false)
    }
  }



  const nextButtonHandler = () => {
    if(isChecked){
      console.log("checked");
      
    }else{
      setIsError("Check this box to proceed")
      setTimeout(() => {
        setIsError(null)
      }, 3000);
    }
  };
  const prevButtonHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage({
      informaton: { timeline: true, page: false },
      evaluations: { timeline: true, page: false },
      education: { timeline: true, page: true },
      pay: { timeline: false, page: false },
    });
  };

  useEffect(() => {
    const fetch = async () => {
      if (localStorage.getItem("userId")) {
        const userId = localStorage.getItem("userId");
        const response = await getDocumentByUserId({userId: userId});
        if (response) {
          const data = response.data;
          setQuantity(data.data);
          const courseByCourseRate = data.data.courseByCourse?.length * 12;
          const academicRate = data.data.academicCredentail?.length * 9;
          const translationRate = data.data.translation?.length * 9;
          setToatlRate(courseByCourseRate+translationRate+courseByCourseRate)
          setMaterialRate({
            courseByCourse: courseByCourseRate,
            academicCredentail: academicRate,
            translation: translationRate,
          });
        }
      }
    };
    fetch()
  }, []);

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
            <p className="">Course-by-Course Evaluation</p>
            <p>{quantity.courseByCourse.length} x</p>
            <p>${materialRate.courseByCourse}</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p>Academic credential verification</p>
            <p>{quantity.academicCredentail.length} x</p>
            <p>${materialRate.academicCredentail}</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p>Document Translation</p>
            <p>{quantity.translation.length} x</p>
            <p>${materialRate.translation}</p>
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
            <p className="font-bold">${totalRate}</p>
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
            onChange={agreeInputHandler}
          />
          <label htmlFor="checkEdu" className="flex justify-between w-full">
            I AGREE TO THE TERMS AND CONDITIONS & REFUND POLICY SET BY MAEC.
          </label>
        </div>
        {isError && <span className=" text-red-500 ">{isError}</span>}
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
