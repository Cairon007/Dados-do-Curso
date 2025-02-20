const notas = document.getElementById("notas");
const botaoLimpar = document.getElementById("limpar");

notas.value = localStorage.getItem("blocoNotas");

notas.addEventListener ("input",()=>{
localStorage.setItem("blocoNotas",notas.value)

});
function limpar(){
    localStorage.removeItem("blocoNotas");
    notas.value= "";
}



