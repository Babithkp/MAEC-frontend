import { useSetRecoilState } from "recoil";
import { Button } from "../../ui/button";
import { evalutonForm } from "../../../store/context";
import { ChangeEvent, useEffect, useState } from "react";
import { getDocumentByUserId, getUserEvalutionById } from "../../../http/fetch";

interface DocumentRate {
  courseByCourse: number;
  certificate: number;
  transcript: number;
}
interface DocumentQuantity {
  courseByCourse: string[];
  certificate: string[];
  transcript: string[];
}

export default function Pay() {
  const setPage = useSetRecoilState(evalutonForm);
  const [totalRate, setToatlRate] = useState(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [fileToTranslate, setFileToTranslate] = useState({
    translatationQuantity: 0,
    translationRate: 0,
    translationLang: "",
  });
  const [materialRate, setMaterialRate] = useState<DocumentRate>({
    courseByCourse: 0,
    certificate: 0,
    transcript: 0,
  });
  const [quantity, setQuantity] = useState<DocumentQuantity>({
    courseByCourse: [],
    certificate: [],
    transcript: [],
  });

  const agreeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    if (checked) {
      setIsChecked(checked);
    } else {
      setIsChecked(false);
    }
  };

  const nextButtonHandler = () => {
    if (isChecked) {
      console.log("checked");
    } else {
      setIsError("Check this box to proceed");
      setTimeout(() => {
        setIsError(null);
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
        const docResponse = await getDocumentByUserId({ userId: userId });
        const evaResponse = await getUserEvalutionById({ userId: userId });
        if (docResponse && evaResponse) {
          const docData = docResponse.data.data;
          const evaData = evaResponse.data.data;
          setQuantity(docData);
          const courseByCourseRate = docData.courseByCourse?.length * 12;
          const academicRate = docData.certificate?.length * 9;
          const transcriptRate = docData.transcript?.length * 9;

          setMaterialRate({
            courseByCourse: courseByCourseRate,
            certificate: academicRate,
            transcript: transcriptRate,
          });
          const docQunatity =
            docData.courseByCourse?.length +
            docData.certificate?.length +
            docData.transcript?.length;
          let translateRate = 0;
          if (evaData.language) {
            translateRate = docQunatity * 10;
            setFileToTranslate({
              translatationQuantity: docQunatity,
              translationLang: evaData.language,
              translationRate: translateRate,
            });
          }
          setToatlRate(
            courseByCourseRate +
              academicRate +
              transcriptRate +
              3.45 +
              translateRate
          );
        }
      }
    };
    fetch();
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
            <p className="max-md:w-1/2 w-[30%]">Course-by-Course Evaluation</p>
            <p>{quantity.courseByCourse.length} x</p>
            <p>${materialRate.courseByCourse}</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p className="max-md:w-1/2 w-[30%]">
              Academic credential verification
            </p>
            <p>{quantity.certificate.length} x</p>
            <p>${materialRate.certificate}</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p className="max-md:w-1/2 w-[30%]">Document transcript</p>
            <p>{quantity.transcript.length} x</p>
            <p>${materialRate.transcript}</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p className="max-md:w-1/2 w-[30%]">
              Language Translation{" "}
              {fileToTranslate.translationLang
                ? "(" + fileToTranslate.translationLang + ")"
                : ""}
            </p>
            <p>{fileToTranslate.translatationQuantity} x</p>
            <p>${fileToTranslate.translationRate}</p>
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
          All services selected are delivered via email in line with the service
          processing time.
        </p>
        <div className="flex items-start gap-5 mt-10 ">
          <input
            id="checkEdu"
            type="checkbox"
            name="radio-2"
            className=" checkbox checkbox-info [--chkfg:white]"
            onChange={agreeInputHandler}
          />
          <label
            htmlFor="checkEdu"
            className="flex justify-between w-full max-md:text-xs"
          >
            I AGREE TO THE TERMS AND CONDITIONS SET BY MAEC.
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
