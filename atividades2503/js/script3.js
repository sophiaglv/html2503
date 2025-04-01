function validarEmail(){
    let email = document.getElementById('email').value;
    let msg = email.startsWith('admin')
    document.getElementById("validacaoEmail").textContent = msg ? "Seja Bem vindo administrador!" : " ";
}