import { useSetRecoilState } from "recoil";import { evalutonForm } from "../../../store/context";
import { Button } from "../../ui/button";
import usImg from "/us.svg";
import canadaImg from "/canada.svg";
import { ChangeEvent, useEffect, useState } from "react";
import educationImg from "/formIcon/education.svg";
import licenseImg from "/formIcon/certification.svg";
import employmentImg from "/formIcon/employment.svg";
import immigrationImg from "/formIcon/immigration.svg";
import militaryImg from "/formIcon/Military.svg";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";

const languageList = [
  { value: "af", name: "Afrikaans" },
  { value: "sq", name: "Albanian" },
  { value: "am", name: "Amharic" },
  { value: "ar", name: "Arabic" },
  { value: "hy", name: "Armenian" },
  { value: "az", name: "Azerbaijani" },
  { value: "eu", name: "Basque" },
  { value: "be", name: "Belarusian" },
  { value: "bn", name: "Bengali" },
  { value: "bs", name: "Bosnian" },
  { value: "bg", name: "Bulgarian" },
  { value: "ca", name: "Catalan" },
  { value: "ceb", name: "Cebuano" },
  { value: "ny", name: "Chichewa" },
  { value: "zh", name: "Chinese" },
  { value: "co", name: "Corsican" },
  { value: "hr", name: "Croatian" },
  { value: "cs", name: "Czech" },
  { value: "da", name: "Danish" },
  { value: "nl", name: "Dutch" },
  { value: "en", name: "English" },
  { value: "eo", name: "Esperanto" },
  { value: "et", name: "Estonian" },
  { value: "tl", name: "Filipino" },
  { value: "fi", name: "Finnish" },
  { value: "fr", name: "French" },
  { value: "fy", name: "Frisian" },
  { value: "gl", name: "Galician" },
  { value: "ka", name: "Georgian" },
  { value: "de", name: "German" },
  { value: "el", name: "Greek" },
  { value: "gu", name: "Gujarati" },
  { value: "ht", name: "Haitian" },
  { value: "ha", name: "Hausa" },
  { value: "haw", name: "Hawaiian" },
  { value: "he", name: "Hebrew" },
  { value: "hi", name: "Hindi" },
  { value: "hmn", name: "Hmong" },
  { value: "hu", name: "Hungarian" },
  { value: "is", name: "Icelandic" },
  { value: "ig", name: "Igbo" },
  { value: "id", name: "Indonesian" },
  { value: "ga", name: "Irish" },
  { value: "it", name: "Italian" },
  { value: "ja", name: "Japanese" },
  { value: "jw", name: "Javanese" },
  { value: "kn", name: "Kannada" },
  { value: "kk", name: "Kazakh" },
  { value: "km", name: "Khmer" },
  { value: "rw", name: "Kinyarwanda" },
  { value: "ko", name: "Korean" },
  { value: "ku", name: "Kurdish" },
  { value: "ky", name: "Kyrgyz" },
  { value: "lo", name: "Lao" },
  { value: "la", name: "Latin" },
  { value: "lv", name: "Latvian" },
  { value: "lt", name: "Lithuanian" },
  { value: "lb", name: "Luxembourgish" },
  { value: "mk", name: "Macedonian" },
  { value: "mg", name: "Malagasy" },
  { value: "ms", name: "Malay" },
  { value: "ml", name: "Malayalam" },
  { value: "mt", name: "Maltese" },
  { value: "mi", name: "Maori" },
  { value: "mr", name: "Marathi" },
  { value: "mn", name: "Mongolian" },
  { value: "my", name: "Myanmar" },
  { value: "ne", name: "Nepali" },
  { value: "no", name: "Norwegian" },
  { value: "or", name: "Odia" },
  { value: "ps", name: "Pashto" },
  { value: "fa", name: "Persian" },
  { value: "pl", name: "Polish" },
  { value: "pt", name: "Portuguese" },
  { value: "pa", name: "Punjabi" },
  { value: "ro", name: "Romanian" },
  { value: "ru", name: "Russian" },
  { value: "sm", name: "Samoan" },
  { value: "gd", name: "Scots" },
  { value: "sr", name: "Serbian" },
  { value: "st", name: "Sesotho" },
  { value: "sn", name: "Shona" },
  { value: "sd", name: "Sindhi" },
  { value: "si", name: "Sinhala" },
  { value: "sk", name: "Slovak" },
  { value: "sl", name: "Slovenian" },
  { value: "so", name: "Somali" },
  { value: "es", name: "Spanish" },
  { value: "su", name: "Sundanese" },
  { value: "sw", name: "Swahili" },
  { value: "sv", name: "Swedish" },
  { value: "tg", name: "Tajik" },
  { value: "ta", name: "Tamil" },
  { value: "tt", name: "Tatar" },
  { value: "te", name: "Telugu" },
  { value: "th", name: "Thai" },
  { value: "tr", name: "Turkish" },
  { value: "tk", name: "Turkmen" },
  { value: "uk", name: "Ukrainian" },
  { value: "ur", name: "Urdu" },
  { value: "ug", name: "Uyghur" },
  { value: "uz", name: "Uzbek" },
  { value: "vi", name: "Vietnamese" },
  { value: "cy", name: "Welsh" },
  { value: "xh", name: "Xhosa" },
  { value: "yi", name: "Yiddish" },
  { value: "yo", name: "Yoruba" },
  { value: "zu", name: "Zulu" },
];

