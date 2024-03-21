//Sorteio supermercado
let clientes=['Juraci','Seu João','Tatinha','Lucas Reis']

//Adicionando clientes
clientes.push('Thauane')
clientes.push('Didi Beli')
clientes.push('Léo')

//Tirando clientes mal amados
clientes.pop(4)

//Sorteando o ganhador que vai levar sua compra grátis
let indiceAleatorio = Math.floor(Math.random() *6);

console.log('O ganhador do sorteio é:', clientes [indiceAleatorio])