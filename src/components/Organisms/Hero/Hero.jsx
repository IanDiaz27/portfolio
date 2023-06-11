import style from "./Hero.module.css"

import img from "../../assets/yo.webp"
import arrow from "../../assets/icons/chevrons-down.svg"
import linkedin from "../../assets/social/linkedin.svg"
import github from "../../assets/social/github.svg"
import file from "../../assets/icons/file-description.svg"

export const Hero = () => {
  return (
    <section className={style.container}>
      <div>
        <h1 className={style.title}>Ian Diaz</h1>
        <h3 className={style.subtitle}>
          <span>FrontEnd</span> developer
        </h3>
        <div className={style.containerSocial}>
          <a
            href="https://www.linkedin.com/in/iandiaz-dev/"
            target="_blank"
            rel="noreferrer"
            className={style.containerBtn}
          >
            <img src={linkedin} alt="linkedin" className={style.social} />
          </a>
          <a
            href="https://github.com/IanDiaz27"
            target="_blank"
            rel="noreferrer"
            className={style.containerBtn}
          >
            <img src={github} alt="github" className={style.social} />
          </a>
          <a className={style.containerBtn}>
            <img src={file} alt="github" className={style.social} />
          </a>
        </div>
      </div>
      <div className={style.containerImg}>
        <img src={img} alt="Ian Diaz Avatar" className={style.img} />
      </div>
      <img src={arrow} className={style.arrow} />
    </section>
  )
}
