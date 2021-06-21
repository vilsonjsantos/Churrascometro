// Carne - 400 gr por pessoa + de 6 horas - 650
// cerveja - 1200 ml por pessoa + 6 horas - 2000
// refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

// horas < 6  let_adultos * 400 else let_adultos * 650
// horas < 6 let_adultos * 1200 else let_adultos 2000
// horas < 6 let_adultos * 1000 else let_adultos 1500
// let crianças * 0.5

// se < 1000 then qtd_carne / 100 // se >=1000 then qtd_carne / 1000


var botaoCalc = document.getElementById("calcular");
var resultadoFinal = [];
var testeValue

function calc(element){

    let qtd_carne
    let qtd_cerveja
    let qtd_refrigerante
    let qtd_adultos = document.getElementById("adultos")
    let qtd_criancas = document.getElementById("criancas")
    let qtd_duracao = document.getElementById("duracao")
    let resultadoCalc = [qtd_adultos.value, qtd_criancas.value, qtd_duracao.value]
    let todosCamposPreenchidos = true


    if(qtd_adultos.value == 0 || qtd_duracao.value == 0 || qtd_adultos.value < 0 || qtd_duracao.value < 0){
        todosCamposPreenchidos = false
    }

   switch (todosCamposPreenchidos){
        case false:
            resultadoFinal[0] = null 
            break;
        case true:
            if (qtd_duracao.value < 6) {
                qtd_carne = (qtd_adultos.value * 400) + (qtd_criancas.value * 400 * 0.5)
                qtd_cerveja = (qtd_adultos.value * 1200)
                qtd_refrigerante = (qtd_adultos.value * 1000) + (qtd_criancas.value * 1000 * 0.5)

                resultadoCalc[0] = qtd_carne
                resultadoCalc[1] = qtd_cerveja
                resultadoCalc[2] = qtd_refrigerante
            }
            else{
                qtd_carne = (qtd_adultos.value * 650) + (qtd_criancas.value * 650 * 0.5)
                qtd_cerveja = (qtd_adultos.value * 2000)
                qtd_refrigerante = (qtd_adultos.value * 1500) + (qtd_criancas.value * 1500 * 0.5)

                resultadoCalc[0] = qtd_carne
                resultadoCalc[1] = qtd_cerveja
                resultadoCalc[2] =  qtd_refrigerante
            }

            resultadoFinal = convert(resultadoCalc)
    }
}

function convert(qtdCarneBebida){

    if ( qtdCarneBebida[0] < 1000 ){
        qtdCarneBebida[0] += " Gramas de carne"

    }
    else{
        qtdCarneBebida[0] /= 1000
        qtdCarneBebida[0] += "Kg de carne"

    }

    qtdCarneBebida[1] = (qtdCarneBebida[1] / 1000) 
    qtdCarneBebida[2] = (qtdCarneBebida[2] / 1000) 
    

    if (qtdCarneBebida[1] > 1 ){
        qtdCarneBebida[1] += " Litros de Cerveja" 
    }
    else{
        qtdCarneBebida[1] += " Litro de Cerveja"
    }
    if (qtdCarneBebida[2] > 1 ){
        qtdCarneBebida[2] += " Litros de Refrigerante" 
    }
    else{
        qtdCarneBebida[2] += " Litro de Refrigerante"
    }

    return qtdCarneBebida

}

function func_escreva() {
    let p = document.getElementById("divResultado")

    if(resultadoFinal[0] == null ){
        p.innerHTML = "<p style='color:#d90429; font-weight:bold; font-family: arial;'> Você deve preencher todos os campos para continuar.</p>"


    }

    else{
        p.innerHTML = "<p>Para este churrasco você vai precisar de: </p><br> \n\
        <p>"+ resultadoFinal[0] + ";" + "</p> <p>"+resultadoFinal[1] + "; e" +"</p>\n\
        <p>"+resultadoFinal[2] + "." +"</p>"
    }   

}




// anotação, converter para medida de KG e Litro, apresentar o resultado e por no HTML

botaoCalc.addEventListener("click", calc);
botaoCalc.addEventListener("click", func_escreva);



