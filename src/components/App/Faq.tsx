import {  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export default function Faq() {
  return (
    <main className="flex justify-center items-center">
      <section className="w-[90%]">
        <h1 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h1>
        <div className="w-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Evaluations</AccordionTrigger>
              <AccordionContent>
                <div>
                  <div className="py-5 border-b">
                    <p className="font-bold">
                      What does the evaluation report include?
                    </p>
                    <p>
                      IEE's evaluation report will include an attestation of
                      educational equivalency in the United States, an overview
                      of your country, a list of supplied documentation, a
                      document-by-document analysis, an attestation of
                      institutional accreditation, a course-by-course analysis
                      of transcripts (Course Report only), and a statement by
                      the evaluator.
                    </p>
                  </div>
                  <div className="py-5 border-b">
                    <p className="font-bold">How long will the process take?</p>
                    <p>
                      An evaluation generally takes about 3 to 5 business days
                      for us to complete once we receive the application,
                      payment, and approval of the documents.
                    </p>
                    <p>
                      If you need your evaluation sooner or guaranteed delivery
                      date, we offer expedited services at the following rates:
                    </p>
                    <ul className="list-disc">
                      <li>Rush Service (3 business days): $50*</li>
                      <li>Special Service (2 business days): $100*</li>
                      <li>
                        Same-Day Service (all documents must be received by 11
                        am EST): $200*
                      </li>
                    </ul>
                    <p>*In addition to evaluation and shipping fees.</p>
                    <p>
                      <span>IMPORTANT:</span> The above-expedited services will
                      incur an additional NON-REFUNDABLE fee upon receipt &
                      processing of the submitted documents either by post-mail,
                      email & upload.
                    </p>
                  </div>
                  <div className="py-5 border-b">
                    <p className="font-bold">
                      What is Provisional Evaluation report?
                    </p>
                    <p>
                      The Provisional evaluation is being offered for those who
                      cannot provide the required type of documents. The basis
                      of the evaluation is scanned/photocopies which are not
                      typically the required documents for us to provide an
                      Official evaluation.
                    </p>
                    <p>
                      Please be advised that the acceptance of a Provisional
                      evaluation is at the discretion of the receiving
                      institution or agency.
                    </p>
                  </div>
                  <div className="py-5 border-b">
                    <p className="font-bold">What is Evaluation Methodology?</p>
                    <p>
                      Two prevailing credential evaluation methodologies exist:
                    </p>
                    <ul className="list-disc">
                      <li>
                        Year-Counting This approach to credentials
                        evaluation—standard in the US—prioritizes years of
                        full-time study as foundational to the comparison of
                        international qualifications and accepts that an
                        academic year (or term) of full-time study in one
                        country is proportionate to an academic year (or term)
                        of full-time study in another. While it is an
                        oversimplification to reduce the entire evaluation
                        strategy to simply counting the number of years that a
                        program requires, this method certainly gives more
                        weight to calendric measurements of learning.
                      </li>
                      <li>
                        Benchmarking This contextual approach to evaluation is
                        used widely around the world and is gaining traction in
                        the US. It prioritizes academic and professional access
                        in the comparison of international qualifications and
                        prefers contact hour measurements of learning duration.
                        More importantly, this evaluation strategy accepts that
                        outcomes and achievements in one country are
                        commensurate with outcomes and achievements in another.
                        It gives weight to how specialized and well-prepared
                        students are for further studies or to enter the
                        workforce with advanced skills.
                      </li>
                    </ul>
                    <p>
                      If you would like to read IEE's white paper on
                      Year-Counting vs. Benchmarking, you may do so here: White
                      Paper - Benchmarking and Year-Counting Defined or to learn
                      more about our evaluation guidelines, you may do so here:
                      Evaluation Guidelines
                    </p>
                  </div>
                  <div className="py-5 border-b">
                    <p className="font-bold">
                      Can I request a revision or update on my completed
                      evaluation?
                    </p>
                    <p>
                      Yes, you may order a revision by Signing In to your client
                      portal and clicking the "Request Revision" option. You
                      will be presented with a list of options that you can
                      chose from as your reason to revise your completed
                      evaluation report. Revisions will be issued up to 1 year
                      after the initial evaluation report.
                    </p>
                    <p>
                      Yes, you may order a revision by Signing In to your client
                      portal and clicking the "Request Revision" option. You
                      will be presented with a list of options that you can
                      chose from as your reason to revise your completed
                      evaluation report. Revisions will be issued up to 1 year
                      after the initial evaluation report. If there are any
                      errors or irregularities in the evaluation report that IEE
                      issued, clients will have 6 months to report the issue to
                      IEE. Any errors reported after the 6 months period will be
                      treated as a revision and require such fee.
                    </p>
                  </div>
                  <div className="py-5 border-b">
                    <p className="font-bold">
                      Can I still order another copy of my report in the future?
                    </p>
                    <p>We keep the evaluation report on file for 5 years.</p>
                    <p>
                      To order an extra copy (emailed or mailed) of the
                      completed evaluation report/s, you must log in to your
                      account and look for the Order Extra Copies tab found on
                      the "My Orders" page. To log in, please follow this link:
                      https://myiee.org/login
                    </p>
                    <p>
                      In case you have any other specific instructions, please
                      put them into the additional notes box found on the order
                      page itself.
                    </p>
                  </div>
                  <div className="py-5 border-b">
                    <p className="font-bold">
                      How long is the validity of the Eval Report?
                    </p>
                    <p>
                      International Education Evaluations (IEE) evaluations do
                      not expire however, IEE will not issue any copies of an
                      evaluation 5 years after date of initial evaluation.
                    </p>
                  </div>
                  <div className="py-5 border-b">
                  <p className="font-bold">Does my application expire?</p>
                  <p></p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
}
