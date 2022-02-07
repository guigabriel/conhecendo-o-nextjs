import Cabecalho from "../components/Cabecalho"
import Navegador from "../components/Navegador"


export default function Inicio() {
  return (
    <div>
      <div>
        <Cabecalho titulo='Aprenda NextJS'></Cabecalho>
      </div>

      <Cabecalho titulo='Fundamentos NextJS & React' />
      <h2>Vamos estudar esse framework</h2>

      <div style={{
        
      }}>
        <Navegador texto="Estiloso" destino='/estiloso' />
        <Navegador texto="JSX" destino='/jsx' />
        <Navegador texto="Título" destino='/titulo' />
      </div>

      

    </div>

  )
}