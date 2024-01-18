alert('Bem vindo a meu primeiro formulário');

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function calculaIMC(peso, altura) {
        const imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    function exibeResultado(nome, sobrenome, peso, altura) {
        const imc = calculaIMC(peso, altura);
        const mensagem = `
            <p style="font-size: 30px; color: red; background-color: white animation: pulse 2s infinite;">
                Nome: ${nome}<br>
                Sobrenome: ${sobrenome}<br>
                Peso: ${peso}Kg<br>
                Altura: ${altura}m<br>
                IMC: ${imc}
            </p>
        `;
        resultado.innerHTML = mensagem;


        alert(`IMC de ${nome} ${sobrenome}é de: ${imc}`);
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = parseFloat(form.querySelector('.peso').value);
        const altura = parseFloat(form.querySelector('.altura').value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            alert('Por favor, insira valores válidos para peso e altura.');
            return;
        }

        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura,
        });

        exibeResultado(nome, sobrenome, peso, altura);
        console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();