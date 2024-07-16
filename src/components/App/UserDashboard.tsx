import Accordion from "@mui/material/Accordion";import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { RiArrowUpSLine } from "react-icons/ri";

import { SyntheticEvent, useEffect, useState } from "react";
import { AccordionDetails } from "@mui/material";
import {
  getUserEmailById,
  getUserEvaluationDetailsById,
  getUserProfileById,
} from "../../http/fetch";

interface FormValues {
  first_name: string;
  middle_name: string;
  last_name: string;

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

export default function UserDashboard() {
  const [userEmail, setUserEmail] = useState<string>();
  const [userEvaluation, setUserEvaluation] = useState<Evaluation[]>([]);
  const [userProfile, setUserProfile] = useState<FormValues>();
  const [expanded, setExpanded] = useState<string | false>(false);
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

  useEffect(() => {
    const fetch = async () => {
      if (localStorage.getItem("userId")) {
        const userId = localStorage.getItem("userId");
        const mailResponse = await getUserEmailById({ userId: userId });
        const response = await getUserProfileById({ userId: userId });
        const evaResponse = await getUserEvaluationDetailsById({
          userId: userId,
        });
        if (mailResponse && response && evaResponse) {
          setUserEmail(mailResponse.data.data);
          setUserProfile(response.data.data);
          setUserEvaluation(evaResponse.data.data);
        }
      }
    };
    fetch();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-[50%] max-md:w-[95%]">
        <h1 className="font-bold text-4xl text-center my-5">My Account</h1>
        <div className="shadow-lg p-5 flex flex-col gap-5 border border-[#2aaae0]">
          <div>
            <label className="font-medium">FIRST NAME</label>
            <p>{userProfile?.first_name}</p>
          </div>
          <div>
            <label className="font-medium">LAST NAME</label>
            <p>{userProfile?.last_name}</p>
          </div>
          <div>
            <label className="font-medium">EMAIL ADDRESS</label>
            <p>{userEmail}</p>
          </div>
          <div>
            <label className="font-medium">ADDRESS</label>
            <p>
              {userProfile?.street_address} {userProfile?.state}{" "}
              {userProfile?.postal_code} <br />
              {userProfile?.country}
            </p>
          </div>
          <div>
            <label className="font-medium">PHONE</label>
            <p>{userProfile?.phone_number}</p>
          </div>
        </div>
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
              <Typography sx={{ width: "33%", flexShrink: 0 }} className="font-bold">
                #Order {i + 1}
              </Typography>
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Document Language: {eva.language ? eva.language : "Engligh"}
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
                <p className="font-bold mb-2">Academic credential verification.</p>
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
    </main>
  );
}
