const calcularTotal = (ferramentas, comprar) => {

    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.")
    }

    let total = 0
    let encontraFerramenta = false

    for (let j = 0; j < comprar.length; j++) {
        
        encontraFerramenta = false

        for (let i = 0; i < ferramentas.length; i++) {
            if (ferramentas[i].nome === comprar[j]) {
                total += ferramentas[i].preco
                encontraFerramenta = true
                break
            }
        }
        if (!encontraFerramenta) {
             throw new Error("Nenhuma ferramenta desejada encontrada.")
        }
    }

    return `O valor a pagar pelas ferramentas (${comprar.join(', ')}) é R$ ${total.toFixed(2)}`
}

module.exports = { calcularTotal }
