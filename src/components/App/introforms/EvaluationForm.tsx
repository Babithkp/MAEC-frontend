import { useSetRecoilState } from "recoil";import { evalutonForm } from "../../../store/context";
import { Button } from "../../ui/button";
import usImg from "/us.svg";
import canadaImg from "/canada.svg";
import { ChangeEvent, useEffect, useState } from "react";
import educationImg from "/formIcon/education.svg";
import employmentImg from "/formIcon/employment.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
import { addEvalutions, getUserEvalutionById } from "../../../http/fetch";

interface FormValues {
  courseByCourse: number;
  certificate: number;
  transcript: number;
  language: string;
  userId: string | null;
}

const languageList = [
  { value: "Afrikaans", name: "Afrikaans" },
  { value: "Albanian", name: "Albanian" },
  { value: "Amharic", name: "Amharic" },
  { value: "Arabic", name: "Arabic" },
  { value: "Armenian", name: "Armenian" },
  { value: "Azerbaijani", name: "Azerbaijani" },
  { value: "Basque", name: "Basque" },
  { value: "Belarusian", name: "Belarusian" },
  { value: "Bengali", name: "Bengali" },
  { value: "Bosnian", name: "Bosnian" },
  { value: "Bulgarian", name: "Bulgarian" },
  { value: "Catalan", name: "Catalan" },
  { value: "Cebuano", name: "Cebuano" },
  { value: "ny", name: "Chichewa" },
  { value: "Chinese", name: "Chinese" },
  { value: "Corsican", name: "Corsican" },
  { value: "Croatian", name: "Croatian" },
  { value: "Czech", name: "Czech" },
  { value: "Danish", name: "Danish" },
  { value: "Dutch", name: "Dutch" },
  { value: "English", name: "English" },
  { value: "Esperanto", name: "Esperanto" },
  { value: "Estonian", name: "Estonian" },
  { value: "Filipino", name: "Filipino" },
  { value: "Finnish", name: "Finnish" },
  { value: "French", name: "French" },
  { value: "Frisian", name: "Frisian" },
  { value: "Galician", name: "Galician" },
  { value: "Georgian", name: "Georgian" },
  { value: "German", name: "German" },
  { value: "Greek", name: "Greek" },
  { value: "Gujarati", name: "Gujarati" },
  { value: "Haitian", name: "Haitian" },
  { value: "Hausa", name: "Hausa" },
  { value: "Hawaiian", name: "Hawaiian" },
  { value: "Hebrew", name: "Hebrew" },
  { value: "Hindi", name: "Hindi" },
  { value: "Hmong", name: "Hmong" },
  { value: "Hungarian", name: "Hungarian" },
  { value: "Icelandic", name: "Icelandic" },
  { value: "Igbo", name: "Igbo" },
  { value: "Indonesian", name: "Indonesian" },
  { value: "Irish", name: "Irish" },
  { value: "Italian", name: "Italian" },
  { value: "Japanese", name: "Japanese" },
  { value: "Javanese", name: "Javanese" },
  { value: "Kannada", name: "Kannada" },
  { value: "Kazakh", name: "Kazakh" },
  { value: "Khmer", name: "Khmer" },
  { value: "Kinyarwanda", name: "Kinyarwanda" },
  { value: "Korean", name: "Korean" },
  { value: "Kurdish", name: "Kurdish" },
  { value: "Kyrgyz", name: "Kyrgyz" },
  { value: "Lao", name: "Lao" },
  { value: "Latin", name: "Latin" },
  { value: "Latvian", name: "Latvian" },
  { value: "Lithuanian", name: "Lithuanian" },
  { value: "Luxembourgish", name: "Luxembourgish" },
  { value: "Macedonian", name: "Macedonian" },
  { value: "Malagasy", name: "Malagasy" },
  { value: "Malay", name: "Malay" },
  { value: "Malayalam", name: "Malayalam" },
  { value: "Maltese", name: "Maltese" },
  { value: "Maori", name: "Maori" },
  { value: "Marathi", name: "Marathi" },
  { value: "Mongolian", name: "Mongolian" },
  { value: "Myanmar", name: "Myanmar" },
  { value: "Nepali", name: "Nepali" },
  { value: "Norwegian", name: "Norwegian" },
  { value: "Odia", name: "Odia" },
  { value: "Pashto", name: "Pashto" },
  { value: "Persian", name: "Persian" },
  { value: "Polish", name: "Polish" },
  { value: "Portuguese", name: "Portuguese" },
  { value: "Punjabi", name: "Punjabi" },
  { value: "Romanian", name: "Romanian" },
  { value: "Russian", name: "Russian" },
  { value: "Samoan", name: "Samoan" },
  { value: "Scots", name: "Scots" },
  { value: "Serbian", name: "Serbian" },
  { value: "Sesotho", name: "Sesotho" },
  { value: "Shona", name: "Shona" },
  { value: "Sindhi", name: "Sindhi" },
  { value: "Sinhala", name: "Sinhala" },
  { value: "Slovak", name: "Slovak" },
  { value: "Slovenian", name: "Slovenian" },
  { value: "Somali", name: "Somali" },
  { value: "Spanish", name: "Spanish" },
  { value: "Sundanese", name: "Sundanese" },
  { value: "Swahili", name: "Swahili" },
  { value: "Swedish", name: "Swedish" },
  { value: "Tajik", name: "Tajik" },
  { value: "Tamil", name: "Tamil" },
  { value: "Tatar", name: "Tatar" },
  { value: "Telugu", name: "Telugu" },
  { value: "Thai", name: "Thai" },
  { value: "Turkish", name: "Turkish" },
  { value: "Turkmen", name: "Turkmen" },
  { value: "Ukrainian", name: "Ukrainian" },
  { value: "Urdu", name: "Urdu" },
  { value: "Uyghur", name: "Uyghur" },
  { value: "Uzbek", name: "Uzbek" },
  { value: "Vietnamese", name: "Vietnamese" },
  { value: "Welsh", name: "Welsh" },
  { value: "Xhosa", name: "Xhosa" },
  { value: "Yiddish", name: "Yiddish" },
  { value: "Yoruba", name: "Yoruba" },
  { value: "Zulu", name: "Zulu" },
];

