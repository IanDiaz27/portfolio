import style from "./Tecnologies.module.css"

import react from "../../assets/tec/react.svg"
import nextjs from "../../assets/tec/nextjs.svg"
import css3 from "../../assets/tec/css3.svg"
import javascript from "../../assets/tec/javascript.svg"
import html5 from "../../assets/tec/html5.svg"
import vite from "../../assets/tec/vite.svg"
import bootstrap from "../../assets/tec/bootstrap.svg"
import git from "../../assets/tec/git.svg"
import sass from "../../assets/tec/sass.svg"

const tecnologies = [
  { url: react, name: "ReactJs" },
  { url: nextjs, name: "NextJs" },
  { url: css3, name: "CSS" },
  { url: javascript, name: "JavaScript" },
  { url: html5, name: "HTML" },
  { url: vite, name: "Vite" },
  { url: bootstrap, name: "Bootstrap" },
  { url: git, name: "Git" },
  { url: sass, name: "SASS" },
]

export const Tecnologies = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Tecnologías</h2>
      <div className={style.containerTecs}>
        {tecnologies.map((tec) => (
          <div key={tec.name} className={style.iconContainer}>
            <img src={tec.url} alt={tec.name} className={style.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}
