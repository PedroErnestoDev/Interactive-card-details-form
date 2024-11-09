let spanErrorNome = document.querySelector(".spanerrornome") 
let spanErrorNum = document.querySelector(".spanerrornum")
let spanErrorMm = document.querySelector(".spanerrormm")
let spanErrorYy = document.querySelector(".spanerroryy")
let spanErrorCvc = document.querySelector(".spanerrorcvc")

let inputNome = document.querySelector("#nomeinput")
let inputNumero = document.querySelector("#numeroinput")
let inputMm = document.querySelector("#dateinputmm")
let inputYy = document.querySelector("#dateinputyy")
let inputCvc = document.querySelector("#cvcinput")

let nomecard = document.querySelector(".nomecard")
let numcard = document.querySelector(".numerocard")
let mmcard = document.querySelector(".mmcard")
let yycard = document.querySelector(".yycard")
let cvccard = document.querySelector(".cvccard")

let botaoConfirm = document.querySelector("#botao"); 

let divthank = document.querySelector(".divthank")
let form = document.querySelector("form")

function showerror(event){
    event.preventDefault()
    console.log(event)
    if(inputNome.value === ""){
        spanErrorNome.style.display = "flex"
    }
    else{
        spanErrorNome.style.display = "none"
    }
    if(inputNumero.value === ""){
        spanErrorNum.style.display = "flex"
    }
    else{
        spanErrorNum.style.display= "none"
    }
    if(inputMm.value === ""){
        spanErrorMm.style.display = "flex"
    }
    else{
        spanErrorMm.style.display= "none"
    }
    if(inputYy.value === ""){
        spanErrorYy.style.display = "flex"
    }
    else{
        spanErrorYy.style.display= "none"
    }
    if(inputCvc.value === ""){
        spanErrorCvc.style.display = "flex"
    }
    else{
        spanErrorCvc.style.display= "none"
    }
    if(spanErrorCvc.style.display == "none" && spanErrorYy.style.display == "none" && spanErrorMm.style.display == "none" && spanErrorMm.style.display == "none" && spanErrorNum.style.display == "none" && inputNome.style.border =="solid 1px var(--Light-grayish-violet)" && inputNumero.style.border == "solid 1px var(--Light-grayish-violet)" && inputMm.style.border == "solid 1px var(--Light-grayish-violet)" && inputYy.style.border == "solid 1px var(--Light-grayish-violet)" && inputCvc.style.border =="solid 1px var(--Light-grayish-violet)"){
        changepage()
    }
}

function changepage(){
    divthank.style.display = "flex"
    form.style.visibility = "hidden"
    if(form.style.display == "none"){
        botaoConfirm.style.display = "flex"
    }}
function showdadosnome(){
    let nome = inputNome.value

    if(!isNaN(nome)){
        inputNome.style.border ="1px solid red"
    }
    else{
        inputNome.style.border ="solid 1px var(--Light-grayish-violet)"
    }
    nomecard.innerHTML = inputNome.value
}
function showdadosnum(){
    let numlength = inputNumero.value.length
    if (numlength === 4 || numlength === 9 || numlength === 14){
        inputNumero.value += ' '
    }

    let num = inputNumero.value.replace(/\s/g, '');

    if(isNaN(num)){
        inputNumero.style.border ="1px solid red"
    }
    else{
        inputNumero.style.border ="solid 1px var(--Light-grayish-violet)"
    }

    numcard.innerHTML = inputNumero.value
}
function showdadosmm(){
    let x = inputMm.value
    if(isNaN(x) || x > 12){
        inputMm.style.border ="1px solid red"
    }
    else{
        inputMm.style.border ="solid 1px var(--Light-grayish-violet)"
    }
    mmcard.innerHTML = inputMm.value   
}
function showdadosyy(){
    let y = inputYy.value
    if(isNaN(y)){
        inputYy.style.border ="1px solid red"
    }
    else{
        inputYy.style.border = "solid 1px var(--Light-grayish-violet)"
}
    yycard.innerHTML = inputYy.value
}
function showdadoscvc(){
    let c = inputCvc.value
    if(isNaN(c)){
        inputCvc.style.border ="1px solid red"
    }
    else{
        inputCvc.style.border ="solid 1px var(--Light-grayish-violet)"
    }
    cvccard.innerHTML = inputCvc.value
}
