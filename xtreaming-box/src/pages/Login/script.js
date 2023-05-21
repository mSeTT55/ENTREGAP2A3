//Verificar se o e-mail é valido
function emailValido(email) {
  let validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let validaremail = document.getElementById('email');
  let emailErrado = document.getElementById('emailErrado');
  if (validacao.test(email)) {
    emailErrado.style.display = 'none';
    validaremail.style.borderStyle = 'none';
  } else {
    validaremail.style.borderColor = 'red';
    validaremail.style.borderRadius = '10px';
    validaremail.style.borderStyle = 'solid';
    validaremail.style.borderWidth = '2px';
    emailErrado.innerHTML = 'Email inválido';
    emailErrado.style.display = 'flex';
}
}