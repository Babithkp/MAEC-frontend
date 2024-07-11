import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Button } from "../ui/button";

export default function DocumentionReq() {
  return (
    <main>
      <section className="w-full flex justify-center items-center flex-col">
        <div className="w-[65%] flex flex-col items-center gap-10">
          <h1 className="text-4xl font-bold max-md:text-center">
            Documentation Requirements
          </h1>
          <p className="text-center">
            Credential evaluation report documentation requirements vary from
            country to country. Please choose your country of education from the
            list below to determine which documents you'll need for your report.
          </p>

          <Dialog>
            <DialogTrigger>
              <Button
                variant={"outline"}
                className="border-[#2aaae0] rounded-full"
              >
                View General Documentation Requirements
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogDescription>
                  <div>
                    <p className="font-bold my-2 mt-5">
                      For Academic Evaluation Report:
                    </p>
                    <ul className="ml-5 list-disc">
                      <li>Orginal scanned copy of degree transcript.</li>
                    </ul>
                    <p className="font-bold my-2 mt-5">
                      For Academic Verification report:
                    </p>
                    <ul className="ml-5 list-disc">
                      <li>
                        Orginal scanned copy of bachelor or masters degree
                        certificate.
                      </li>
                      <li>
                        Original scanned copy of bachelors or masters degree
                        transcript.
                      </li>
                    </ul>
                    <p className="font-bold my-2 mt-5">Translation:</p>
                    <p>
                      Official copy of academic transcript, legal or government
                      issued official documents.
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </main>
  );
}
