export default function IntroForm() {  return (
    <main className="flex justify-center  px-20 py-3">
      <section className="w-[30%] flex justify-center ">
        <ul className="steps steps-vertical">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </section>
      <section className="px-10 flex flex-col gap-5 w-[70%] border-l">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold">Your Information</h2>
          <p>
            Please enter the name and date of birth for the person listed on the
            academic credentials. The name and date of birth entered here is
            what will appear on the report. Revision fees and additional
            shipping fees will apply if the name and date of birth are entered
            incorrectly.
          </p>
        </div>
        <div>
          <div className="flex flex-wrap justify-between">
            <div className="border-b flex flex-col mb-5 gap-5 w-[47%] ">
              <label>
                FIRST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 w-[47%] ">
              <label>
                MIDDLE NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 w-[47%] ">
              <label>
                LAST NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                className="outline-none mb-5 active:bg-none"
              />
            </div>
            <div className="border-b flex flex-col mb-5 gap-5 w-[47%] ">
              <label>
                DATE OD BIRTH (DAY) <span className="text-red-500">*</span>
              </label>
              <select>
               
              </select>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
