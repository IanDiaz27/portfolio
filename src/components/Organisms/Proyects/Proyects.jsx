import style from "./Proyects.module.css"

export const Proyects = () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Proyectos</h2>
      <div className={style.containerCards}></div>
    </section>
  )
}
