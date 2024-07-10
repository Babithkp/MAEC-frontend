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
} from "../../components/ui/alert-dialog";
import { RxCross2 } from "react-icons/rx";

export default function DocumentionReq() {
  return (
    <main>
      <section className="w-full flex justify-center items-center flex-col">
        <div className="w-[65%] flex flex-col items-center gap-10">
          <h1 className="text-4xl font-bold max-md:text-center">
            Documentation Requirements by Country
          </h1>
          <p className="text-center">
            Credential evaluation report documentation requirements vary from
            country to country. Please choose your country of education from the
            list below to determine which documents you'll need for your report.
          </p>
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
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold">For Official Evaluations:</h4>
                    <ul className="list-disc ml-5">
                      <li>
                        IEE prefers to receive secure electronic records
                        directly from institutions and examination authorities.
                      </li>
                      <li>
                        Official documents can also be mailed to IEE from
                        institutions and examination authorities.
                      </li>
                      <li>
                        In cases where official documents directly from issuing
                        institutions are difficult/impossible to obtain (for
                        instance, regions experiencing political unrest), IEE
                        may consider physical original documents submitted by
                        students.
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Completed Programs:</h4>
                    <ul className="list-disc ml-5">
                      <li>
                        A diploma, degree certificate, or official confirmation
                        of graduation from the institution or Ministry of
                        Education
                      </li>
                      <li>
                        For examination-based secondary programs, official
                        results from the examination board
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold">
                      Incomplete (or In Progress) Programs:
                    </h4>
                    <ul className="list-disc ml-5">
                      <li>
                        Transcript, study certificate, or marks sheet from the
                        institution
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold">For Provisional Evaluations:</h4>
                    <ul className="list-disc ml-5">
                      <li>
                        Scans of official documents may be submitted for some
                        orders.
                      </li>
                      <li>
                        Please check with the intended recipient of your
                        evaluation to see if unofficial evaluations based on
                        scans can be accepted.
                      </li>
                      <li>
                        Be advised that printouts and screenshots of unofficial
                        records will not be accepted. IEE cannot evaluate copies
                        of unofficial “student only” records.
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold">
                      Note for postsecondary students in India:
                    </h4>
                    <p>
                      IEE does not evaluate documents issued by affiliated
                      colleges. Your documents need to be issued by the
                      university to which your college is affiliated. Documents
                      issued by autonomous colleges are acceptable.
                    </p>
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
