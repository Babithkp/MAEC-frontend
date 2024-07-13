import { ChangeEvent, useState } from "react";import { Button } from "../../ui/button";
import { useSetRecoilState } from "recoil";
import { evalutonForm } from "../../../store/context";

export default function DelivaryOption() {
  const [isEmail, setisEmail] = useState(false);

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
      review: { timeline: true, page: true },
      pay: { timeline: false, page: false },
    });
  };
  const prevButtonHandler = () => {
    setPage({
      informaton: { timeline: true, page: false },
      evaluations: { timeline: true, page: false },
      education: { timeline: true, page: true },
      delivery: { timeline: false, page: false },
      review: { timeline: false, page: false },
      pay: { timeline: false, page: false },
    });
  };

  const deliveryMethodHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    console.log(value);

    if (value === "email") {
      setisEmail(true);
    } else {
      setisEmail(false);
    }
  };
  return (
    <form className="px-10 max-md:px-2 flex flex-col gap-5 max-md:w-full w-[70%] md:border-l">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">Delivery Options</h2>
        <p className="py-5 font-bold">
          Select a delivery option for each recipient
        </p>
        <p>
          Select what this application will be used for from the options below.
        </p>
        <div className="flex gap-10 justify-between flex-wrap border-t pt-10">
          <div className=" flex flex-col  gap-5 w-full  ">
            <p className="font-bold">Recipient 1: Your Copy</p>
            <label>
              CHOOSE YOUR DELIVERY METHOD
              <span className="text-red-500">*</span>
            </label>
            <select
              className="focus:outline-none border-b pb-5"
              onChange={deliveryMethodHandler}
            >
              <option></option>
              <option value={"priority"}>
                International Priority $65.00 (International)
              </option>
              <option value={"maec"}>
                MAEC International Portal Complimentary
              </option>
              <option value={"email"}>Email Delivery</option>
            </select>
          </div>
          {isEmail && (
            <div className=" flex flex-col mb-5 gap-5 w-full  ">
              <label>
                WHERE WOULD YOU LIKE YOUR COPY OF THE REPORT EMAILED TO?
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none pb-5 border-b active:bg-none"
              />
            </div>
          )}
        </div>
        {!isEmail && (
          <div className="flex flex-col gap-5">
            <p>
              Would you like to add additional paper copies of your report? ($20
              per copy)
            </p>
            <div className="flex items-center gap-5">
              <input
                id="yes"
                type="radio"
                name="radio-1"
                className="border-black radio radio-info"
              />
              <label htmlFor="yes" className="flex justify-between w-full">
                Yes
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="no"
                type="radio"
                name="radio-1"
                className="border-black radio radio-info"
              />
              <label htmlFor="no" className="flex justify-between w-full">
                No
              </label>
            </div>
            <p>Would you like an additional email copy of your report?($20)</p>
            <div className="flex items-center gap-5">
              <input
                id="additionaltyes"
                type="radio"
                name="radio-2"
                className="border-black radio radio-info"
              />
              <label
                htmlFor="additionaltyes"
                className="flex justify-between w-full"
              >
                Yes
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="additionalno"
                type="radio"
                name="radio-2"
                className="border-black radio radio-info"
              />
              <label
                htmlFor="additionalno"
                className="flex justify-between w-full"
              >
                No
              </label>
            </div>
          </div>
        )}
        <p>
          CHOOSE WHICH PRODUCTS YOU WOULD LIKE TO SEND TO THIS RECIPIENT{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex items-center gap-5">
          <input
            id="checkEdu"
            type="checkbox"
            name="radio-2"
            className=" checkbox checkbox-info [--chkfg:white]"
          />
          <label htmlFor="checkEdu" className="flex justify-between w-full">
            Education Document Report (US)
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
          Next
        </Button>
      </div>
    </form>
  );
}