export default function EvaluationForm() {
  const setPage = useSetRecoilState(evalutonForm);
  const [onlyEng, setOnlyEng] = useState(false);
  const [isusa, setIsusa] = useState(false);
  const [iscanada, setIscanada] = useState(false);
  const [iseducation, setIseducation] = useState(false);
  const [isLicence, setIslicence] = useState(false);
  const [isEmployee, setIsEmployee] = useState(false);
  const [isimmigration, setImmigration] = useState(false);
  const [isMilitary, setMilitary] = useState(false);

  const [educationOption, setEducationOption] = useState({
    Undergraduate: false,
    Graduate: false,
  });

  const [educationreport, setEducationReport] = useState({
    courseReport: false,
    gpaReport: false,
    docReport: false,
  });

  const [license, setlicense] = useState({
    accounting: false,
    teaching: false,
    other: false,
  });

  const [edusecno, setEdusecno] = useState(true);

  const educationGpaReport = (event:ChangeEvent<HTMLInputElement>) =>{
      const ischecked = event.target.checked
      if(ischecked){
        setEducationReport({
          courseReport: false,
          gpaReport: true,
          docReport: false,
        })
      }
  }
  const educationDocReport = (event:ChangeEvent<HTMLInputElement>) =>{
      const ischecked = event.target.checked
      if(ischecked){
        setEducationReport({
          courseReport: false,
          gpaReport: false,
          docReport: true,
        })
      }
  }

  const secondaryReportyes = (event:ChangeEvent<HTMLInputElement>)=>{
    const isChecked = event.target.checked
    if(isChecked){
      setEdusecno(true)
    }
  }
  const secondaryReportno = (event:ChangeEvent<HTMLInputElement>)=>{
    const isChecked = event.target.checked
    if(isChecked){
      setEdusecno(false)
    }
  }

  const employeeHandler = () => {
    setIseducation(false);
    setIslicence(false);
    setEducationOption({
      Graduate: false,
      Undergraduate: false,
    });
    setlicense({
      other: false,
      teaching: false,
      accounting: false,
    });
    setImmigration(false);
    setMilitary(false);
    setIsEmployee(true);
  };

  const immigrationHandler = () => {
    setIseducation(false);
    setIslicence(false);
    setEducationOption({
      Graduate: false,
      Undergraduate: false,
    });
    setlicense({
      other: false,
      teaching: false,
      accounting: false,
    });
    setIsEmployee(false);
    setMilitary(false);
    setImmigration(true);
  };
  const militaryHandler = () => {
    setIseducation(false);
    setIslicence(false);
    setEducationOption({
      Graduate: false,
      Undergraduate: false,
    });
    setlicense({
      other: false,
      teaching: false,
      accounting: false,
    });
    setIsEmployee(false);
    setImmigration(false);
    setMilitary(true);
  };

  const accounthandler = () => {
    setlicense({
      accounting: true,
      teaching: false,
      other: false,
    });
  };
  const teachHandler = () => {
    setlicense({
      accounting: false,
      teaching: true,
      other: false,
    });
  };
  const otherHandler = () => {
    setlicense({
      accounting: false,
      teaching: false,
      other: true,
    });
  };

  const underguaranteHandler = () => {
    setEducationOption({
      Undergraduate: false,
      Graduate: true,
    });
  };
  const guaranteHandler = () => {
    setEducationOption({
      Undergraduate: true,
      Graduate: false,
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

  const courseReportHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setEducationReport({
      courseReport: isChecked,
      gpaReport: false,
      docReport: false,
    });
  };

  const alldocHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setOnlyEng(!isChecked);
  };
  const engHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setOnlyEng(isChecked);
  };

  const nextButtonHandler = () => {
    setPage({
      informaton: { timeline: true, page: true },
      evaluations: { timeline: false, page: false },
      education: { timeline: false, page: false },
      delivery: { timeline: false, page: false },
      pay: { timeline: false, page: false },
    });
  };

  useEffect(() => {
    if (
      educationOption.Graduate == true ||
      educationOption.Undergraduate == true
    ) {
      setIslicence(false);
      setlicense({
        other: false,
        teaching: false,
        accounting: false,
      });
      setIseducation(true);
      setIsEmployee(false);
    }
    if (
      license.accounting == true ||
      license.other == true ||
      license.teaching == true
    ) {
      setIsEmployee(false);
      setEducationOption({
        Graduate: false,
        Undergraduate: false,
      });
      setIslicence(true);
      setIseducation(false);
    }
  }, [educationOption, license]);

  return (
    <form className="px-10 max-md:px-2 flex flex-col gap-5 max-md:w-full w-[70%] md:border-l">
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
                {" "}
                <figure
                  className={`flex flex-col w-[14rem] h-[9rem] justify-center items-center p-5 gap-3 border active:bg-blue-50 ${
                    iseducation ? "bg-blue-50" : ""
                  }`}
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
                        onChange={guaranteHandler}
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
                    <Button className="bg-[#2aaae0] font-bold rounded-full">
                      Ok
                    </Button>
                  </DialogClose>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger>
                {iscanada && (
                  <figure
                    className={`flex flex-col w-[14rem] h-[9rem] justify-center items-center p-5 gap-3 border active:bg-blue-50 ${
                      isLicence ? "bg-blue-50" : ""
                    }`}
                  >
                    <img src={licenseImg} alt="education logo" />
                    <p>Professional License / Certification</p>
                  </figure>
                )}
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-bold">
                    Are you applying for:
                  </DialogTitle>
                  <DialogDescription className="p-5 flex flex-col gap-5 font-bold">
                    <div className="flex items-center gap-5">
                      <input
                        id="1"
                        type="radio"
                        name="radio-1"
                        className="border-black radio radio-info"
                        onChange={accounthandler}
                      />
                      <label
                        htmlFor="1"
                        className="flex justify-between w-full"
                      >
                        Accounting Licensure
                      </label>
                    </div>
                    <div className="flex items-center gap-5">
                      <input
                        id="firstyear"
                        type="radio"
                        name="radio-1"
                        className="border-black radio radio-info"
                        onChange={teachHandler}
                      />
                      <label
                        htmlFor="firstyear"
                        className="flex justify-between w-full"
                      >
                        Teaching Licensure
                      </label>
                    </div>
                    <div className="flex items-center gap-5">
                      <input
                        id="4"
                        type="radio"
                        name="radio-1"
                        className="border-black radio radio-info"
                        onChange={otherHandler}
                      />
                      <label
                        htmlFor="4"
                        className="flex justify-between w-full"
                      >
                        Other Licensure/Certification
                      </label>
                    </div>
                  </DialogDescription>
                  <DialogClose className="w-full justify-end flex">
                    <Button className="bg-[#2aaae0] font-bold rounded-full">
                      Ok
                    </Button>
                  </DialogClose>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <figure
              className={`flex flex-col w-[14rem] h-[9rem] justify-center items-center p-5 gap-3 border active:bg-blue-50 ${
                isEmployee ? "bg-blue-50" : ""
              }`}
              onClick={employeeHandler}
            >
              <img src={employmentImg} alt="education logo" />
              <p>Employment</p>
            </figure>
            {iscanada && (
              <figure
                className={`flex flex-col w-[14rem] h-[9rem] justify-center items-center p-5 gap-3 border active:bg-blue-50 ${
                  isimmigration ? "bg-blue-50" : ""
                }`}
                onClick={immigrationHandler}
              >
                <img src={immigrationImg} alt="education logo" />
                <p>Immigration</p>
              </figure>
            )}
            {iscanada && (
              <figure
                className={`flex flex-col w-[14rem] h-[9rem] justify-center items-center p-5 gap-3 border active:bg-blue-50 ${
                  isMilitary ? "bg-blue-50" : ""
                }`}
                onClick={militaryHandler}
              >
                <img src={militaryImg} alt="education logo" />
                <p>Military</p>
              </figure>
            )}
          </div>
        </div>
      )}
      {license.accounting && (
        <div className="flex flex-col gap-5 border-t ">
          <p className="mt-10 font-bold">
            Select the type of report you need{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex items-center gap-5">
              <input
                id="accounting"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
              />
              <label
                className="w-full flex justify-between"
                htmlFor="accounting"
              >
                <p> Accounting Licensure Report</p>{" "}
                <p className="font-bold">$250</p>
              </label>
            </div>
          </div>
        </div>
      )}
      {license.teaching && (
        <div className="flex flex-col gap-5 border-t ">
          <p className="mt-10 font-bold">
            Select the type of report you need{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex items-center gap-5">
              <input
                id="accounting"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
              />
              <label
                className="w-full flex justify-between"
                htmlFor="accounting"
              >
                <p> Teaching Licensure Report</p>{" "}
                <p className="font-bold">$225</p>
              </label>
            </div>
          </div>
        </div>
      )}
      {license.other && (
        <div className="flex flex-col gap-5 border-t ">
          <p className="mt-10 font-bold">
            Select the type of report you need{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex items-center gap-5">
              <input
                id="accounting"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
              />
              <label
                className="w-full flex justify-between"
                htmlFor="accounting"
              >
                <p> General Licensure Report</p>{" "}
                <p className="font-bold">$225</p>
              </label>
            </div>
          </div>
        </div>
      )}
      {educationOption.Undergraduate && (
        <div className="flex flex-col gap-5 border-t ">
          <p className="mt-10 font-bold">
            Select the type of report you need{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex items-center gap-5">
              <input
                id="abu"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
                onChange={courseReportHandler}
              />
              <label className="w-full flex justify-between" htmlFor="abu">
                <p>Education Course Report</p> <p className="font-bold">$185</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="wed"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
                onChange={educationGpaReport}
              />
              <label className="w-full flex justify-between" htmlFor="wed">
                <p>Education Document + GPA Report</p>{" "}
                <p className="font-bold">$130</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="zxc"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
                onChange={educationDocReport}
              />
              <label className="w-full flex justify-between" htmlFor="zxc">
                <p> Education Document Report </p>{" "}
                <p className="font-bold">$95</p>
              </label>
            </div>
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
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
                defaultChecked
              />
              <label className="w-full flex justify-between" htmlFor="new">
                <p> Divisional Education Course Report</p>{" "}
                <p className="font-bold">$225</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="GPA"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
                defaultChecked
              />
              <label className="w-full flex justify-between" htmlFor="GPA">
                <p> Education Course Report</p>{" "}
                <p className="font-bold">$185</p>
              </label>
            </div>
          </div>
        </div>
      )}
      {isEmployee && (
        <div className="flex flex-col gap-5 border-t ">
          <p className="mt-10 font-bold">
            Select the type of report you need{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex items-center gap-5">
              <input
                id="emcore"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
                defaultChecked
              />
              <label className="w-full flex justify-between" htmlFor="emcore">
                <p>Employment Course Report</p>{" "}
                <p className="font-bold">$185</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="emdogpa"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
              />
              <label className="w-full flex justify-between" htmlFor="emdogpa">
                <p>Employment Document + GPA Report</p>{" "}
                <p className="font-bold">$130</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="emdore"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
              />
              <label className="w-full flex justify-between" htmlFor="emdore">
                <p>Employment Document Report</p>{" "}
                <p className="font-bold">$95</p>
              </label>
            </div>
          </div>
        </div>
      )}
      {isimmigration && (
        <div className="flex flex-col gap-5 border-t ">
          <p className="mt-10 font-bold">
            Select the type of report you need{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex items-center gap-5">
              <input
                id="emcore"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
                defaultChecked
              />
              <label className="w-full flex justify-between" htmlFor="emcore">
                <p>Immigration Course Report</p>{" "}
                <p className="font-bold">$185</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="emdogpa"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
              />
              <label className="w-full flex justify-between" htmlFor="emdogpa">
                <p>Immigration Document + GPA Report</p>{" "}
                <p className="font-bold">$130</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="emdore"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
              />
              <label className="w-full flex justify-between" htmlFor="emdore">
                <p>Immigration Report</p> <p className="font-bold">$95</p>
              </label>
            </div>
          </div>
        </div>
      )}
      {isMilitary && (
        <div className="flex flex-col gap-5 border-t ">
          <p className="mt-10 font-bold">
            Select the type of report you need{" "}
            <span className="text-red-500">*</span>
          </p>
          <div className="flex flex-col gap-10 mb-10">
            <div className="flex items-center gap-5">
              <input
                id="emcore"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
                defaultChecked
              />
              <label className="w-full flex justify-between" htmlFor="emcore">
                <p>Military Course Report</p> <p className="font-bold">$185</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="emdogpa"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
              />
              <label className="w-full flex justify-between" htmlFor="emdogpa">
                <p>Military Document + GPA Report</p>{" "}
                <p className="font-bold">$130</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="emdore"
                type="radio"
                name="radio-7"
                className="border-black radio radio-info "
              />
              <label className="w-full flex justify-between" htmlFor="emdore">
                <p>Military Report</p> <p className="font-bold">$95</p>
              </label>
            </div>
          </div>
        </div>
      )}
      {(educationreport.courseReport || educationreport.gpaReport || educationreport.docReport)&& (
        <>
          <div className="flex flex-col gap-5 border-t ">
            <p className="mt-10 font-bold">
              Do you need a verification report for your academic credentials?
              <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-col gap-10 mb-10">
              <div className="flex items-center gap-5">
                <input
                  id="yesemcore"
                  type="radio"
                  name="radio-0"
                  className="border-black radio radio-info "
                  onChange={secondaryReportyes}
                />
                <label
                  className="w-full flex justify-between"
                  htmlFor="yesemcore"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-5">
                <input
                  id="noemdogpa"
                  type="radio"
                  name="radio-0"
                  className="border-black radio radio-info "
                  onChange={secondaryReportno}
                />
                <label
                  className="w-full flex justify-between"
                  htmlFor="noemdogpa"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          {edusecno && <div className="flex flex-col gap-5 border-t ">
            <p className="mt-10 font-bold">
            Would you like to include your high school courses to your report?
              <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-col gap-10 mb-10">
              <div className="flex items-center gap-5">
                <input
                  id="addHigh"
                  type="checkbox"
                  className="border-black checkbox checkbox-info [--chkfg:white]"
                />
                <label
                  className="w-full flex justify-between"
                  htmlFor="addHigh"
                >
                  <p>Add High School courses</p>
                  <p>$30</p>
                </label>
              </div>
            </div>
          </div>}
          <div className="flex flex-col gap-5 border-t ">
            <p className="mt-10 font-bold">
              Would you like to select an additional evaluation for any of the
              following purposes?
              <span className="text-red-500">*</span>
            </p>
            <div className="flex flex-col gap-10 mb-10">
              <div className="flex items-center gap-5">
                <input
                  id="edcanada"
                  type="checkbox"
                  className="border-black checkbox checkbox-info [--chkfg:white]"
                />
                <label
                  className="w-full flex justify-between"
                  htmlFor="edcanada"
                >
                  <p>Education Course Report (Canada)</p>
                  <p>$80</p>
                </label>
              </div>
              <div className="flex items-center gap-5">
                <input
                  id="emus"
                  type="checkbox"
                  className="border-black checkbox checkbox-info [--chkfg:white]"
                />
                <label className="w-full flex justify-between" htmlFor="emus">
                  <p>Employment Course Report (US)</p>
                  <p>$80</p>
                </label>
              </div>
              <div className="flex items-center gap-5">
                <input
                  id="imus"
                  type="checkbox"
                  className="border-black checkbox checkbox-info [--chkfg:white]"
                />
                <label className="w-full flex justify-between" htmlFor="imus">
                  <p>Immigration Report (US)</p>
                  <p>$40</p>
                </label>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex flex-col gap-5 border-t ">
        <p className="py-5 font-bold">
          Translation Services
          <span className="text-red-500">*</span>
        </p>
        <p>
          International Education Evaluations requires certified English
          translations for all documents issued in any language other than
          English.
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
              All my documents are in English or I have a certified English
              translation
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
              <p className="font-bold">$60.00 per page</p>
              <p>
                LANGUAGE OF THE DOCUMENTS{" "}
                <span className="text-red-500">*</span>
              </p>
              <select
                id="languages"
                name="languages"
                className="focus:outline-none w-full border-b py-3 "
              >
                <option></option>
                {languageList.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.name}
                  </option>
                ))}
              </select>
              <p>
                HOW MANY PAGES? <span className="text-red-500">*</span>
              </p>
              <input
                type="number"
                required
                className="outline-none mb-5 active:bg-none border-b py-3 "
              />
            </div>
          )}

          <div className="flex flex-col gap-5 pt-5 mt-5 border-t">
            <p className="font-bold">
              Processing Time <span className="text-red-500">*</span>
            </p>
            <p>
              The standard processing time to receive a completed MyIEE
              evaluation report is 3 business days after receipt, review, and
              approval of all documents and English translations and payment in
              full. If additional research, correspondence, or verification is
              required, the evaluation will take longer. Because expedited
              orders are prioritized and begin processing immediately, expedited
              service fees are non-refundable. Expedited processing is
              guaranteed for 3-5 pages of translation. Any additional pages may
              incur additional processing time.
            </p>
            <div className="flex items-center gap-5">
              <input
                id="3"
                type="radio"
                name="radio-1"
                className="border-black radio radio-info "
                defaultChecked
              />
              <label htmlFor="3" className="flex justify-between w-full">
                <p> 3 Business Days - GUARANTEED</p>
                <p className="font-bold">$50</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="2"
                type="radio"
                name="radio-1"
                className="border-black radio radio-info"
              />
              <label htmlFor="2" className="flex justify-between w-full">
                <p> 2 Business Days - GUARANTEED</p>
                <p className="font-bold">$100</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="next"
                type="radio"
                name="radio-1"
                className="border-black radio radio-info"
              />
              <label htmlFor="next" className="flex justify-between w-full">
                <p>Next Business Day - GUARANTEED</p>
                <p className="font-bold">$200</p>
              </label>
            </div>
            <div className="flex items-center gap-5">
              <input
                id="32"
                type="radio"
                name="radio-1"
                className="border-black radio radio-info"
              />
              <label htmlFor="32" className="flex justify-between w-full">
                <p>3 Business Days - NOT GUARANTEED</p>
                <p className="font-bold">$0</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-end flex mt-5">
        <Button
          className="bg-[#2aaae0] font-bold rounded-full"
          onClick={nextButtonHandler}
        >
          Next
        </Button>
      </div>
    </form>
  );
}
