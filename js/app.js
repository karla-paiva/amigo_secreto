const amigos = [];

function adicionar() {
  const campo = document.getElementById('nome-amigo');
  const nome = campo.value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome.');
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
}

function reiniciar(evento) {
}
