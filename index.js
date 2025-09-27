// ===================================================
// SEU CÓDIGO EXISTENTE (CARROSSEL E FORMATAÇÃO)
// ===================================================
var setaesquerda = window.document.getElementById("seta-esquerda")
var bruna = window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo") // Leonardo não está sendo usado nas funções, mas mantido.
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

// Sua função de formatar telefone foi mantida.
function formatarTelefone(input) {
    var telefone = input.value.replace(/\D/g, '');
    var tamanho = telefone.length;
    if (tamanho === 11) {
      input.value = `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7, 11)}`;
    } else if (tamanho === 10) {
      input.value = `(${telefone.substring(0, 2)}) ${telefone.substring(2, 6)}-${telefone.substring(6, 10)}`;
    }
}

// ===================================================
// NOVA FUNCIONALIDADE (ENVIO DO FORMULÁRIO)
// ===================================================
// Garante que o script rode apenas quando a página estiver pronta.
document.addEventListener('DOMContentLoaded', () => {
    // Busca o formulário pelo ID.
    // IMPORTANTE: Seu <form> no HTML precisa ter o id="leadForm".
    const form = document.getElementById('leadForm');

    // Se o formulário não existir na página, o código para aqui para evitar erros.
    if (!form) {
        return;
    }

    // Adiciona um "escutador" para o evento de 'submit' (envio) do formulário.
    form.addEventListener('submit', function(event) {
        // 1. Impede o comportamento padrão do formulário.
        event.preventDefault();

        // 2. Insere a data e hora atuais no campo oculto 'Created'.
        // IMPORTANTE: Seu campo oculto precisa ter o id="created_at".
        const hiddenInput = document.querySelector('input[name="Created"]');
        if (hiddenInput) {
            const agora = new Date();
            const ano = agora.getFullYear();
            const mes = ('0' + (agora.getMonth() + 1)).slice(-2);
            const dia = ('0' + agora.getDate()).slice(-2);
            const hora = ('0' + agora.getHours()).slice(-2);
            const minuto = ('0' + agora.getMinutes()).slice(-2);
            const segundo = ('0' + agora.getSeconds()).slice(-2);
            hiddenInput.value = `${ano}-${mes}-${dia} ${hora}:${minuto}:${segundo}`;
        }
        
        // 3. Coleta todos os dados do formulário.
        const formData = new FormData(form);

        // 4. Envia os dados para o webhook em segundo plano.
        fetch(form.action, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                // 5. Se o envio foi bem-sucedido, mostra um alerta e atualiza a página.
                alert('Inscrição realizada com sucesso!');
                window.location.reload();
            } else {
                alert('Houve um problema ao enviar seus dados. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Houve um erro de conexão. Verifique sua internet e tente novamente.');
        });
    });
});