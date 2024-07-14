import InformationForm from "./InformationForm";import { useRecoilValue } from "recoil";
import { evalutonForm } from "../../../store/context";
import EvaluationForm from "./EvaluationForm";
import DocumentsForm from "./DocumentsForm";
import Pay from "./Pay";
import { useEffect } from "react";

export default function IntroForm() {
  const page = useRecoilValue(evalutonForm);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  return (
    <main className="flex justify-center max-md:flex-col max-md:px-5 px-20 py-3">
      <section className="md:w-[30%] h-[70vh] flex justify-center ">
        <ul className="steps steps-vertical font-medium">
          <li
            className={`step  ${
              page.informaton.timeline ? "step-info font-bold" : ""
            } `}
          >
            Your Information
          </li>
          <li
            className={`step  ${
              page.evaluations.timeline ? "step-info font-bold" : ""
            } `}
          >
            Your Evaluation
          </li>
          <li
            className={`step  ${
              page.education.timeline ? "step-info font-bold" : ""
            } `}
          >
            Your Documents
          </li>
          <li
            className={`step  ${
              page.pay.timeline ? "step-info font-bold" : ""
            } `}
          >
            Review & Pay
          </li>
        </ul>
      </section>
      {page.informaton.page && <InformationForm />}
      {page.evaluations.page && <EvaluationForm />}
      {page.education.page && <DocumentsForm />}
      {page.pay.page && <Pay />}
    </main>
  );
}
