function Componente({
  imagen = "",
  titulo = "",
  descripcion = ""
}) {
  return (
    <div>
      <div>{imagen}</div>
      <p>{titulo}</p>
      <p>{descripcion}</p>
    </div>
  );
}

export default Componente;
