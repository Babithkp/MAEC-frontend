import Application from "./objects/Application"
import Evalution from "./objects/Evalution"
import Experience from "./objects/Experience"
import Guide from "./objects/Guide"
import Hero from "./objects/Hero"
import Reviews from "./objects/Reviews"
import Services from "./objects/Services"

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[80vh] w-full">
        <Hero/>
        <Services/>
        <Guide/>
        <Experience/>
        <Application/>
        <Reviews/>
        <Evalution/>
    </main>
  )
}
