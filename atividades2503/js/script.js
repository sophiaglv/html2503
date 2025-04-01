function formarArray(){
    let texto = document.getElementById('texto').value;

    let itens = texto.split(',').map(item => item.trim());


    document.getElementById('texto').value = '[' + itens.join(',') + ']';


    console.log('Itens no formato de array:', '[' + itens.join(', ') + ']');
}