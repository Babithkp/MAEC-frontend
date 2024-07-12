import randomMapImg from "../../../public/GoogleMapTA.webp"
export default function Contactus() {
  return (
    <main>
      <section className="w-full flex justify-center items-center flex-col gap-20 mt-10">
        <div className="w-[65%] max-md:w-[95%] flex flex-col items-center gap-10">
          <h1 className="text-4xl font-bold max-md:text-center">
            We Are Here to Help | Contact IEE
          </h1>
          <h1 className="text-4xl max-md:text-2xl font-bold max-md:text-center">
            We are here if you need us
          </h1>
          <p className="text-center w-[70%] max-md:w-[95%]">
            Do you need to mail in your documents or drop them off? Our team is
            here to answer questions so you get your evaluation in no time!
          </p>
        </div>
        <div className="flex max-md:flex-col gap-5 max-md:w-[95%] w-[70%]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-center  p-5 gap-5 border rounded-3xl">
              <p className="font-bold">Corporate Headquarters:</p>
              <p>
                7900 Matthews-Mint Hill Rd., Suite 1A Charlotte, North Carolina
                28227
              </p>
              <p>Mon-Fri: 9:00 AM - 4:00 PM Sat-Sun: Closed</p>
              <p className="font-bold">Phone: +1 704 772 0109</p>
            </div>
            <div className="flex flex-col justify-center  p-5 gap-5 border rounded-3xl">
              <p className="font-bold">India intake location:</p>
              <p>
                100 Transcripts LLP, 3rd Floor, Sri Srinivasam, Plot No. 1133/1,
                Mathrusree Nagar, Hyderabad, Telangana-500 049
              </p>
              <p className="font-bold">Phone: +91 9941 9914 02</p>
            </div>
          </div>
          <figure>
            <img src={randomMapImg} alt="map of location" className="w-[120rem] h-[20rem] rounded-3xl object-cover"/>
          </figure>
        </div>
      </section>
    </main>
  );
}
