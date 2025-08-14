import NeedAssistance from "../com/NeedAssistance";
export default function Verification() {
  return (
    <main className="flex justify-center items-center flex-col">
      <section className="w-[90%] max-md:w-[100%] font-medium">
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-center text-4xl font-bold ">MSAC Verification</h1>
          <p className="text-center">
            Let’s begin with the primary purpose of verifying of academic
            credentials.
          </p>
        </div>
        <div className="p-5 flex-col flex gap-5">
          <h2 className="text-3xl font-bold">Academic Verification Report</h2>

          <p>
            The verification of degree certificates and transcripts is done to
            determine the authenticity of bachelors or masters degree
            certificate and transcript. This report proves to universities in
            the U.S that your academic credentials are genuine.
          </p>

          <p className="font-bold">
            The academic verification report includes:
          </p>
          <ul className="ml-5 list-disc flex flex-col gap-3">
            <li>
              Confirmation of academic institution’s accreditation status.
            </li>
            <li>
              Confirmation of the student’s information with the academic
              institution.
            </li>
            <li>
              Confirmation of the authenticity of your degree certificate and
              transcript.
            </li>
          </ul>
          <p className="font-bold my-1">Certificate Verification Fee: $10.</p>
          <p className="font-bold my-1">Transcript Verification Fee: $10.</p>
          <p className="font-bold my-1">How it works:</p>
          <ul className="ml-5 list-disc flex flex-col gap-3">
            <li>Create your account and login.</li>
            <li>
              Upload your degree certificate and transcript for verification.
            </li>
            <li>Pay the verification fee.</li>
            <li>
              Receive your verification report in your email within 7 business
              days.
            </li>
          </ul>
        </div>
      </section>
      <NeedAssistance />
    </main>
  );
}
