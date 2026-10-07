const amigos = [];
const sorteados = [];

function adicionar() {
  const campo = document.getElementById('nome-amigo');
  const nome = campo.value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome.');
    return;
  }

  const jaExiste = amigos.some(
    (amigo) => amigo.toLowerCase() === nome.toLowerCase()
  );

  if (jaExiste) {
    alert('Esse nome já foi adicionado.');
    campo.focus();
    return;
  }

  amigos.push(nome);
  atualizarLista();

  campo.value = '';
  campo.focus();
}

function atualizarLista() {
  const lista = document.getElementById('lista-amigos');
  lista.textContent = amigos.join(', ');
}

function sortear() {
  if (amigos.length < 2) {
    alert('Adicione pelo menos dois nomes para sortear.');
    return;
  }

  const disponiveis = amigos.filter((nome) => !sorteados.includes(nome));

  if (disponiveis.length === 0) {
    alert('Todos os amigos já foram sorteados. Clique em Reiniciar para começar de novo.');
    return;
  }

  const indice = Math.floor(Math.random() * disponiveis.length);
  const escolhido = disponiveis[indice];

  sorteados.push(escolhido);
  atualizarSorteio();
}

function atualizarSorteio() {
  const resultado = document.getElementById('lista-sorteio');
  resultado.textContent = sorteados.join(', ');
}

function reiniciar(evento) {
  if (evento) {
    evento.preventDefault();
  }

  amigos.length = 0;
  sorteados.length = 0;

  document.getElementById('lista-amigos').textContent = '';
  document.getElementById('lista-sorteio').textContent = '';

  const campo = document.getElementById('nome-amigo');
  campo.value = '';
  campo.focus();
}