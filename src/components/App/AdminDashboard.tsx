import React, { useEffect, useState, useRef, useCallback } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { RiArrowUpSLine } from "react-icons/ri";
import { AccordionDetails, CircularProgress } from "@mui/material";
import { getAllUserDetails } from "../../http/fetch";
import { IoSearch } from "react-icons/io5";

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
      paid_amount: number | null;
    };
  }[];
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<UserProfileType[]>([]);
  const [expanded, setExpanded] = useState<string | false>(false);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const observer = useRef<IntersectionObserver | null>(null);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setPage(0); // Reset to first page on new search
      setIsLastPage(false); // Reset last page flag on new search
    }, 1000); // 300ms debounce delay

    return () => {
      clearTimeout(handler); // Clear the timeout on new keystrokes
    };
  }, [searchTerm]);

  const fetchUsers = useCallback(
    async (search: string = "", newPage: number = 0) => {
      setLoading(true);
      const response = await getAllUserDetails(20, newPage * 20, search);
      if (response) {
        const data = response.data.data;
        console.log(data);

        if (data.length === 0) {
          setIsLastPage(true); // Stop further requests if no more data
        } else {
          setUsers((prevUsers) =>
            newPage === 0 ? data : [...prevUsers, ...data]
          );
        }
      }
      setLoading(false);
    },
    []
  );

  useEffect(() => {
    fetchUsers(debouncedSearchTerm, page);
  }, [page, debouncedSearchTerm, fetchUsers]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setUsers([])
  };

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !loading && !isLastPage) {
        setPage((prev) => prev + 1);
      }
    },
    [loading, isLastPage]
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(handleObserver);
    const currentObserver = observer.current;
    if (currentObserver) {
      const element = document.getElementById("load-more");
      if (element) currentObserver.observe(element);
    }
    return () => currentObserver && currentObserver.disconnect();
  }, [handleObserver]);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <main className="flex items-center justify-center gap-5 flex-col">
      <h1 className="md:text-4xl font-semibold text-3xl text-center text-[#2aaae0]">
        Admin Dashboard
      </h1>
      <section className="my-5 flex justify-center flex-col items-center  w-full">
        <h2 className="text-lg font-semibold mb-3">User List</h2>
        <div className="flex mb-5 p-3 rounded-lg border w-[50%] max-md:w-[95%] gap-3">
            <span><IoSearch size={24}/></span>
            <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by name or email"
            className="outline-none active:bg-none w-full"
          />
            </div>
        <div className="w-[80%] max-md:w-[95%] flex flex-col gap-10">
          {users.map((user, userIndex) => (
            <div key={userIndex} className="shadow-xl p-10 flex flex-col gap-5 border">
               <div className="gap-[2rem] flex flex-wrap ">
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
                  <span className="font-medium"> Birth date:</span>
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
                {user.evaluation?.map((eva, evalIndex) => {
                  const panelId = `user${userIndex}-eval${evalIndex}`;
                  return (
                    <Accordion
                      key={panelId}
                      expanded={expanded === panelId}
                      onChange={handleChange(panelId)}
                    >
                      <AccordionSummary
                        expandIcon={<RiArrowUpSLine />}
                        aria-controls={`${panelId}-content`}
                        id={`${panelId}-header`}
                      >
                         <Typography sx={{ width: "33%", flexShrink: 0 }}>
                          Service {evalIndex + 1}
                        </Typography>
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                          Language: {eva?.language || "English"}
                        </Typography>
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                          Amount Paid: ${eva.documents?.paid_amount ?? 0}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails className="flex flex-col gap-5">
                        <Typography className="md:w-[70rem]">
                          <span className="font-bold mb-2">Course-by-Course Evaluation</span>
                          {eva.documents?.courseByCourse.map((doc) => (
                            <a
                              key={doc}
                              target="_blank"
                              href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/maec/${doc}`}
                              className="border p-2 bg-slate-50 hover:bg-slate-100 ml-2"
                            >
                              {doc.substring(36)}
                            </a>
                          ))}
                        </Typography>
                        <Typography className="md:w-[70rem]">
                          <span className="font-bold mb-2">Certificate Verification</span>
                          {eva.documents?.certificate.map((doc) => (
                            <a
                              key={doc}
                              target="_blank"
                              href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/maec/${doc}`}
                              className="border p-2 bg-slate-50 hover:bg-slate-100 ml-2"
                            >
                              {doc.substring(36)}
                            </a>
                          ))}
                        </Typography>
                        <Typography className="md:w-[70rem]">
                          <span className="font-bold mb-2">Transcript Verification</span>
                          {eva.documents?.transcript.map((doc) => (
                            <a
                              key={doc}
                              target="_blank"
                              href={`https://studyinmaryland-stroage-bucket.s3.ap-southeast-2.amazonaws.com/maec/${doc}`}
                              className="border p-2 bg-slate-50 hover:bg-slate-100 ml-2"
                            >
                              {doc.substring(36)}
                            </a>
                          ))}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            </div>
          ))}
          <div id="load-more" className="w-full h-10 grid place-items-center">
          {loading && <CircularProgress color="inherit" />}
          </div>
        </div>
      </section>
    </main>
  );
}
