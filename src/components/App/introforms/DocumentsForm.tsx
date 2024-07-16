import Backdrop from "@mui/material/Backdrop";
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
} from "../../ui/alert-dialog";
import { RxCross2, RxCrossCircled } from "react-icons/rx";

import { Button } from "../../ui/button";
import { v4 } from "uuid";
import { useSetRecoilState } from "recoil";
import { evalutonForm } from "../../../store/context";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  addDocuments,
  getDocumentByUserId,
  getUserEvalutionById,
  uploadPostDoc,
} from "../../../http/fetch";
import { CircularProgress } from "@mui/material";

interface Documents {
  courseByCourse: string[];
  certificate: string[];
  transcript: string[];
  userId: string | null;
}
interface DocumentsIsExisting {
  courseByCourse: boolean;
  certificate: boolean;
  transcript: boolean;
}

interface DocumentsErrorType {
  courseByCourse: boolean;
  certificate: boolean;
  transcript: boolean;
}

export default function EducationForm() {
  const courseByRef = useRef<HTMLInputElement | null>(null);
  const academicRef = useRef<HTMLInputElement | null>(null);
  const docTrasRef = useRef<HTMLInputElement | null>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const [buttonsLoading, setButtonsLoading] = useState(false);
  const [courseByCourseError, setCouseByCouseFileError] = useState<
    null | string
  >(null);
  const [academicError, setacademicError] = useState<null | string>(null);
  const [documentError, setdocumentError] = useState<null | string>(null);
  const setPage = useSetRecoilState(evalutonForm);
  const [dataStorage, setDataStorage] = useState<Documents>({
    courseByCourse: [],
    certificate: [],
    transcript: [],
    userId: "",
  });
  const [overloadmsg, setOverloadmsg] = useState<DocumentsErrorType>({
    courseByCourse: false,
    certificate: false,
    transcript: false,
  });
  const [isExist, setisExist] = useState<DocumentsIsExisting>({
    courseByCourse: false,
    certificate: false,
    transcript: false,
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
        setIsloading(true);
        formdata.delete("files");
        const newId = v4() + files[0].name;
        formdata.append("files", files[0], newId);
        await uploadPostDoc(formdata);
        setIsloading(false);
        setDataStorage((prev) => ({
          ...prev,
          courseByCourse: [...prev.courseByCourse, newId],
        }));
      }
    }
  };
  const acdemicinputHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if (dataStorage.certificate.length >= 3) {
      setOverloadmsg((prev) => ({ ...prev, certificate: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      if (files[0].size > 5000000) {
        setacademicError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setacademicError(null);
        setIsloading(true);
        formdata.delete("files");
        const newId = v4() + files[0].name;
        formdata.append("files", files[0], newId);
        await uploadPostDoc(formdata);
        setIsloading(false);

        setDataStorage((prev) => ({
          ...prev,
          certificate: [...prev.certificate, newId],
        }));
      }
    }
  };
  const docuTransInputHandler = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (dataStorage.transcript.length >= 3) {
      setOverloadmsg((prev) => ({ ...prev, transcript: true }));
      return;
    }
    const files = event.target.files;
    if (files) {
      if (files[0].size > 5000000) {
        setdocumentError("File size is too large, (minimum sixe is 5Mb)");
        return;
      } else {
        setdocumentError(null);
        setIsloading(true);
        formdata.delete("files");
        const newId = v4() + files[0].name;
        formdata.append("files", files[0], newId);
        await uploadPostDoc(formdata);
        setIsloading(false);

        setDataStorage((prev) => ({
          ...prev,
          transcript: [...prev.transcript, newId],
        }));
      }
    }
  };

  const deleteSingleFileCourseBy = (index: number) => {
    const filteredOut = dataStorage.courseByCourse.filter((_, i) => i != index);
    setDataStorage((prev) => ({ ...prev, courseByCourse: filteredOut }));
  };
  const deleteSingleFileAdamic = (index: number) => {
    const filteredOut = dataStorage.certificate.filter((_, i) => i != index);
    setDataStorage((prev) => ({ ...prev, certificate: filteredOut }));
  };
  const deleteSingleFiledDocTras = (index: number) => {
    const filteredOut = dataStorage.transcript.filter((_, i) => i != index);

    setDataStorage((prev) => ({ ...prev, transcript: filteredOut }));
  };

  const nextButtonHandler = async () => {
    if (
      dataStorage.courseByCourse.length > 0 ||
      dataStorage.certificate.length > 0 ||
      dataStorage.transcript.length > 0
    ) {
      setButtonsLoading(true);
      try {
        if (localStorage.getItem("userId")) {
          const userId = localStorage.getItem("userId");
          dataStorage.userId = userId;
          const response = await addDocuments(dataStorage);
          if (response.data.message) {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setPage({
              informaton: { timeline: true, page: false },
              evaluations: { timeline: true, page: false },
              education: { timeline: true, page: false },
              pay: { timeline: true, page: true },
            });
          }
        }
        setButtonsLoading(false);
      } catch (err) {
        setFetchError("Something went wrong, please try again");
        setTimeout(() => {
          setFetchError(null);
        }, 3000);
      }
    } else {
      setFetchError("Upload your Files to Proceed");
      setTimeout(() => {
        setFetchError(null);
      }, 3000);
    }

    setButtonsLoading(false);
  };

  const prevButtonHandler = () => {
    setPage({
      informaton: { timeline: true, page: false },
      evaluations: { timeline: true, page: true },
      education: { timeline: false, page: false },
      pay: { timeline: false, page: false },
    });
  };

  useEffect(() => {
    const fetch = async () => {
      if (localStorage.getItem("userId")) {
        const userId = localStorage.getItem("userId");
        const response = await getDocumentByUserId({ userId: userId });
        if (response.data.data) {
          setDataStorage(response.data.data);
        }
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      if (localStorage.getItem("userId")) {
        const userId = localStorage.getItem("userId");
        const response = await getUserEvalutionById({ userId: userId });
        if (response.data.data) {
          const data = response.data.data;
          
          if (data.courseByCourse) {
            setisExist((prev) => ({ ...prev, courseByCourse: true }));
          }
          if (data.certificate || data.transcript) {
            setisExist((prev) => ({ ...prev, certificate: true }));
          }
          if (data.language) {
            setisExist((prev) => ({ ...prev, transcript: true }));
          }
        }
      }
    };
    fetch();
  }, []);

  return (
    <section className="px-10 max-md:px-2 flex flex-col gap-5 max-md:w-full w-[70%] md:border-l">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-lg">Your Education</h2>
        <p className="py-5 font-bold">Please add your credentials</p>
        <ul className="flex flex-col gap-5">
          <li>
            Here you can upload your academic credentials and other official
            documents for evaluation, verification, and translation purposes.
          </li>
          <li>
            All documents uploaded on this portal will be processed for
            evaluation, authentication or translation according to the
            documents we have received.
          </li>
          <li>
            Ensure that you upload the orginal scanned copies of your documents.
            We do not accept pictures.
          </li>
        </ul>
      </div>

      <div>
        {(isExist.courseByCourse && dataStorage.courseByCourse.length > 0) && (
          <div className="flex flex-col gap-3">
            <p className="font-bold">Course-by-Course Evaluation.</p>
            <div className="p-1 border w-full flex">
              {dataStorage.courseByCourse.map((doc, i) => (
                <span
                  className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                  key={i}
                >
                  {doc.substring(36)}
                </span>
              ))}
            </div>
          </div>
        )}
        {(isExist.certificate && dataStorage.certificate.length > 0) && (
          <div className="flex flex-col gap-3 mt-5">
            <p className="font-bold">Academic credential verification.</p>
            <div className="p-1 border w-full flex">
              {dataStorage.certificate.map((doc, i) => (
                <span
                  className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                  key={i}
                >
                  {doc.substring(36)}
                </span>
              ))}
            </div>
          </div>
        )}
        {(isExist.transcript && dataStorage.transcript.length > 0) && (
          <div className="flex flex-col gap-3 mt-5">
            <p className="font-bold">Document Translation.</p>
            <div className="p-1 border w-full flex">
              {dataStorage.transcript.map((doc, i) => (
                <span
                  className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                  key={i}
                >
                  {doc.substring(36)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <AlertDialog>
        <AlertDialogTrigger className="w-full flex flex-col justify-start mt-10">
          <Button className="bg-[#2aaae0] font-bold rounded-full" type="button">
            {dataStorage.courseByCourse.length > 0 ||
            dataStorage.certificate.length > 0 ||
            dataStorage.transcript.length > 0
              ? "Edit Documents"
              : "Add Documents"}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Add Credential <span className="text-red-500 ml-1">*</span>
            </AlertDialogTitle>
            <AlertDialogDescription className="text-start">
              {isExist.courseByCourse && (
                <div className="my-5">
                  <label className="text-sm font-semibold">
                    Course-by-Course Evaluation.
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
                      {dataStorage.courseByCourse.map((doc, i) => (
                        <span
                          className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                          key={i}
                        >
                          {doc.substring(36)}
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
              )}
              {isExist.certificate && (
                <div className="my-5">
                  <label className="text-sm font-semibold">
                    Academic credential verification.
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
                      {dataStorage.certificate.map((doc, i) => (
                        <span
                          className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                          key={i}
                        >
                          {doc.substring(36)}
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
                  {overloadmsg.certificate && (
                    <span className=" text-sm font-medium  text-red-500">
                      Maxmium File Count Exceeded
                    </span>
                  )}
                </div>
              )}
              {isExist.transcript && (
                <div className="my-5 ">
                  <label className="text-sm font-semibold">
                    Document Translation.
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
                      {dataStorage.transcript.map((doc, i) => (
                        <span
                          className="text-sm  font-medium mx-2 border rounded-lg p-1 bg-blue-200 max-md:m-0  max-md:text-xs flex items-center gap-1"
                          key={i}
                        >
                          {doc.substring(36)}
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
                  {overloadmsg.transcript && (
                    <span className=" text-sm font-medium  text-red-500">
                      Maxmium File Count Exceeded
                    </span>
                  )}
                </div>
              )}
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
      {fetchError && (
        <p className="my-5 text-red-500 font-bold">{fetchError}</p>
      )}
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
          {buttonsLoading ? <CircularProgress color="inherit" /> : "Next"}
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
