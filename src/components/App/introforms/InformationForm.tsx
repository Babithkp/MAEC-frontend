import { ReactNode, useEffect, useState } from "react";import { Button } from "../../ui/button";
import { useSetRecoilState } from "recoil";
import { countries, evalutonForm } from "../../../store/context";
import { SubmitHandler, useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import { getUserProfileById, updateProfile } from "../../../http/fetch";

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

interface FormValues {
  first_name: string;
  middle_name: string;
  last_name: string;
  birth_day: string;
  birth_month: string;
  birth_year: string;
  gender: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone_number: string;
  userId: string | null;
}

export default function InformationForm() {
  const setPage = useSetRecoilState(evalutonForm);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const nextButtonHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setPage({
      informaton: { timeline: true, page: false },
      evaluations: { timeline: true, page: true },
      education: { timeline: false, page: false },
      pay: { timeline: false, page: false },
    });
  };

  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    if (localStorage.getItem("userId")) {
      const userId = localStorage.getItem("userId");
      data.userId = userId;
      try {
        const response = await updateProfile(data);
        if (response) {
          if (response.data.message) {
            nextButtonHandler();
          }
        }
      } catch (e) {
        setFetchError("Something went wrong, please try again");
        setTimeout(() => {
          setFetchError(null);
        }, 5000);
      }
    } else {
      window.location.href = "/get-started";
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetch = async () => {
      if (localStorage.getItem("userId")) {
        const userId = localStorage.getItem("userId");
        const response = await getUserProfileById({userId:userId});
        if (response.data.data) {
          const data = response.data.data;
          setValue("first_name", data.first_name);
          setValue("last_name", data.last_name);
          setValue("middle_name", data.middle_name);
          setValue("birth_day", data.birth_day);
          setValue("birth_month", data.birth_month);
          setValue("birth_year", data.birth_year);
          setValue("gender", data.gender);
          setValue("street_address", data.street_address);
          setValue("city", data.city);
          setValue("state", data.state);
          setValue("postal_code", data.postal_code);
          setValue("country", data.country);
          setValue("phone_number", data.phone_number);
        }
      }
    };
    fetch()
  }, [setValue]);

  return (
    <section className="md:px-10 flex flex-col gap-5 md:w-[70%] md:border-l">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold">Your Information</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex max-sm:flex-col flex-wrap justify-between">
          <div className="border-b flex flex-col mb-5 gap-5 md:w-[47%] ">
            <label>
              FIRST NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="outline-none mb-5 active:bg-none"
              {...register("first_name")}
              minLength={3}
            />
          </div>
          <div className="border-b flex flex-col mb-5 gap-5 md:w-[47%] ">
            <label>MIDDLE NAME</label>
            <input
              type="text"
              className="outline-none mb-5 active:bg-none"
              {...register("middle_name")}
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
              {...register("last_name")}
              minLength={1}
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="border-b flex flex-col mb-5 pb-5 gap-5 max-md:w-full w-[30%] ">
            <label>
              DATE OF BIRTH (DAY) <span className="text-red-500">*</span>
            </label>
            <select
              className="focus:outline-none"
              {...register("birth_day")}
              required
            >
              <option></option>
              {daysInMonth}
            </select>
          </div>
          <div className="border-b flex flex-col mb-5 pb-5 gap-5 max-md:w-full w-[30%]">
            <label>
              DATE OF BIRTH (MONTH) <span className="text-red-500">*</span>
            </label>
            <select
              className="focus:outline-none"
              {...register("birth_month")}
              required
            >
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
            <select
              className="focus:outline-none"
              {...register("birth_year")}
              required
            >
              <option></option>
              {Years}
            </select>
          </div>
          <div className="border-b flex flex-col mb-5 pb-5 gap-5 w-[47%] max-md:w-full">
            <label>
              GENDER <span className="text-red-500">*</span>
            </label>
            <select
              className="focus:outline-none"
              {...register("gender")}
              required
            >
              <option></option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
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
                {...register("street_address")}
                minLength={5}
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
                {...register("city")}
                minLength={3}
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
              <label>
                STATE/PROVIENCE/REGION <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="outline-none mb-5 active:bg-none"
                {...register("state")}
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
              <label>
                ZIP/POSTAL CODE <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
                {...register("postal_code")}
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
              <label>
                COUNTRY <span className="text-red-500">*</span>
              </label>
              <select
                className="focus:outline-none"
                {...register("country")}
                required
              >
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
                {...register("phone_number")}
              />
            </div>
          </div>
          {fetchError && (
            <p className="my-5 text-red-500 font-bold">{fetchError}</p>
          )}
          <div className="w-full justify-end flex mt-5">
            <Button
              className="bg-[#2aaae0]  rounded-full py-6 hover:bg-[#2aaae0]"
              disabled={isLoading ? true : false}
            >
              {isLoading ? <CircularProgress color="inherit" /> : "Next"}
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}
