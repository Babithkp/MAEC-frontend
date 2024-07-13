import Backdrop from "@mui/material/Backdrop";
import {  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import { RxCross2, RxCrossCircled } from "react-icons/rx";

import { Button } from "../../ui/button";
import { v4 } from "uuid";
import { useSetRecoilState } from "recoil";
import { evalutonForm } from "../../../store/context";
import { ChangeEvent, useRef, useState } from "react";
import { uploadPostDoc } from "../../../http/fetch";
import { CircularProgress } from "@mui/material";

interface Documents {
  courseByCourse: string[];
  academicCredentials: string[];
  documentTranslations: string[];
}

interface DocumentsErrorType {
  courseByCourse: boolean;
  academicCredentials: boolean;
  documentTranslations: boolean;
}

export default function EducationForm() {
  const courseByRef = useRef<HTMLInputElement | null>(null);
  const academicRef = useRef<HTMLInputElement | null>(null);
  const docTrasRef = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const [courseByCourseError, setCouseByCouseFileError] = useState<
    null | string
  >(null);
  const [academicError, setacademicError] = useState<null | string>(null);
  const [documentError, setdocumentError] = useState<null | string>(null);
  const setPage = useSetRecoilState(evalutonForm);
  const [dataStorage, setDataStorage] = useState<Documents>({
    courseByCourse: [],
    academicCredentials: [],
    documentTranslations: [],
  });
  const [overloadmsg, setOverloadmsg] = useState<DocumentsErrorType>({
    courseByCourse: false,
    academicCredentials: false,
    documentTranslations: false,
  });
  const [fileName, setFileName] = useState<Documents>({
    courseByCourse: [],
    academicCredentials: [],
    documentTranslations: [],
  });
  const formdata = new FormData();

  const coursebyInputHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (dataStorage.courseByCourse.length >= 3) {
      setOverloadmsg((prev) => ({ ...prev, courseByCourse: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      if (files[0].size > 5000000) {
        setCouseByCouseFileError(
          "File size is too large, (minimum sixe is 5Mb)"
        );
        return;
      } else {
        setCouseByCouseFileError(null);
        setIsloading(true)
        formdata.delete("files");
        const newId = v4() + files[0].name;
        formdata.append("files", files[0], newId);
        await uploadPostDoc(formdata)
        setIsloading(false)
        setFileName((prev) => ({
          ...prev,
          courseByCourse: [...prev.courseByCourse, files[0].name],
        }));
        setDataStorage((prev) => ({
          ...prev,
          courseByCourse: [...prev.courseByCourse, newId],
        }));
      }
    }
  };
  const acdemicinputHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (dataStorage.academicCredentials.length >= 3) {
      setOverloadmsg((prev) => ({ ...prev, academicCredentials: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      if (files[0].size > 5000000) {
        setacademicError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setacademicError(null);
        setIsloading(true)
        formdata.delete("files");
        const newId = v4() + files[0].name;
        formdata.append("files", files[0], newId);
        await uploadPostDoc(formdata)
        setIsloading(false)
        setFileName((prev) => ({
          ...prev,
          academicCredentials: [...prev.academicCredentials, files[0].name],
        }));
        setDataStorage((prev) => ({
          ...prev,
          academicCredentials: [...prev.academicCredentials, newId],
        }));
      }
    }

  };
  const docuTransInputHandler = async(event: ChangeEvent<HTMLInputElement>) => {
    if (dataStorage.documentTranslations.length >= 3) {
      setOverloadmsg((prev) => ({ ...prev, documentTranslations: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      if (files[0].size > 5000000) {
        setdocumentError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setdocumentError(null);
        setIsloading(true)
        formdata.delete("files");
        const newId = v4() + files[0].name;
        formdata.append("files", files[0], newId);
        await uploadPostDoc(formdata)
        setIsloading(false)
        setFileName((prev) => ({
          ...prev,
          documentTranslations: [...prev.documentTranslations, files[0].name],
        }));
        setDataStorage((prev) => ({
          ...prev,
          documentTranslations: [...prev.documentTranslations, newId],
        }));
      }
    }
  };

  const deleteSingleFileCourseBy = (index: number) => {
    const filteredOut = dataStorage.courseByCourse.filter((_, i) => i != index);
    const filteredName = fileName.courseByCourse.filter((_, i) => i != index);
    setFileName((prev) => ({ ...prev, courseByCourse: filteredName }));
    setDataStorage((prev) => ({ ...prev, courseByCourse: filteredOut }));
  };
  const deleteSingleFileAdamic = (index: number) => {
    const filteredOut = dataStorage.academicCredentials.filter((_, i) => i != index);
    const filteredName = fileName.academicCredentials.filter((_, i) => i != index);
    setFileName((prev) => ({ ...prev, academicCredentials: filteredName }));
    setDataStorage((prev) => ({ ...prev, academicCredentials: filteredOut }));
  };
  const deleteSingleFiledDocTras = (index: number) => {
    const filteredOut = dataStorage.documentTranslations.filter((_, i) => i != index);
    const filteredName = fileName.documentTranslations.filter((_, i) => i != index);
    setFileName((prev) => ({ ...prev, documentTranslations: filteredName }));
    setDataStorage((prev) => ({ ...prev, documentTranslations: filteredOut }));
  };

  const nextButtonHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
    <section className="px-10 max-md:px-2 flex flex-col gap-5 max-md:w-full w-[70%] md:border-l">
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
            Add Documents
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add Credential</AlertDialogTitle>
            <AlertDialogDescription className="text-start">
              <div className="my-5">
                <label className="text-sm font-semibold">
                  Course-by-Course Evaluation.
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex max-md:items-end rounded-sm border-[1.9px] border-slate-300 max-md:p-1 max-md:gap-2">
                  <button
                    type="button"
                    className="bg-[#2aaae0] px-2 py-1 text-white"
                    onClick={() => courseByRef.current?.click()}
                  >
                    Browse
                  </button>
                  <input
                    type="file"
                    className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                    placeholder=""
                    ref={courseByRef}
                    onChange={coursebyInputHandler}
                    accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                  />
                  <div className="w-full  flex flex-wrap gap-1">
                    {fileName.courseByCourse.map((doc, i) => (
                      <span
                        className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                        key={i}
                      >
                        {doc.substring(0, 20)}
                        <Button
                          variant={"secondary"}
                          className="p-0 rounded-full w-5 h-5"
                          onClick={() => deleteSingleFileCourseBy(i)}
                          type="button"
                        >
                          <RxCrossCircled className="w-full h-full" />
                        </Button>
                      </span>
                    ))}
                  </div>
                </div>
                {courseByCourseError && (
                  <span className="text-red-500 text-sm font-medium mt-2">
                    {courseByCourseError}
                  </span>
                )}
                {overloadmsg.courseByCourse && (
                  <span className=" text-sm font-medium  text-red-500">
                    Maxmium File Count Exceeded
                  </span>
                )}
              </div>
              <div className="my-5">
                <label className="text-sm font-semibold">
                  Academic credential verification.
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex max-md:items-end rounded-sm border-[1.9px] border-slate-300 max-md:p-1 max-md:gap-2">
                  <button
                    type="button"
                    className="bg-[#2aaae0] px-2 py-1 text-white"
                    onClick={() => academicRef.current?.click()}
                  >
                    Browse
                  </button>
                  <input
                    type="file"
                    className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                    placeholder=""
                    ref={academicRef}
                    onChange={acdemicinputHandler}
                    accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                  />
                  <div className="w-full  flex flex-wrap gap-1">
                    {fileName.academicCredentials.map((doc, i) => (
                      <span
                        className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                        key={i}
                      >
                        {doc.substring(0, 20)}
                        <Button
                          variant={"secondary"}
                          className="p-0 rounded-full w-5 h-5"
                          onClick={() => deleteSingleFileAdamic(i)}
                          type="button"
                        >
                          <RxCrossCircled className="w-full h-full" />
                        </Button>
                      </span>
                    ))}
                  </div>
                </div>
                {academicError && (
                  <span className="text-red-500 text-sm font-medium mt-2">
                    {academicError}
                  </span>
                )}
                {overloadmsg.academicCredentials && (
                  <span className=" text-sm font-medium  text-red-500">
                    Maxmium File Count Exceeded
                  </span>
                )}
              </div>
              <div className="my-5 ">
                <label className="text-sm font-semibold">
                  Document Translation
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <div className="flex max-md:items-end rounded-sm border-[1.9px] border-slate-300 max-md:p-1 max-md:gap-2">
                  <button
                    type="button"
                    className="bg-[#2aaae0] px-2 py-1 text-white"
                    onClick={() => docTrasRef.current?.click()}
                  >
                    Browse
                  </button>
                  <input
                    type="file"
                    className="w-full px-2 text-sm focus:outline-blue-400 hidden"
                    placeholder=""
                    ref={docTrasRef}
                    onChange={docuTransInputHandler}
                    accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                  />
                  <div className="w-full  flex flex-wrap gap-1">
                    {fileName.documentTranslations.map((doc, i) => (
                      <span
                        className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                        key={i}
                      >
                        {doc.substring(0, 20)}
                        <Button
                          variant={"secondary"}
                          className="p-0 rounded-full w-5 h-5"
                          onClick={() => deleteSingleFiledDocTras(i)}
                          type="button"
                        >
                          <RxCrossCircled className="w-full h-full" />
                        </Button>
                      </span>
                    ))}
                  </div>
                </div>
                {documentError && (
                  <span className="text-red-500 text-sm font-medium mt-2">
                    {documentError}
                  </span>
                )}
                {overloadmsg.documentTranslations && (
                  <span className=" text-sm font-medium  text-red-500">
                    Maxmium File Count Exceeded
                  </span>
                )}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="absolute top-0 right-0 border-none ">
              <RxCross2 size={20} />
            </AlertDialogCancel>
            <AlertDialogAction className="bg-[#2aaae0] font-bold rounded-full ">
              Save
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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </section>
  );
}
