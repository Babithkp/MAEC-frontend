import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import { RxCross2 } from "react-icons/rx";
import { PiBuilding } from "react-icons/pi";
import { Button } from "../../ui/button";
import { countries, evalutonForm } from "../../../store/context";
import { RiArrowRightSLine } from "react-icons/ri";
import maeclogo from "../../../../public/maec_small_logo.jpg";
import { IoPersonOutline } from "react-icons/io5";
import { useSetRecoilState } from "recoil";

const countryOptions = countries;

export default function EducationForm() {
  const setPage = useSetRecoilState(evalutonForm);
  const nextButtonHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
    setPage({
      informaton: { timeline: true, page: false },
      evaluations: { timeline: true, page: false },
      education: { timeline: true, page: false },
      delivery: { timeline: true, page: true },
      review: { timeline: false, page: false },
      pay: { timeline: false, page: false },
    });
  };
  const prevButtonHandler = () => {
    setPage({
      informaton: { timeline: true, page: false },
      evaluations: { timeline: true, page: true },
      education: { timeline: false, page: false },
      delivery: { timeline: false, page: false },
      review: { timeline: false, page: false },
      pay: { timeline: false, page: false },
    });
  };
  return (
    <form className="px-10 max-md:px-2 flex flex-col gap-5 max-md:w-full w-[70%] md:border-l">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">Your Education</h2>
        <p className="py-5 font-bold">Please add your credentials</p>
        <ul className="flex flex-col gap-5">
          <li>Each individual must complete a separate MAEC application.</li>
          <li>
            Credentials added for other individuals, e.g. a spouse, will not be
            included in your MAEC evaluation report.
          </li>
          <li>
            MAEC does not evaluate occupational study, trade qualifications,
            short-term professional development programs, or work experience.
          </li>
          <li>
            MyIEE does not evaluate credentials from any of the 50 US states or
            the District of Columbia. US credentials may be added in this
            section for educational background purposes only, but will not be
            included on your MyIEE evaluation report.
          </li>
        </ul>
      </div>

      <AlertDialog>
        <AlertDialogTrigger className="w-full flex flex-col justify-start mt-10">
          <Button className="bg-[#2aaae0] font-bold rounded-full" type="button">
            + Add a Credential
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add Credential</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex flex-col gap-10 text-start text-black">
                <p>
                  Please note: if your institution is not listed, please proceed
                  to type it in manually.
                </p>
                <div className="flex gap-10 justify-between flex-wrap ">
                  <div className="flex flex-col gap-5 max-md:w-full w-[47%] ">
                    <label>
                      COUNTRY OF EDUCATION{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select className="focus:outline-none border-b pb-5">
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
                      TYPE OF DIPLOMA / CERTIFICATE
                      <span className="text-red-500">*</span>
                    </label>
                    <select className="focus:outline-none border-b pb-5">
                      <option></option>
                      <option>secondary/High School</option>
                      <option>Higher Education/university</option>
                    </select>
                  </div>
                  <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                    <label>
                      NAME OF THE INSTITUTION{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="outline-none mb-5 active:bg-none"
                    />
                  </div>
                  <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                    <label>
                      NAME OF DIPLOMA / CERTIFICATE
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="outline-none mb-5 active:bg-none"
                    />
                  </div>
                  <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                    <label>
                      YOUR NAME AS IT APPEARS ON CREDENTIAL
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="outline-none mb-5 active:bg-none"
                    />
                  </div>
                  <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                    <label>
                      FIELD OF STUDY
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="outline-none mb-5 active:bg-none"
                    />
                  </div>
                  <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                    <label>
                      YEAR FROM
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="outline-none mb-5 active:bg-none"
                    />
                  </div>
                  <div className="border-b flex flex-col mb-5 gap-5 max-md:w-full w-[47%] ">
                    <label>
                      YEAR TO
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="outline-none mb-5 active:bg-none"
                    />
                  </div>
                  <div className="flex flex-col mb-5 gap-5 max-md:w-full w-[47%] items-start ">
                    <label>
                      COMPLETED ?<span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-10">
                      <div className="flex justify-center items-center gap-3">
                        <input
                          id="yes"
                          type="radio"
                          name="radio"
                          className="border-black radio radio-info "
                        />
                        <label
                          className="w-full flex justify-between"
                          htmlFor="yes"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="flex justify-center items-center gap-3">
                        <input
                          id="no"
                          type="radio"
                          name="radio"
                          className="border-black radio radio-info "
                        />
                        <label
                          className="w-full flex justify-between"
                          htmlFor="no"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="font-bold">How will the credential be sent?</p>
                  <div className="flex justify-center items-center gap-3">
                    <input
                      id="institution"
                      type="radio"
                      name="radio-7"
                      className="border-black radio radio-info "
                    />
                    <label
                      className="w-full flex justify-between items-center"
                      htmlFor="institution"
                    >
                      <p>
                        My institution will be sending original documents to IEE
                        by mail or email.
                      </p>
                      <div className="text-black flex gap-1 justify-center items-center">
                        <PiBuilding size={25} />
                        <RiArrowRightSLine size={25} />
                        <img
                          src={maeclogo}
                          alt="maec logo"
                          className="w-[2rem] h-[2rem] rounded-full object-cover"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <input
                      id="sendiee"
                      type="radio"
                      name="radio-7"
                      className="border-black radio radio-info "
                    />
                    <label
                      className="w-full flex justify-between items-center"
                      htmlFor="sendiee"
                    >
                      <p>
                        I will be sending IEE original documents provided to me
                        by my institution for an Official Evaluation.
                      </p>
                      <div className="text-black flex gap-1 justify-center items-center">
                        <PiBuilding size={25} />
                        <RiArrowRightSLine size={25} />
                        <IoPersonOutline size={25} />
                        <RiArrowRightSLine size={25} />
                        <img
                          src={maeclogo}
                          alt="maec logo"
                          className="w-[2rem] h-[2rem] rounded-full object-cover"
                        />
                      </div>
                    </label>
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    <input
                      id="UPLOADING"
                      type="radio"
                      name="radio-7"
                      className="border-black radio radio-info "
                    />
                    <label
                      className="w-full flex justify-between items-center"
                      htmlFor="UPLOADING"
                    >
                      <p>
                        I am uploading scans of documents and requesting a
                        Provisional Evaluation
                      </p>
                      <div className="text-black flex gap-1 justify-center items-center">
                        <IoPersonOutline size={25} />
                        <RiArrowRightSLine size={25} />
                        <img
                          src={maeclogo}
                          alt="maec logo"
                          className="w-[2rem] h-[2rem] rounded-full object-cover"
                        />
                      </div>
                    </label>
                  </div>
                  <p>Please click here for more information on Provisional Evaluation.</p>
                  <p>Disclaimer: May incur additional verification fee.</p>
                  <p>Disclaimer: May incur additional processing fee.</p>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="absolute top-0 right-0 border-none ">
              <RxCross2 size={20} />
            </AlertDialogCancel>
            <AlertDialogAction className="bg-transparent active:bg-transparent hover:bg-transparent w-full flex justify-end">
              <Button
                className="bg-[#2aaae0] font-bold rounded-full"
                type="button"
              >
                Save
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
