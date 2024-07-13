import { Button } from "../../ui/button";
import { FaSortDown } from "react-icons/fa";
import Map from "./objects/Map";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { createUser } from "../../../http/fetch";

interface FormValues {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

export default function CreateAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null)

  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);

    try {
      const response = await createUser(data);
      if (response) {
        if(response.data.message){
          window.location.href = "loggingIn";
          reset();
        }else{
          setFetchError("User Already Registered");
          setTimeout(() => {
            setFetchError(null)
          }, 5000);
        }
      }
    } catch (error) {
      setFetchError("Something went wrong try again");
      setTimeout(() => {
        setFetchError(null)
      }, 5000);
    }
    setIsLoading(false);
  };
  return (
    <main className="md:flex min-h-screen">
      <Map />
      <section className="md:w-[60%] h-screen max-md:p-3 max-md:px-5 p-14 px-16 md:overflow-y-scroll">
        <div className="flex w-full justify-between mb-10">
          <div>
            <Button
              className="btn hover:bg-transparent bg-transparent border-none p-0 shadow-none"
              onClick={() => (window.location.href = "/")}
            >
              <FaSortDown className="text-[#2aaae0] rotate-[90deg]" size={20} />
              <p className="text-black">Back to Home</p>
            </Button>
          </div>
          <div>
            <Button
              variant={"outline"}
              className="font-bold rounded-full"
              onClick={() => (window.location.href = "loggingIn")}
            >
              Login
            </Button>
          </div>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-bold">Let's get started!</h1>
          <div className="md:w-[60%]">
            <div className="border-b flex flex-col mb-5 gap-5">
              <label>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="outline-none mb-5 active:bg-none"
                {...register("email")}
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5">
              <label>
                Confirm Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                className="outline-none mb-5 active:bg-none"
                {...register("confirmEmail", {
                  required: true,
                  validate: (val) =>
                    val === watch("email") ||
                    "The Email confirmation do not match",
                })}
              />
              {errors.confirmEmail && (
                <span className="font-medium text-red-500">
                  {errors.confirmEmail.message}
                </span>
              )}
            </div>
            <div className="border-b flex flex-col mb-5 gap-5">
              <label>
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                required
                className="outline-none mb-5 active:bg-none"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password && (
                <span className="font-medium text-sm text-red-500">
                  This Field is Required with Minimum 8 Characters
                </span>
              )}
            </div>
            <div className="border-b flex flex-col mb-5 gap-5">
              <label>
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
                {...register("confirmPassword", {
                  required: true,
                  validate: (val) =>
                    val === watch("password") ||
                    "The Password confirmation do not match",
                })}
              />
              {errors.confirmPassword && (
                <span className="font-medium text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            {fetchError && <p className="my-5 text-red-500 font-bold">{fetchError}</p>}
            <Button className="bg-[#2aaae0] w-full rounded-full py-6 hover:bg-[#2aaae0]" disabled={isLoading ? true : false}>
              {isLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                "Create account"
              )}
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
