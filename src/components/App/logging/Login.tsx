import { FaSortDown } from "react-icons/fa";import { Button } from "../../ui/button";
import Map from "./objects/Map";
import { SubmitHandler, useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import { userLogin } from "../../../http/fetch";
import { useEffect, useState } from "react";

interface FormValues {
  email: string;
  password: string;
}

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);


  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/get-started/Intro";
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);

    try {
      const response = await userLogin(data);
      if (response) {
        console.log(response);
        
        if (response.data.message) {
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("userId", response.data.userId)
          localStorage.setItem("usermail", response.data.usermail)
          window.location.href = "/get-started/Intro";
          reset();
        } else if (response.data.admin) {
          window.location.href = "/admin/dashboard/admin";
          reset();
        } else if(response.data.userNotFound){
          setFetchError("User Does Not Exist, try to Sign Up");
          setTimeout(() => {
            setFetchError(null);
          }, 5000);
        }else{
          setFetchError("Wrong Password, Try again");
          setTimeout(() => {
            setFetchError(null);
          }, 5000);
        }
      }
    } catch (error) {
      setFetchError("Something went wrong try again");
      setTimeout(() => {
        setFetchError(null);
      }, 5000);
    }
    setIsLoading(false);
  };

  return (
    <main className="md:flex min-h-screen">
      <Map />
      <section className="md:w-[60%] h-screen max-md:p-3 max-md:px-5 p-14 px-16 l">
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
              onClick={() => (window.location.href = "/get-started")}
            >
              Create Account
            </Button>
          </div>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-4xl font-bold max-md:text-3xl">
            Login to ITS Portal
            
          </h1>
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
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
                {...register("password", { required: true, minLength: 5 })}
              />
              {errors.password && (
                <span className="font-medium text-sm text-red-500">
                  This Field is Required with Minimum 5 Characters
                </span>
              )}
            </div>
            <div className="flex my-5 w-full justify-end">
              <a href="/" className="text-[#2aaae0] ">
                Forgot Password?
              </a>
            </div>
            {fetchError && (
              <p className="my-5 text-red-500 font-bold">{fetchError}</p>
            )}
            <Button
              className="bg-[#2aaae0] w-full rounded-full py-6 hover:bg-[#2aaae0]"
              disabled={isLoading ? true : false}
            >
              {isLoading ? <CircularProgress color="inherit" /> : "Login"}
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
