import { FaSortDown } from "react-icons/fa";import { Button } from "../../ui/button";
import Map from "./objeects/Map";

export default function Login() {
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
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold max-md:text-3xl">Login to MyIEE Portal</h1>
          <div className="md:w-[60%]">
            <div className="border-b flex flex-col mb-5 gap-5">
              <label>
                Email Address <span className="text-red-500">*</span>
              </label>
              <input type="email" required className="outline-none mb-5" />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5">
              <label>
                Password <span className="text-red-500">*</span>
              </label>
              <input type="email" required className="outline-none mb-5" />
            </div>
            <div className="flex my-5 w-full justify-end">
                <a href="/" className="text-[#2aaae0] ">Forgot Password?</a>
            </div>
            <Button className="bg-[#2aaae0] w-full rounded-full py-6" onClick={()=>window.location.href = "/customer-dashboard"}>Login</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
