import Link from "next/link"
import styles from "../styles/Layout.module.css"


export default function Layout (props) {
    console.log(props)
    return (
        <div className={styles.layout} >    

            <div className={styles.cabecalho} >
                <h1> {props.titulo ?? "Outro Título"} </h1>
            </div>
            
            <div className={styles.conteudo}>
                {props.children}
            </div>

            <div className={styles.footer}>
                <Link href='/' >Voltar</Link>
            </div>
        </div>
    )
}