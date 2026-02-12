import map from "/half_globe.webp";
export default function Aboutus() {
  return (
    <main className="min-h-[80vh] flex-col flex justify-center items-center ">
      <section className="w-[80%] max-md:w-[95%] flex flex-col justify-center items-center text-center gap-10 overflow-hidden ">
        <span className="text-base flex  gap-5 font-medium items-center">
          A MEMBER OF <span className="text-4xl font-serif">BIBB</span>
        </span>
        <h1 className="text-4xl font-bold">
          We provide <span className="text-[#2aaae0]">evaluation</span> and{" "}
          <span className="text-[#2aaae0]">translation</span> services
        </h1>
        <p>
          With over 20 years of experience, we are a trusted international
          online translation service specializing in the official translation of
          academic and government-issued documents into German. We support
          individuals from across the world who require certified translations
          for university admissions, visa applications, employment, immigration,
          and professional recognition in Germany.
        </p>
        <p>
          Our expertise covers academic transcripts, degree certificates, birth
          and marriage certificates, legal documents, and other official
          records. Every translation is prepared with accuracy, professionalism,
          and strict confidentiality to ensure it meets German institutional and
          legal standards.{" "}
        </p>
        <p>
          We pride ourselves on delivering reliable service and complete
          customer satisfaction. By combining experience, efficiency, and
          dedicated support, we make the process of obtaining officially
          recognized German translations simple and stress-free for our clients
          worldwide
        </p>
        <figure className="w-[40rem] mt-5 h-[20rem]">
          <img
            src={map}
            alt="map of globe"
            className="w-full h-full object-cover"
          />
        </figure>
      </section>

    </main>
  );
}