export default function EvaluationForm() {
  const setPage = useSetRecoilState(evalutonForm);
  const [onlyEng, setOnlyEng] = useState(false);
  const [isusa, setIsusa] = useState(false);
  const [iscanada, setIscanada] = useState(false);
  const [iseducation, setIseducation] = useState(false);
  const [isEmployee, setIsEmployee] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [educationOption, setEducationOption] = useState({
    Undergraduate: false,
    Graduate: false,
  });
  

  const employeeHandler = () => {
    setIseducation(false);
    setIsEmployee(true);
  };
  const educationHandler = () => {
    setIseducation(true);
    setIsEmployee(false);
  };

  const underguaranteHandler = () => {
    setEducationOption({
      Undergraduate: false,
      Graduate: true,
    });
  };

  const usaHandler = () => {
    setIscanada(false);
    setIsusa(true);
  };
  const canadaHandler = () => {
    setIscanada(true);
    setIsusa(false);
  };

  const alldocHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setOnlyEng(!isChecked);
  };
  const engHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setOnlyEng(isChecked);
  };

  const prevButtonHandler = () => {
    setPage({
      informaton: { timeline: true, page: true },
      evaluations: { timeline: false, page: false },
      education: { timeline: false, page: false },
      pay: { timeline: false, page: false },
    });
  };
  const nextButtonHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setPage({
      informaton: { timeline: true, page: false },
      evaluations: { timeline: true, page: false },
      education: { timeline: true, page: true },
      pay: { timeline: false, page: false },
    });
  };

  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if(!onlyEng){
      data.language = "" 
    }
    setIsLoading(true);
    setFetchError(null);

    if (data.courseByCourse || data.certificate || data.transcript) {
      if (localStorage.getItem("userId")) {
        const userId = localStorage.getItem("userId");
        data.userId = userId;

        if (data.courseByCourse) {
          data.courseByCourse = 12;
        } else {
          data.courseByCourse = 0;
        }
        if (data.certificate) {
          data.certificate = 9;
        } else {
          data.certificate = 0;
        }
        if (data.transcript) {
          data.transcript = 9;
        } else {
          data.transcript = 0;
        }
        try {
          const response = await addEvalutions(data);
          if (response.data.message) {
            nextButtonHandler();
          }
        } catch (err) {
          setFetchError("Something went wrong, please try again");
          setTimeout(() => {
            setFetchError(null);
          }, 5000);
        }
      } else {
        window.location.href = "/get-started";
      }
    } else {
      setFetchError("Please Select a course or certificate");
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const fetch = async () => {
      if (localStorage.getItem("userId")) {
        const userId = localStorage.getItem("userId");
        const response = await getUserEvalutionById({ userId: userId });
        if (response.data.data) {
          const data = response.data.data;
          setValue("courseByCourse", data.courseByCourse);
          setValue("certificate", data.certificate);
          setValue("transcript", data.transcript);
          setValue("language", data.language);
          underguaranteHandler()
          if (data.language) {
            setOnlyEng(true);
          }
        }
      }
    };
    fetch();
  }, [setValue]);

  return (
    <form
      className="px-10 max-md:px-2 flex flex-col gap-5 max-md:w-full w-[70%] md:border-l"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">Your Evaluation</h2>
        <p className="py-5 font-bold">
          Where will you use your evaluation?
          <span className="text-red-500">*</span>
        </p>
        <div>
          <label>
            Please select the countries in which you will be using your report.
          </label>
          <div
            className={`w-[60%] max-md:w-full flex max-md:flex-col p-3 gap-8 mb-10 `}
          >
            <figure
              className={`border flex flex-col justify-center items-center p-4 ${
                isusa ? "bg-blue-50" : ""
              }`}
              onClick={usaHandler}
            >
              <img src={usImg} alt="usa flag" className="w-[12rem] h-[6rem]" />
              <p className="mt-3">US</p>
            </figure>
            <figure
              className={`border flex flex-col justify-center items-center p-4 ${
                iscanada ? "bg-blue-50" : ""
              }`}
              onClick={canadaHandler}
            >
              <img
                src={canadaImg}
                alt="canada flag"
                className="w-[12rem] h-[6rem]"
              />
              <p className="mt-3">CANADA</p>
            </figure>
          </div>
        </div>
      </div>
      {(isusa || iscanada) && (
        <div>
          <p className="font-bold">
            What is the purpose of this evaluation?{" "}
            <span className="text-red-500">*</span>
          </p>
          <p>
            Select what this application will be used for from the options
            below.
          </p>
          <div className="flex gap-5 text-center max-md:justify-center flex-wrap my-5">
            <Dialog>
              <DialogTrigger>
                <figure
                  className={`flex flex-col w-[14rem] h-[9rem] justify-center items-center p-5 gap-3 border active:bg-blue-50 ${
                    iseducation ? "bg-blue-50" : ""
                  }`}
                  onClick={educationHandler}
                >
                  <img src={educationImg} alt="education logo" />
                  <p>Education</p>
                </figure>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-bold">
                    Are you applying for:
                  </DialogTitle>
                  <DialogDescription className="p-5 flex flex-col gap-5 font-bold">
                    <div className="flex items-center gap-5">
                      <input
                        id="firstyear"
                        type="radio"
                        name="radio-1"
                        className="border-black radio radio-info"
                        onChange={underguaranteHandler}
                      />
                      <label
                        htmlFor="firstyear"
                        className="flex justify-between w-full"
                      >
                        Undergraduate Admission
                      </label>
                    </div>
                    <div className="flex items-center gap-5">
                      <input
                        id="4"
                        type="radio"
                        name="radio-1"
                        className="border-black radio radio-info"
                        onChange={underguaranteHandler}
                      />
                      <label
                        htmlFor="4"
                        className="flex justify-between w-full"
                      >
                        Graduate Admission
                      </label>
                    </div>
                  </DialogDescription>
                  <DialogClose className="w-full justify-end flex">
                    <p className="bg-[#2aaae0] p-2 rounded-full px-5 text-white">
                      Ok
                    </p>
                  </DialogClose>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                <figure
                  className={`flex flex-col w-[14rem] h-[9rem] justify-center items-center p-5 gap-3 border active:bg-blue-50 ${
                    isEmployee ? "bg-blue-50" : ""
                  }`}
                  onClick={employeeHandler}
                >
                  <img src={employmentImg} alt="education logo" />
                  <p>Employment</p>
                </figure>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-bold">
                    Are you applying for:
                  </DialogTitle>
                  <DialogDescription className="p-5 flex flex-col gap-5 font-bold">
                    <div className="flex items-center gap-5">
                      <input
                        id="firstyear"
                        type="radio"
                        name="radio-1"
                        className="border-black radio radio-info"
                        onChange={underguaranteHandler}
                      />
                      <label
                        htmlFor="firstyear"
                        className="flex justify-between w-full"
                      >
                        Undergraduate Admission
                      </label>
                    </div>
                    <div className="flex items-center gap-5">
                      <input
                        id="4"
                        type="radio"
                        name="radio-1"
                        className="border-black radio radio-info"
                        onChange={underguaranteHandler}
                      />
                      <label
                        htmlFor="4"
                        className="flex justify-between w-full"
                      >
                        Graduate Admission
                      </label>
                    </div>
                  </DialogDescription>
                  <DialogClose className="w-full justify-end flex bg-[#2aaae0] font-bold rounded-full">
                    Ok
                  </DialogClose>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}

      {educationOption.Graduate && (
        <div className="flex flex-col gap-5 border-t ">
          <p className="mt-10 font-bold">
            Select the type of report you need{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex items-center gap-5">
              <input
                id="new"
                type="checkbox"
                className="checkbox checkbox-info [--chkfg:white] "
                {...register("courseByCourse")}
              />
              <label className="w-full flex justify-between" htmlFor="new">
                <p>Course-by-Course evaluation</p>{" "}
                <p className="font-bold">$12</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="courseby"
                type="checkbox"
                className="checkbox checkbox-info [--chkfg:white] "
                {...register("certificate")}
              />
              <label className="w-full flex justify-between" htmlFor="courseby">
                <p>Certificate Verification</p> <p className="font-bold">$10</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="verification"
                type="checkbox"
                className="checkbox checkbox-info [--chkfg:white]"
                {...register("transcript")}
              />
              <label
                className="w-full flex justify-between"
                htmlFor="verification"
              >
                <p>Transcript Verification</p> <p className="font-bold">$10</p>
              </label>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-5 border-t ">
        <p className="py-5 font-bold">
          Translation Services
          <span className="text-red-500">*</span>
        </p>
        <p>
          Certified English translations for all official and legal documents
          issued in any language other than English.
        </p>
        <div className="flex flex-col gap-5 ">
          <div className="flex items-center gap-5">
            <input
              id="tranallDoc"
              type="radio"
              name="Translation"
              className="border-black radio radio-info "
              defaultChecked
              onChange={alldocHandler}
            />
            <label htmlFor="tranallDoc">
              All my documents are in English or I already have certified
              English translation.
            </label>
          </div>
          <div className="flex items-center gap-5">
            <input
              id="tranEng"
              type="radio"
              name="Translation"
              className="border-black radio radio-info"
              onChange={engHandler}
            />
            <label htmlFor="tranEng">Add English Translation</label>
          </div>
          {onlyEng && (
            <div className="flex flex-col gap-5">
              <p>
                Final translation will be delivered via email once complete.
              </p>
              <p className="font-bold">$10 per document</p>
              <p>
                Choose the language of the documents
                <span className="text-red-500">*</span>
              </p>
              <select
                id="languages"
                className="focus:outline-none w-full border-b py-3 "
                {...register("language")}
              >
                <option></option>
                {languageList.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex flex-col gap-5 pt-5 mt-5">
            <p className="font-bold">
              Processing Time <span className="text-red-500">*</span>
            </p>

            <p>
              <span className="font-bold">Transcript Evaluation : </span>3
              Business Days.
            </p>
            <p>
              <span className="font-bold">
                Academic Credentials Verification:{" "}
              </span>
              5 Business Days.
            </p>
            <p>
              <span className="font-bold">Document Translation: </span>3
              Business Days.
            </p>
          </div>
        </div>
      </div>
      {fetchError && (
        <p className="my-5 text-red-500 font-bold">{fetchError}</p>
      )}
      <div className="w-full justify-end items-center flex mt-5 gap-5">
        <Button
          variant={"outline"}
          className="border-[#2aaae0] font-bold rounded-full"
          onClick={prevButtonHandler}
          type="button"
        >
          Back
        </Button>
        <Button
          className="bg-[#2aaae0]  rounded-full py-6 hover:bg-[#2aaae0]"
          disabled={isLoading ? true : false}
        >
          {isLoading ? <CircularProgress color="inherit" /> : "Next"}
        </Button>
      </div>
    </form>
  );
}