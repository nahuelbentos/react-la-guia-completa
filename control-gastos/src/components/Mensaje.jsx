

export const Mensaje = ({children, tipo}) => {
  console.log({children, tipo});
  return (
    <div className={`alerta ${tipo}`} >{children}</div>
  )
}
