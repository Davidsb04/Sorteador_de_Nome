const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('nomes');
  const sortearButton = document.getElementById('sortear');
  const resultado = document.getElementById('resultado');

  sortearButton.addEventListener('click', function () {
    const nomes = textarea.value.trim().split('\n');
    const quantidade = parseInt(document.getElementById('quantidade').value);

    if (nomes.length === 0) {
      resultado.textContent = 'Digite pelo menos um nome.';
    } else if (quantidade <= 0 || quantidade > nomes.length || quantidade === '') {
      resultado.textContent = 'Digite uma quantidade válida.';
    } else {
      resultado.textContent = '';

      for (let i = 0; i < quantidade; i++) {
        if (nomes.length === 0) break;
        const index = Math.floor(Math.random() * nomes.length);
        resultado.textContent += nomes[index];
        if (i < quantidade - 1) resultado.textContent += ', ';
        nomes.splice(index, 1);
      }
    }
  });
});