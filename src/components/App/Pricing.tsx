export default function Pricing() {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-[80%]">
        <h1 className="text-4xl font-bold">
          Pricing for Credential Evaluations, Reports & Licensure
        </h1>
        <p>Check out our industry leading low prices!</p>
        <div className="">
          <article className="grid grid-cols-[15rem,10rem,10rem,10rem,10rem,10rem] grid-rows-[3rem,10rem] w-full">
            <div className="col-start-2 col-span-full flex justify-around w-full bg-slate-50 p-3 mb-3 rounded-2xl items-center font-bold">
                <p>Education</p>
                <p>Employment</p>
                <p>Licensure</p> 
                <p>Immigration</p>
                <p>Military</p>
            </div>
            <div className="bg-slate-50 grid col-span-full grid-cols-[15rem,10rem,10rem,10rem,10rem,10rem] justify-items-center items-center">
                <div>Document Report</div>
                <div>2</div>
                <div>2</div>
                <div>2</div>
                <div>2</div>
                <div>2</div>
                <div>2</div>
                <div>2</div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
