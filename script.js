let botao = document.getElementById("convert")
let select = document.getElementById("select-moedas")



async function converterMoedas(){

    let moedas = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL").then(function(resposta){
        return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let Euro = moedas.EURBRL.high

    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "Dólar U.S.A - US$"){
    let valorEmDolares = inputValorReais /  dolar
     inputMoedas.innerHTML = valorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }
    if(select.value === "Euro - €"){
    let valorEmEuros = inputValorReais /  Euro
    inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-DE',{style: 'currency', currency: 'EUR'})
    }

    
    textoReal.innerHTML = (inputValorReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" }))
}

//Função para trocar moeda e bandeira
function trocaDeMoeda(){

    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")
    

if (select.value === "Dólar U.S.A - US$"){
    textoMoedas.innerHTML = "Dólar Americano"
    bandeiraMoedas.src = "./IMG/estados-unidos.png"
    

}
if (select.value === "Euro - €"){
    textoMoedas.innerHTML = "Euro"
    bandeiraMoedas.src = "./IMG/euro.png"
    
}
converterMoedas()
}
botao.addEventListener("click", converterMoedas)
select.addEventListener("change",trocaDeMoeda)














/*let Euro = 6
let select = document.getElementById("select-moedas")


 function converterMoedas() {
    let inputValorReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    
    if (select.value === "Dolar U.S.A - US$") {
        let valorEmDolares = inputValorReais / dolar
        inputMoedas.innerHTML = (valorEmDolares.toLocaleString("en-us", { style: "currency", currency: "USD" }))

    }
    if (select.value === "Euro - €") {
        let valorEmEuro = inputValorReais / Euro
        inputMoedas.innerHTML = (valorEmEuro.toLocaleString("de-DE", { style: "currency", currency: "EUR" }))

    }

    textoReal.innerHTML = (inputValorReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" }))

}

function trocaDeMoeda() {

    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "Dólar U.S.A - US$") {
        textoMoedas.innerHTML = "Dolar Americano"
        bandeiraMoedas = "./IMG/estados-unidos"
    }

    if (select.value === "Euro - €") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./IMG/euro.png"
    }


}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda) 
//console.log(input)
//toLocaleString('en-us',{style: 'currency', currency: 'USD'})
//toLocaleString('de-ES',{style: 'currency', currency: 'EUR'})
*/