import { Button } from "../ui/button";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/required-dialog";
import { RxCross2 } from "react-icons/rx";

export default function DocumentionReq() {
  return (
    <main>
      <section className="w-full flex justify-center items-center flex-col my-24">
        <div className="w-[65%] flex flex-col items-center gap-10">
          <h1 className="text-4xl font-bold max-md:text-center">
            Documentation Requirements
          </h1>
 

          <AlertDialog>
            <AlertDialogTrigger>
              <Button
                variant={"outline"}
                className="border-[#2aaae0] font-bold rounded-full"
              >
                View General Documentation Requirements
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  <div className="flex justify-between border-b text-left font-bold">
                    <p className="max-md:text-base">
                      General Documentation Requirements{" "}
                    </p>
                    <AlertDialogCancel className="border-none">
                      <RxCross2 className="" size={25} />
                    </AlertDialogCancel>
                  </div>
                </AlertDialogTitle>

                <AlertDialogDescription className="flex flex-col gap-8 overflow-auto text-start">
                  <div>
                    <p className="font-bold my-2 mt-5">
                      For Academic Evaluation Report:
                    </p>
                    <ul className="ml-5 list-disc">
                      <li>Orginal scanned copy of academic transcript.</li>
                    </ul>
                    <p className="font-bold my-2 mt-5">
                      For Academic Verification report:
                    </p>
                    <ul className="ml-5 list-disc gap-3 flex flex-col">
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
                    <ul className="ml-5 list-disc flex gap-3 flex-col">
                      <li>Official copy of academic transcript.</li>
                      <li>
                        Legal or government issued official documents.(Birth
                        certificates, marriage certificates, employment
                        contracts, etc.)
                      </li>
                    </ul>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter></AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>
    </main>
  );
}
