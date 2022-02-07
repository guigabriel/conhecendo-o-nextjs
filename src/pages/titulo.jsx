import Link from "next/link"

export default function nome () {
    const titulo = <h1>{'o jsx é um conceito central'.toLocaleUpperCase()}</h1>

    function subTitulo() {
        return <h2>{'bacana'.toLocaleUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subTitulo()}
            <Link href='/' > Voltar </Link>
        </div>
       
    )

}