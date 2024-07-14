import Accordion from "@mui/material/Accordion";import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { RiArrowUpSLine } from "react-icons/ri";
import { AccordionDetails } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { getAllUserDetails } from "../../http/fetch";

interface UserProfileType {
  email_address: string;
  password: string;
  profile: {
    first_name: string;
    middle_name: string;
    last_name: string;
    birth_day: string;
    birth_month: string;
    birth_year: string;
    gender: string;
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    phone_number: string;
  };
  evaluation: {
    language: string;
    documents: {
      courseByCourse: string[];
      certificate: string[];
      transcript: string[];
      paid_amount: number;
    };
  }[];
}

export default function Dashboard() {
  const [user, setUser] = useState<UserProfileType[]>();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      event.preventDefault();
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    const fetch = async () => {
      const response = await getAllUserDetails();
      if (response) {
        const data = response.data.data;
        setUser(data);
        console.log(data);
      }
    };
    fetch();
  }, []);

  return (
    <main className="flex items-center justify-center gap-5 flex-col">
      <h1 className="md:text-4xl font-semibold text-3xl text-center text-[#2aaae0]">
        Admin Dashboard
      </h1>
      <section className="my-5 flex justify-center flex-col items-center  w-full">
        <h2 className="text-lg font-semibold mb-3">User List</h2>
        <div className="w-[80%] max-md:w-[95%] flex flex-col gap-10 ">
          {user?.map((user, i) => (
            <div key={i} className="shadow-xl p-10 flex flex-col gap-5 border">
              <div className="  gap-[2rem] flex flex-wrap ">
                <p className="flex gap-1">
                  <span className="font-medium">Name:</span>
                  {user.profile?.first_name} {user.profile?.middle_name}
                  {user.profile?.last_name}
                </p>
                <p className="flex gap-1">
                  <span className="font-medium">Email:</span>
                  {user.email_address}
                </p>
                <p className="flex gap-1">
                  <span className="font-medium"> Birth date</span>:
                  {user.profile?.birth_day} {user.profile?.birth_month}
                  {user.profile?.birth_year}
                </p>
                <p className="flex gap-1">
                  <span className="font-medium">Gender:</span>
                  {user.profile?.gender}
                </p>
                <p className="flex gap-1">
                  <span className="font-medium">Street:</span>
                  {user.profile?.street_address}
                </p>
                <p className="flex gap-1">
                  <span className="font-medium">Street:</span>
                  {user.profile?.street_address}
                </p>
                <p className="flex gap-1">
                  <span className="font-medium">City:</span>
                  {user.profile?.city}
                </p>
                <p className="flex gap-1">
                  <span className="font-medium">Country:</span>
                  {user.profile?.country}
                </p>
                <p className="flex gap-1">
                  <span className="font-medium">Postal:</span>
                  {user.profile?.postal_code}
                </p>
                <p className="flex gap-1">
                  <span className="font-medium">Phone:</span>
                  {user.profile?.phone_number}
                </p>
                <p className="flex gap-1">
                  <span className="font-medium">Password:</span> {user.password}
                </p>
              </div>
              <div>
                {user.evaluation?.map((eva, i) => (
                  <Accordion
                    key={i}
                    expanded={expanded === `agent${i}`}
                    onChange={handleChange(`agent${i}`)}
                  >
                    <AccordionSummary
                      expandIcon={<RiArrowUpSLine />}
                      aria-controls="panel4bh-content"
                      id="panel4bh-header"
                      className="max-md:w-[20rem]"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Server {i + 1}
                      </Typography>
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Language: {eva.language}
                      </Typography>
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        Amount Paid{" "}
                        {eva.documents.paid_amount
                          ? "$" + eva.documents.paid_amount
                          : "$0"}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className="flex flex-col gap-5">
                      <Typography className="md:w-[70rem]">
                        {eva.documents.courseByCourse.map((doc) => (
                          <a
                            key={doc}
                            target="_blank"
                            href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/maec/${doc}`}
                            className=" border p-2 bg-slate-50 hover:bg-slate-100"
                          >
                            {doc.substring(36)}
                          </a>
                        ))}
                      </Typography>
                      <Typography className="md:w-[70rem]">
                        {eva.documents.certificate.map((doc) => (
                          <a
                            key={doc}
                            target="_blank"
                            href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/maec/${doc}`}
                            className=" border p-2 bg-slate-50 hover:bg-slate-100"
                          >
                            {doc.substring(36)}
                          </a>
                        ))}
                      </Typography>
                      <Typography className="md:w-[70rem]">
                        {eva.documents.transcript.map((doc) => (
                          <a
                            key={doc}
                            target="_blank"
                            href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/maec/${doc}`}
                            className=" border p-2 bg-slate-50 hover:bg-slate-100"
                          >
                            {doc.substring(36)}
                          </a>
                        ))}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
