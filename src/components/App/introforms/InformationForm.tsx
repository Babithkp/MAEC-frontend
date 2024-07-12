import { ReactNode } from "react";import { Button } from "../../ui/button";
import { useSetRecoilState } from "recoil";
import { countries, evalutonForm } from "../../../store/context";
const daysInMonth: ReactNode[] = [];
for (let i = 1; i <= 31; i++) {
  daysInMonth.push(
    <option value={i} key={i}>
      {i}
    </option>
  );
}
const Years: ReactNode[] = [];
for (let i = 1960; i <= 2024; i++) {
  Years.push(
    <option value={i} key={i}>
      {i}
    </option>
  );
}
const countryOptions = countries;

export default function InformationForm() {
  const setPage = useSetRecoilState(evalutonForm);

  const nextButtonHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
    setPage({
      informaton: { timeline: true, page: false },
      evaluations: { timeline: true, page: true },
      education: { timeline: false, page: false },
      delivery: { timeline: false, page: false },
      pay: { timeline: false, page: false },
    });
  };

  return (
    <form className="md:px-10 flex flex-col gap-5 md:w-[70%] md:border-l">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold">Your Information</h2>
        <p>
          Please enter the name and date of birth for the person listed on the
          academic credentials. The name and date of birth entered here is what
          will appear on the report. Revision fees and additional shipping fees
          will apply if the name and date of birth are entered incorrectly.
        </p>
      </div>
      <div>
        <div className="flex max-sm:flex-col flex-wrap justify-between">
          <div className="border-b flex flex-col mb-5 gap-5 md:w-[47%] ">
            <label>
              FIRST NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="outline-none mb-5 active:bg-none"
            />
          </div>
          <div className="border-b flex flex-col mb-5 gap-5 md:w-[47%] ">
            <label>
              MIDDLE NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="outline-none mb-5 active:bg-none"
            />
          </div>
          <div className="border-b flex flex-col mb-5 gap-5 md:w-[47%] ">
            <label>
              LAST NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="outline-none mb-5 active:bg-none"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="border-b flex flex-col mb-5 pb-5 gap-5 max-md:w-full w-[30%] ">
            <label>
              DATE OF BIRTH (DAY) <span className="text-red-500">*</span>
            </label>
            <select className="focus:outline-none">
              <option></option>
              {daysInMonth}
            </select>
          </div>
          <div className="border-b flex flex-col mb-5 pb-5 gap-5 max-md:w-full w-[30%]">
            <label>
              DATE OF BIRTH (MONTH) <span className="text-red-500">*</span>
            </label>
            <select className="focus:outline-none">
              <option></option>
              <option value={"January"}>January</option>
              <option value={"February"}>February</option>
              <option value={"March"}>March</option>
              <option value={"April"}>April</option>
              <option value={"May"}>May</option>
              <option value={"June"}>June</option>
              <option value={"July"}>July</option>
              <option value={"August"}>August</option>
              <option value={"September"}>September</option>
              <option value={"October"}>October</option>
              <option value={"November"}>November</option>
              <option value={"December"}>December</option>
            </select>
          </div>
          <div className="border-b flex flex-col mb-5 pb-5 gap-5 max-md:w-full w-[30%]">
            <label>
              DATE OF BIRTH (YEAR) <span className="text-red-500">*</span>
            </label>
            <select className="focus:outline-none">
              <option></option>
              {Years}
            </select>
          </div>
          <div className="border-b flex flex-col mb-5 pb-5 gap-5 w-[47%] max-md:w-full">
            <label>
              GENDER <span className="text-red-500">*</span>
            </label>
            <select className="focus:outline-none">
              <option></option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>FeMale</option>
            </select>
          </div>
        </div>
        <div>
          <p className="font-bold">Mailing Address</p>
          <p className="my-5">
            This is where MAEC will send your copy of the report
          </p>
          <div className="flex flex-wrap justify-between">
            <div className="border-b flex flex-col mb-5 gap-5 w-screen ">
              <label>
                STREET / P.O. BOX <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
                placeholder="Enter a location"
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
              <label>APT/STE</label>
              <input type="text" className="outline-none mb-5 active:bg-none" />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
              <label>
                CITY <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
              <label>STATE/PROVIENCE/REGION</label>
              <input type="text" className="outline-none mb-5 active:bg-none" />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
              <label>ZIP/POSTAL CODE</label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
              <label>
                COUNTRY <span className="text-red-500">*</span>
              </label>
              <select className="focus:outline-none">
                <option></option>
                {countryOptions.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
              <label>
                TELEPHONE <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
              />
            </div>
          </div>
          <div className="w-full justify-end flex mt-5">
            <Button
              className="bg-[#2aaae0] font-bold rounded-full"
              onClick={nextButtonHandler}
              type="button"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
