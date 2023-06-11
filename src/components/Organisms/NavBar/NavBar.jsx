import style from "./NavBar.module.css"

export const NavBar = () => {
  return (
    <header className={style.container}>
      <nav className={style.navBar}>
        <h3>IanDiaz</h3>
        <ul className={style.containerOpt}>
          <li className={style.opt}>Inicio</li>
          <li className={style.opt}>Proyectos</li>
          <li className={style.opt}>Tecnologias</li>
          <li className={style.opt}>Contacto</li>
        </ul>
      </nav>
    </header>
  )
}
