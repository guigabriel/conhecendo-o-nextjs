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
        display:'Flex', justifyContent:'center', alignItems:'center', height:'100vh', flexWrap:'wrap'
      }}>
        <Navegador texto="Estiloso" destino='/estiloso' />
        <Navegador texto="JSX" destino='/jsx' cor = 'rgb(170, 57, 97)' />
        <Navegador texto="Título" destino='/titulo' cor = 'rgb(42, 114, 119)' />
        <Navegador texto="Navegação #01" destino= '/navegador' cor = 'green ' />
        <Navegador texto="Navegação #02" destino='/cliente/sp-123/123' cor = 'blue'/> 
        <Navegador texto="Componente com estado" destino='/estado' cor = 'gray'/> 
        <Navegador texto="Integração com API #01" destino='/integracao' cor = 'orange'/> 
        <Navegador texto="Conteúdo Estático" destino='/estatico' cor = 'yellow'/> 


      </div>

      

    </div>

  )
}