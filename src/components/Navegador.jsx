import Link from "next/link";
import styles from "../styles/Navegador.module.css"

export default function Navegador(props) {
    return (

        <>
            <Link href={props.destino} >
                <div className={styles.navegador}style={{
                 backgroundColor: props.cor ?? 'rgb(86, 22, 160)'
                }} >
                    {props.texto}
                </div>
            </Link>


        </>

    )
}