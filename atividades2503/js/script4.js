function verificar(){
    let nome = document.getElementById('nome').value;
    let verificar = nome.startsWith('A') && nome.endsWith('o');
    document.getElementById("validar").textContent = verificar;

}