const calcularTotal = (ferramentas, comprar) => {
    let total = 0
    for (let i = 0; i < ferramentas.length; i++) {
        for (let j = 0; j < comprar.length; j++) {
            if (ferramentas[i].nome === comprar[j]) {
                total += ferramentas[i].preco
                break
            }
        }
    }
    return `O valor a pagar pelas ferramentas (${comprar.join(', ')}) é R$ ${total.toFixed(2)}`
}

const ferramentas = [
    { nome: "UFT", preco: 100, fabricante: "OpenText" },
    { nome: "TestComplete", preco: 200, fabricante: "Smartbear" },
    { nome: "TOSCA", preco: 300, fabricante: "Tricents" }
];

const comprar = [ "UFT", "TOSCA" ]

console.log(calcularTotal(ferramentas, comprar))

module.exports = { calcularTotal }