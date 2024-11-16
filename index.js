var setaesquerda = window.document.getElementById("seta-esquerda")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setadireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    bruna.style ="display:none"
    samantha.style ="display:flex"
    setadireita.style ="display:none"
    setaesquerda.style ="display:flex; margin-top:55px " 
}
function RolarParaEsquerda() {
    bruna.style = "display:flex"
    samantha.style = "display:none"
    setadireita.style = "display:flex; margin-top:55px"
    setaesquerda.style = "display:none"

}
function formatarTelefone(input) {
    var telefone = input.value.replace(/\D/g, '');
    var tamanho = telefone.length;
    if (tamanho === 11) {
      input.value = `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7, 11)}`;
    } else if (tamanho === 10) {
      input.value = `(${telefone.substring(0, 2)}) ${telefone.substring(2, 6)}-${telefone.substring(6, 10)}`;
    }
  }
 

