import { useSetRecoilState } from "recoil";import { Button } from "../../ui/button";
import { evalutonForm } from "../../../store/context";
import { ChangeEvent, useEffect, useState } from "react";
import {
  addTotalAmt,
  getDocumentByUserId,
  // makePaymentPaypal,
  makePaymentStripe,
} from "../../../http/fetch";
import { Backdrop, CircularProgress } from "@mui/material";

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

interface PaymentItemType {
  name: string;
  amount: number;
  quantity: number;
}

export default function Pay() {
  const setPage = useSetRecoilState(evalutonForm);
  const [totalRate, setToatlRate] = useState(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [paymentdata, setPaymentData] = useState<PaymentItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoadingPay, setIsLoadingPay] = useState(false);

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

  // const paypalButtonHandler = async () => {
  //   if (isChecked) {
  //     setIsLoadingPay(true);
  //     if (localStorage.getItem("userId")) {
  //       const userId = localStorage.getItem("userId");
  //       const totalAmount = paymentdata.reduce(
  //         (total, pay) => total + pay.amount * pay.quantity,
  //         0
  //       );
  //       const updadtedresponse = await addTotalAmt({
  //         id: userId,
  //         totalAmt: totalAmount,
  //       });
  //       const response = await makePaymentPaypal({ data: paymentdata });
  //       if (response || updadtedresponse) {
  //         console.log(updadtedresponse);
  //         window.location.href = response.data;
  //       }
  //     }
  //   } else {
  //     setIsError("Check this box to proceed");
  //     setTimeout(() => {
  //       setIsError(null);
  //     }, 3000);
  //   }
  //   setIsLoadingPay(false);
  // };

  const stripeButtonHandler = async () => {
    if (isChecked) {
      setIsLoading(true);
      try {
        if (localStorage.getItem("userId")) {
          const userId = localStorage.getItem("userId");
          const totalAmount = paymentdata.reduce(
            (total, pay) => total + pay.amount * pay.quantity,
            0
          );
          const updadtedresponse = await addTotalAmt({
            id: userId,
            totalAmt: totalAmount,
          });

          const response = await makePaymentStripe({ data: paymentdata });
          if (response && updadtedresponse) {
            window.location.href = response.data.url;
            console.log(response);
            console.log(updadtedresponse);
          }
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsError("Check this box to proceed");
      setTimeout(() => {
        setIsError(null);
      }, 3000);
    }
    setIsLoading(false);
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
        setIsFetch(true);
        const docResponse = await getDocumentByUserId({ userId: userId });
        setIsFetch(false);
        if (docResponse) {
          const docData = docResponse.data.data;
          setQuantity(docData);

          const courseByCourseRate = docData.courseByCourse?.length * 12;
          const academicRate = docData.certificate?.length * 10;
          const transcriptRate = docData.transcript?.length * 10;

          setMaterialRate({
            courseByCourse: courseByCourseRate,
            certificate: academicRate,
            transcript: transcriptRate,
          });

          setToatlRate(
            courseByCourseRate + academicRate + transcriptRate + 1.45
          );
          const newPaymentData = [];

          if (docData.courseByCourse?.length > 0) {
            newPaymentData.push({
              name: "Course-by-Course Evaluation",
              amount: 12,
              quantity: docData.courseByCourse?.length,
            });
          }

          if (docData.certificate?.length > 0) {
            newPaymentData.push({
              name: "Academic credential verification",
              amount: 10,
              quantity: docData.certificate?.length,
            });
          }

          if (docData.transcript?.length > 0) {
            newPaymentData.push({
              name: "Document Translation",
              amount: 10,
              quantity: docData.transcript?.length,
            });
          }
          newPaymentData.push({
            name: "VAT",
            amount: 1.45,
            quantity: 1,
          });

          setPaymentData(newPaymentData);
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
            <p className="max-md:w-1/2 w-[30%]">Document Translation</p>
            <p>{quantity.transcript.length} x</p>
            <p>${materialRate.transcript}</p>
          </div>

          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p>Email Delivery</p>
            <p>$0.00</p>
          </div>
          <div className="w-full gap-5 flex justify-between border p-3 pr-5">
            <p>VAT</p>
            <p>$1.45</p>
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
            I AGREE TO THE TERMS AND CONDITIONS SET BY MSAC.
          </label>
        </div>
        {isError && <span className=" text-red-500 ">{isError}</span>}
      </div>
      <div className="w-full justify-end flex max-md:flex-col mt-5 gap-5">
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
          onClick={stripeButtonHandler}
          type="button"
          disabled={isLoading ? true : false}
        >
          {isLoading ? <CircularProgress color="inherit" /> : `Pay with Card`}
        </Button>
        {/* <Button
          className="bg-[#2aaae0] font-bold rounded-full"
          onClick={paypalButtonHandler}
          type="button"
          disabled={isLoadingPay ? true : false}
        >
          {isLoadingPay ? (
            <CircularProgress color="inherit" />
          ) : (
            "Pay with Paypal"
          )}
        </Button> */}
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isFetch}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </form>
  );
}
