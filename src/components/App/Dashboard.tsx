// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
// import { RiArrowUpSLine } from "react-icons/ri";
// import { AccordionDetails } from "@mui/material";
// import { useEffect, useState } from "react";
// import { getAllUserDetails } from "../../http/fetch";

// interface UserProfileType{
//   email: string
//   password: string
//   firstName: string
//   middleName:string
//   lastName:string
//   birthDay:string
//   birthMonth:string
//   birthYear:string
//   gender:string
//   street:string;
//   city:string;
//   state:string;
//   postalCode:string;
//   country:string;
//   phone:string
//   evalution:{
//     language:string
//     documents:{
//       courseByCourse: string[]
//       certificate:string[]
//       transcript:string[]
//       paidAmount:number
//     }
//   }[]
// }


// export default function Dashboard() {
//   const [user,setUser] = useState<UserProfileType>()

//   useEffect(()=>{
//     const fetch = async() =>{
//       const response = await getAllUserDetails()
//       if(response){
//         console.log(response);
        
//       }
//     }
//     fetch()
//   },[])

//   return (
//     // <main className="flex items-center justify-center gap-5 flex-col">
//     //   <section className="w-[50%] p-10 max-md:w-full gap-14 max-md:p-4 font-medium flex flex-col items-center">
//     //     <h1 className="md:text-4xl font-semibold text-3xl text-center text-red-500">
//     //       Admin Dashboard
//     //     </h1>
  
//     //   </section>
//     //   <section className="my-5">
//     //     <h2 className="text-lg font-semibold mb-3">Agent List</h2>
//     //     {agent?.map((agent, i) => (
//     //       <Accordion
//     //         key={i}
//     //         expanded={expanded === `agent${i}`}
//     //         onChange={handleChange(`agent${i}`)}
//     //       >
//     //         <AccordionSummary
//     //           expandIcon={<RiArrowUpSLine />}
//     //           aria-controls="panel4bh-content"
//     //           id="panel4bh-header"
//     //           className="max-md:w-[20rem]"
//     //         >
//     //           <Typography sx={{ width: "33%", flexShrink: 0 }}>
//     //             {agent.name}
//     //           </Typography>
//     //         </AccordionSummary>
//     //         <AccordionDetails>
//     //           <Typography className="md:w-[70rem]">
//     //             Name: {agent.name}
//     //           </Typography>
//     //           <Typography className="md:w-[70rem]">
//     //             Email: {agent.email}
//     //           </Typography>
//     //           <Typography className="md:w-[70rem]">
//     //             IPv4: {agent.agentIpAddress}
//     //           </Typography>
//     //           <Typography className="md:w-[70rem]">
//     //             Country: {agent.agentCountry}
//     //           </Typography>
//     //           <Typography className="md:w-[70rem]">
//     //             Password: {agent.password}
//     //           </Typography>
//     //         </AccordionDetails>
//     //       </Accordion>
//     //     ))}
//     //   </section>
//     //   <section className="my-5">
//     //     <h2 className="text-lg font-semibold mb-3">Student List</h2>
//     //     {student?.map((stud, i) => (
//     //       <Accordion
//     //         key={i}
//     //         expanded={expanded === `student${i}`}
//     //         onChange={handleChange(`student${i}`)}
//     //       >
//     //         <AccordionSummary
//     //           expandIcon={<RiArrowUpSLine />}
//     //           aria-controls="panel4bh-content"
//     //           id="panel4bh-header"
//     //           className="max-md:w-[20rem]"
//     //         >
//     //           <Typography sx={{ width: "33%", flexShrink: 0 }}>
//     //             {stud.firstName}
//     //           </Typography>
//     //         </AccordionSummary>
//     //         <AccordionDetails>
//     //           <Typography className="md:w-[70rem]">
//     //             Name: {stud.firstName} {stud.lastName}
//     //           </Typography>
//     //           <Typography className="md:w-[70rem]">
//     //             Email: {stud.email}
//     //           </Typography>
//     //           <Typography className="md:w-[70rem]">
//     //             Address: {stud.address}
//     //           </Typography>
//     //           <Typography className="md:w-[70rem]">
//     //             Country: {stud.country}
//     //           </Typography>
//     //           <Typography className="md:w-[70rem]">
//     //             Birth date: {stud.dob}
//     //           </Typography>
//     //         </AccordionDetails>
//     //       </Accordion>
//     //     ))}
//     //   </section>
//     // </main>
//     <></>
//   )
// }
