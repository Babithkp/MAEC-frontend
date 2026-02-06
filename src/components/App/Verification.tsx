import NeedAssistance from "../com/NeedAssistance";
export default function Verification() {
  return (
    <main className="flex justify-center items-center flex-col">
      <section className="w-[90%] max-md:w-[100%] font-medium">
        <div className="p-5 flex flex-col gap-5">
          <h1 className="text-center text-4xl font-bold ">TS Authentication Services.</h1>
          <p className="text-center">
            Get your official documents verified and authenticated.
          </p>
        </div>
        <div className="p-5 flex-col flex gap-5">
          <h2 className="text-3xl font-bold">
            Documents that can be authenticated by ITS</h2>

          <p>
            Academic certificates and transcripts, employment letters, bank statements, and birth certificates.
          </p>

          <p className="font-bold">
            The academic verification report includes:
          </p>
          <p className="font-bold my-1">Translation Fee: €15 per document.</p>
          <p className="font-bold my-1">Processing time : 3 business days </p>
          <p className="font-bold my-1">How it works:</p>
          <ul className="ml-5 list-disc flex flex-col gap-3">
            <li>Create your account and login.</li>
            <li>
              Upload your documents for translation.
            </li>
            <li>Pay the fee.</li>
            <li>
              Receive your verification reports in your email address in 3 business days.
            </li>
          </ul>
        </div>
      </section>
      <NeedAssistance />
    </main>
  );
}
