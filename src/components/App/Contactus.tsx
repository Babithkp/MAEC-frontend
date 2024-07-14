import randomMapImg from "/GoogleMapTA.webp";
export default function Contactus() {
  return (
    <main>
      <section className="w-full flex justify-center items-center flex-col gap-20 mt-10">
        <div className="w-[65%] max-md:w-[95%] flex flex-col items-center gap-10">
          <h1 className="text-4xl max-md:text-2xl font-bold max-md:text-center">
            We are here if you need us
          </h1>
          <p className="text-center w-[70%] max-md:w-[95%]">
            Our team is here to answer questions so you get your evaluation in
            no time!
          </p>
        </div>
        <div className="flex max-md:flex-col gap-5 max-md:w-[95%] w-[70%]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-center  p-5 gap-5 border rounded-3xl">
              <p className="font-bold">Customer Support:</p>
              <p>Support@maec.us</p>
              <p>Mon-Fri: 8:00 AM - 4:00 PM </p>
              <p>Sat-Sun: 12:00 PM - 3:00 PM.</p>
            </div>
          </div>
          <figure>
            <img
              src={randomMapImg}
              alt="map of location"
              className="w-[120rem] h-[20rem] rounded-3xl object-cover"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
