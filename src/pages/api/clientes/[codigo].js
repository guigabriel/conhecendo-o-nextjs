export default function heandler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Guilherme ${codigo}`,
        email:`guilhermelisboa98@outlook.com ${codigo}`
    })
}