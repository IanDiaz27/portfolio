import style from "./AboutMe.module.css"

export const AboutMe = () => {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Sobre mi</h2>
      <p className={style.text}>
        Tengo +2 años de experiencia en el campo del desarrollo web. Realice el
        bootcamp de SoyHenry, donde obtuve la certificación como Fullstack
        Developer, y estoy cursando la licenciatura en Informática en la UNaHur.
        Me especializo en el uso de Atomic Design y aprovecho al máximo las
        ventajas de ReactJS.
      </p>
      <p className={style.text}>
        Mi enfoque se basa en cuidar los detalles, componentizar al máximo y
        estar constantemente explorando técnicas de optimización web. Me
        esfuerzo por satisfacer las necesidades de mis clientes y brindar
        soluciones de alta calidad.
      </p>
    </section>
  )
}
