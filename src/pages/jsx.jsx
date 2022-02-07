import Link from "next/link"

export default function JSX () {
    let a = 5
    let b = 2
    let frase = 'bacana'

    const obj = {
        nome: 'Guilherme',
        idade: 23
    }

    return(
        <div>
            <h1>O JSX é um conceito central </h1>
            <h2> {a * b} </h2>
            <h3> {frase.toLocaleUpperCase()} </h3>

            <Link href='/'> Voltar </Link>
            

            {JSON.stringify(obj)}
        </div>
    )
}