import { useSetRecoilState } from "recoil";
import { evalutonForm } from "../../../store/context";
import { Button } from "../../ui/button";
import { ChangeEvent, useEffect, useState } from "react";


import { SubmitHandler, useForm } from "react-hook-form";
import { Backdrop, CircularProgress } from "@mui/material";
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
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);



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
    if (!onlyEng) {
      data.language = "";
    }
    setIsLoading(true);
    setFetchError(null);

    if ( data.certificate || data.transcript) {
      if (localStorage.getItem("userId")) {
        const userId = localStorage.getItem("userId");
        data.userId = userId;

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
      nextButtonHandler();
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    const fetch = async () => {
      if (localStorage.getItem("userId")) {
        const userId = localStorage.getItem("userId");
        setIsLoading(true);
        const response = await getUserEvalutionById({ userId: userId });
        if (response.data.data) {
          const data = response.data.data;
          setValue("courseByCourse", data.courseByCourse);
          setValue("certificate", data.certificate);
          setValue("transcript", data.transcript);
          setValue("language", data.language);
          if (data.language) {
            setOnlyEng(true);
          }
        }
      }
      setIsLoading(false);
    };
    fetch();
  }, [setValue]);

  return (
    <form
      className="px-10 max-md:px-2 flex flex-col gap-5 max-md:w-full w-[70%] md:border-l"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-5">
        <p className="mt-10 font-bold">
          Select type of service you need
          <span className="text-red-500">*</span>
        </p>
        <div className="flex flex-col gap-10 mb-10">
          <div className="flex items-center gap-5">
            <input
              id="courseby"
              type="checkbox"
              className="checkbox checkbox-info [--chkfg:white] "
              {...register("certificate")}
            />
            <label className="w-full flex justify-between" htmlFor="courseby">
              <p>Certificate Verification</p> <p className="font-bold">€10</p>
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
              <p>Transcript Verification</p> <p className="font-bold">€10</p>
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 border-t ">
        <p className="py-5 font-bold">
          Translation Services
          <span className="text-red-500">*</span>
        </p>
        <p>
          Certified translations for all official and legal documents not issued in German language.
        </p>
        <div className="flex flex-col gap-5 ">
          <div className="flex items-center gap-5">
            <input
              id="tranEng"
              type="radio"
              name="Translation"
              className="border-black radio radio-info"
              onChange={engHandler}
            />
            <label htmlFor="tranEng">Add German Translation</label>
          </div>
          {onlyEng && (
            <div className="flex flex-col gap-5">
              <p>
                Translated documents will be delivered via email once complete.
              </p>
              <p className="font-bold">€15 per document</p>
              <p>
                Select the current language of your document.
                <span className="text-red-500">*</span>
              </p>
              <select
                id="languages"
                className="focus:outline-none w-full border-b py-3 "
                {...register("language")}
              >
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
              Processing Times <span className="text-red-500">*</span>
            </p>

            <p>
              Document Translation:
              <span className="font-bold"> 3 Business Days.</span>
            </p>
            <p>
              Document verification:
              <span className="font-bold"> 3 Business Days.</span>
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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </form>
  );
}
