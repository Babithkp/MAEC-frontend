import Application from "./objects/Application"
import Evalution from "./objects/Evalution"
import Experience from "./objects/Experience"
import Guide from "./objects/Guide"
import Hero from "./objects/Hero"
import Reviews from "./objects/Reviews"
import Services from "./objects/Services"
import Tools from "./objects/Tools"
export default function Home() {
  return (
    <main>
        <Hero/>
        <Services/>
        <Guide/>
        <Experience/>
        <Tools/>
        <Application/>
        <Reviews/>
        <Evalution/>
    </main>
  )
}
