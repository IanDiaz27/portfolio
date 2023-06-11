import "./App.css"
import { AboutMe } from "./components/AboutMe/AboutMe"
import { Hero } from "./components/Hero/Hero"
import { NavBar } from "./components/NavBar/NavBar"
import { Proyects } from "./components/Proyects/Proyects"
import { Tecnologies } from "./components/Tecnologies/Tecnologies"

function App() {
  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <NavBar />
      <main>
        <div className="containerWeb">
          <Hero />
          <div className="containerRow">
            <AboutMe />
            <Tecnologies />
          </div>
          <Proyects />
        </div>
      </main>
    </>
  )
}

export default App
