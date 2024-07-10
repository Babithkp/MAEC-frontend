import MAEClogo from "../../../public/iee-img.svg";
import { Button } from "../ui/button";
export default function Guidelines() {
  return (
    <main className="flex justify-center flex-col items-center w-full text-lg text-slate-600 font-medium">
      <article className="w-[85%] max-md:w-[95%] max-md:text-center">
        <h1 className="text-4xl font-bold my-10 text-center">
          Evaluation Guidelines
        </h1>
        <p >
          Founded in 1981, International Education Evaluations, Inc. (MAEC)
          provides quality evaluation and assessment services for foreign
          academic and vocational credentials. MAEC evaluations are based on the
          judgment of highly trained and experienced international credential
          analysts who have access to an extensive library of both physical and
          electronic resources. We are members of NACES, NAFSA, AACRAO, and
          TAICEP. Our evaluations reflect the current policies and standards
          within the international and comparative education industry as of the
          date of this evaluation.
        </p>
        <p className="text-2xl font-bold my-5 text-black">
          Non-binding Nature of Evaluations
        </p>
        <p >
          MAEC evaluations and assessments are advisory in nature and are in no
          way binding on any institution, agency, or organization, each of which
          has the authority to make its own decision regarding the educational
          credentials, grades, and credits described in MAEC’s evaluation
          reports.
        </p>
        <p className="text-2xl font-bold my-5 text-black">
          Evaluation Approach
        </p>
        <p>
          The evaluation methodologies used at MAEC include both year-counting
          and benchmarking. Implementation of these is dependent upon the
          report's purpose and the receiving organization. MAEC will prioritize
          years of full-time study as foundational to the equivalency
          determination for immigration and licensure purposes, as well as for
          reports created for specific colleges and universities which have
          opted out of benchmarked equivalencies. For most education and
          employment reports, however, MAEC will prioritize academic and
          professional access, curriculum rigor, and contact hours as central to
          the equivalency determination.
        </p>
        <ul className="ml-8 list-disc mt-5 max-md:text-start">
          <li>
            <span className="text-xl font-bold text-black">
              Year-Counting:{" "}
            </span>{" "}
            This conventional approach to credentials evaluation prioritizes
            years of full-time study as foundational to the comparison of
            international qualifications and accepts that an academic year (or
            term) of full-time study in one country is proportionate to an
            academic year (or term) of full-time study in another. While it is
            an oversimplification to reduce the entire evaluation strategy to
            simply counting the number of years that a program requires, this
            method certainly gives more weight to calendric measurements of
            learning.
          </li>
          <li>
            <span className="text-xl font-bold text-black">Benchmarking: </span>{" "}
            This contextual approach to evaluation prioritizes academic and
            professional access in the comparison of international
            qualifications and prefers contact hour measurements of learning
            duration. More importantly, this evaluation strategy accepts that
            outcomes and achievements in one country are commensurate with
            outcomes and achievements in another. At the undergraduate level, it
            gives weight to how specialized and well-prepared students are for
            further studies or to enter the workforce with advanced skills.
            Postsecondary credit conversions for benchmarking evaluations rely
            heavily on the instructional/learning hours of students enrolled in
            international programs in comparison to the average number of
            instructional/study hours required by programs offered at the same
            level in the United States.
          </li>
        </ul>
        <p className="text-2xl font-bold my-5 text-black">
          Types of Evaluations
        </p>
        <ul className="ml-8 list-disc mt-5 max-md:text-start">
          <li>
            <span className="text-xl font-bold text-black">
              Immigration Report{" "}
            </span>
            <p>
              States the academic, professional, or vocational education
              equivalency of the foreign credential. Postsecondary credentials
              are evaluated using a year-counting approach.
            </p>
          </li>
          <li>
            <span className="text-xl font-bold text-black">
              Military Report{" "}
            </span>
            <p>
              States the academic, professional, or vocational education
              equivalency of the foreign credential. Postsecondary credentials
              are evaluated using a year-counting approach.
            </p>
          </li>
          <li>
            <span className="text-xl font-bold text-black">
              Education Document Report
            </span>
            <p>
              States the academic, professional, or vocational education
              equivalency of the foreign credential. A standard benchmarking
              approach is used by default, but receiving higher education
              institutions may opt-out and request year-counting evaluations
              exclusively.
            </p>
          </li>
          <li>
            <span className="text-xl font-bold text-black">
              Education Document + GPA Report
            </span>
            <p>
              States the academic, professional, or vocational education
              equivalency of the foreign credential and shows an equivalent
              cumulative grade point average for each credential or level of
              study. A standard benchmarking approach is used by default, but
              receiving higher education institutions may opt-out and request
              year-counting evaluations exclusively.
            </p>
          </li>
          <li>
            <span className="text-xl font-bold text-black">
              Education Course Report
            </span>
            <p>
              States the equivalency of the foreign credential, as well as the
              equivalent credits, grades, and GPA from the foreign transcript. A
              standard benchmarking approach is used by default, but receiving
              higher education institutions may opt-out and request
              year-counting evaluations exclusively.
            </p>
          </li>
          <li>
            <span className="text-xl font-bold text-black">
              Divisional Education Report
            </span>
            <p>
              States the equivalency of the foreign credential, as well as the
              equivalent credits, grades, and GPA from the foreign transcript.
              Specifies upper-division coursework from lower-division coursework
              in bachelor degree programs. Postsecondary credentials are
              evaluated using a year-counting approach.
            </p>
          </li>
          <li>
            <span className="text-xl font-bold text-black">
              Licensure Report
            </span>
            <p>
              States the equivalency of the foreign credential, as well as the
              equivalent credits, grades, and GPA from the foreign transcript.
              Coursework is organized into subject categories helpful for
              licensing boards and agencies. The report may include additional
              information regarding professional access. MAEC offers a general
              licensure report, as well as specialized licensure reports for
              accounting, teaching, and nursing. Postsecondary credentials are
              evaluated using a year-counting approach.
            </p>
          </li>
        </ul>
        <p className="text-2xl font-bold my-5 text-black">Credits</p>
        <p>
          On MAEC’s Course Reports, high school credits are reported in Carnegie
          Units, with 6-8 units generally representing one year of full-time
          study. Postsecondary units are reported in semester credits, with 30
          to 36 credits (semester hours) representing the equivalent of one year
          of full-time study. Receiving organizations may interpret and apply
          the credits shown in our reports according to their own institutional
          policies.
        </p>
        <p className="text-2xl font-bold my-5 text-black">Grades</p>
        <p>
          Foreign grades are converted to the US four-point letter scale (A, B,
          C, D, F). In some cases, plus (+) and minus (-) grades are used in the
          converted scale. The number of grade points assigned to each grade is
          as follows:
        </p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-base-200 font-bold">
                <th>Letter</th>
                <th>Grade Points</th>
                <th>Letter</th>
                <th>Grade Points</th>
                <th>Letter</th>
                <th>Grade Points</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>A+</td>
                <td>4.00</td>
                <td>A</td>
                <td>4.00</td>
                <td>A-</td>
                <td>3.67</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td>B+</td>
                <td>3.33</td>
                <td>B</td>
                <td>3.00</td>
                <td>B-</td>
                <td>2.67</td>
              </tr>
              {/* row 3 */}
              <tr>
                <td>C+</td>
                <td>2.33</td>
                <td>C</td>
                <td>3.00</td>
                <td>C-</td>
                <td>1.67</td>
              </tr>
              <tr>
                <td>D+</td>
                <td>1.33</td>
                <td>D</td>
                <td>1.00</td>
                <td>D-</td>
                <td>0.67</td>
              </tr>
              <tr>
                <td>F</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-2xl font-bold my-5 text-black">
          Grade Point Average (GPA)
        </p>
        <p>
          The total number of grade points are calculated by multiplying the
          point value of each course by the credit value of that same course.
          The GPA is then calculated by dividing the total number of grade
          points earned by the number of credits attempted. Grades of Pass, AU
          (Audit), TR (Transfer), W (Withdrawn), EX (Exempted), IP (In
          Progress), and IC (Incomplete) are not included in a GPA calculation.
        </p>
        <p className="text-2xl font-bold my-5 text-black">Example</p>
        <ul className="ml-8 list-disc mt-5 max-md:text-start">
          <li>3 credits with a grade of A (4.0) = 3 x 4 = 12 grade points</li>
          <li>6 credits with a grade of B (3.0) = 6 x 3 = 18 grade points</li>
          <li>2 credits with a grade of C (2.0) = 2 x 2 = 4 grade points</li>
          <li>3 credits with a grade of D (1.0) = 3 x 1 = 3 grade points</li>
          <li>Total number of grade points = 12 + 18 + 4 + 3 = 37</li>
          <li>Total credits attempted = 3 + 6 + 2 + 3 = 14</li>
          <li>
            Divide the total number of grade points earned by the number of
            credits attempted: 37 / 14 = 2.64
          </li>
        </ul>
        <p className="text-2xl font-bold my-5 text-black">Extra Copies</p>
        <p>
          You may order an extra copy of your report at{" "}
          <a href="http://www.MAEC.org" className="text-blue-500">
            www.MAEC.org
          </a>
          . If your evaluation is older than 1 year a revision fee may apply. If
          your evaluation is older than 5 years, you must reapply for
          evaluation.
        </p>
        <p className="text-2xl font-bold my-5 text-black">
          Documentation Requirements
        </p>
        <p>
          Please refer to:{" "}
          <a
            href=" https://MAEC.org/documentation-requirements "
            className="text-blue-500"
          >
            https://MAEC.org/documentation-requirements
          </a>{" "}
          These vary by country and report type. MAEC reserves the right to
          request additional academic records, official/original academic
          records, or verification of document authenticity, should it be deemed
          necessary. MAEC reserves the right to refuse service if appropriate
          documentation is not provided.
        </p>
        <p className="text-2xl font-bold my-5 text-black">
          MAEC Institution Portal
        </p>
        <p>
          If you are an institution of higher education, a licensing agency, an
          employer, or another organization receiving multiple evaluations,
          please consider setting up an account at no cost for your institution
          to receive electronic delivery of future reports from MAEC at Please
          refer to:{" "}
          <a href="https://access.MAEC.org " className="text-blue-500">
            https://access.MAEC.org
          </a>
          .
        </p>
        <p className="text-2xl font-bold my-5 text-black">
          New Standard Evaluation Policy:{" "}
          <a href="/ " className="text-blue-500">
            White Paper - Benchmarking and Year-Counting Defined
          </a>
        </p>
      </article>
      <article className=" flex flex-col justify-center items-center  py-10 bg-[#f9fdff]">
        <div className="w-[60%] max-md:w-[90%] justify-center items-center gap-7 flex flex-col text-center">
        <img src={MAEClogo} alt="MAEC logo" className="w-[6rem]" />
        <h4 className="text-4xl font-bold text-black max-md:text-2xl">Get an evaluation today</h4>
        <p>
          Join the thousands of people just like you who have made MAEC their
          trusted evaluation service! We are here to answer your questions on
          chat, email and phone 24/7!
        </p>
        <Button className="font-bold rounded-full bg-[#2aaae0]">Start Evalution</Button>
        </div>
      </article>
    </main>
  );
}
