import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { RiArrowUpSLine } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { SyntheticEvent, useEffect, useState } from "react";
import { AccordionDetails, Backdrop, CircularProgress } from "@mui/material";
import {
  getUserEmailById,
  getUserEvaluationDetailsById,
  getUserProfileById,
  updateProfile,
} from "../../http/fetch";
import { Button } from "../ui/button";

interface FormValues {
  first_name: string;
  middle_name: string;
  last_name: string;
  email_address: string;
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  phone_number: string;
}

interface Evaluation {
  language: string;
  documents: {
    courseByCourse: string[];
    certificate: string[];
    transcript: string[];
    paid_amount: number;
  };
}

interface User {
  email_address: string;
  password: string;
}

export default function UserDashboard() {
  const [userEvaluation, setUserEvaluation] = useState<Evaluation[]>([]);
  const [userProfile, setUserProfile] = useState<FormValues>();
  const [user, setUser] = useState<User>();
  const [expanded, setExpanded] = useState<string | false>(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);

  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      if (user && userProfile) {
        userProfile.first_name = data.first_name;
        userProfile.last_name = data.last_name;
        userProfile.phone_number = data.phone_number;
        setIsLoading(true);
        const profileResponse = await updateProfile(userProfile);
        setIsLoading(false);
        if (profileResponse) {
          console.log(profileResponse);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      if (localStorage.getItem("userId")) {
        const userId = localStorage.getItem("userId");
        setIsLoading(true);
        const mailResponse = await getUserEmailById({ userId: userId });
        const response = await getUserProfileById({ userId: userId });
        const evaResponse = await getUserEvaluationDetailsById({
          userId: userId,
        });
        setIsLoading(false);
        if (mailResponse && response && evaResponse) {
          setValue("email_address", mailResponse.data.data.email_address);
          setValue("first_name", response.data.data.first_name);
          setValue("last_name", response.data.data.last_name);
          setValue("phone_number", response.data.data.phone_number);
          setUserProfile(response.data.data);
          setUserEvaluation(evaResponse.data.data);
          setUser(mailResponse.data.data);
        }
      }
    };
    fetch();
  }, [setValue]);

  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-[50%] max-md:w-[95%]">
        <h1 className="font-bold text-4xl text-center my-5">My Account</h1>
        <form
          className="p-5 flex flex-col gap-5  justify-center items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="border-b border-slate-300 flex flex-col mb-5 gap-5 w-[70%] max-md:w-[95%]">
            <label>
              FIRST NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="outline-none mb-5 active:bg-none"
              {...register("first_name")}
              minLength={3}

            />
          </div>
          <div className="border-b border-slate-300  flex flex-col mb-5 gap-5 w-[70%] max-md:w-[95%]">
            <label>
              LAST NAME <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="outline-none mb-5 active:bg-none"
              {...register("last_name")}
              minLength={1}
            />
          </div>
          <div className="border-b border-slate-300  flex flex-col mb-5 gap-5 w-[70%] max-md:w-[95%]">
            <label>
              EMAIL ADDRESS <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="outline-none mb-5 active:bg-none disabled:bg-white"
              {...register("email_address")}
              disabled
            />
          </div>
          <div className="border-b border-slate-300  flex flex-col mb-5 gap-5 w-[70%] max-md:w-[95%]">
            <label>
              PHONE NO. <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="outline-none mb-5 active:bg-none"
              {...register("phone_number")}
              minLength={10}
            />
          </div>
          <div>
            <Button className="bg-[#2aaae0] rounded-full">Save</Button>
          </div>
        </form>
      </section>
      <section className="w-[70%] my-5 flex flex-col gap-3 max-md:w-[95%]">
        <h3 className="text-2xl font-bold my-5">ORDERS</h3>
        {userEvaluation?.map((eva, i) => (
          <Accordion
            key={i}
            expanded={expanded === `agent${i}`}
            onChange={handleChange(`agent${i}`)}
          >
            <AccordionSummary
              expandIcon={<RiArrowUpSLine />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                sx={{ width: "33%", flexShrink: 0 }}
                className="font-bold"
              >
                #Order {i + 1}
              </Typography>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Document Language: {eva.language ? eva.language : "English"}
              </Typography>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Payment : {eva.documents.paid_amount ? "Completed" : "Pending"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="">
              <Typography className="md:w-[70rem]">
                <p className="font-bold mb-2">Course-by-Course evaluation</p>
                {eva.documents.courseByCourse.map((doc) => (
                  <a
                    key={doc}
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/maec/${doc}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100 ml-2"
                  >
                    {doc.substring(36)}
                  </a>
                ))}
              </Typography>
              <Typography className="md:w-[70rem]">
                <p className="font-bold mb-2">
                  Academic credential verification.
                </p>
                {eva.documents.certificate.map((doc) => (
                  <a
                    key={doc}
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/maec/${doc}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100 ml-2"
                  >
                    {doc.substring(36)}
                  </a>
                ))}
              </Typography>
              <Typography className="md:w-[70rem]">
                <p className="font-bold mb-2">Document Translation.</p>
                {eva.documents.transcript.map((doc) => (
                  <a
                    key={doc}
                    target="_blank"
                    href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/maec/${doc}`}
                    className=" border p-2 bg-slate-50 hover:bg-slate-100 ml-2"
                  >
                    {doc.substring(36)}
                  </a>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </section>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </main>
  );
}
