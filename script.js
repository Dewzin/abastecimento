
const precos = {
    gasolina: 6.69,
    etanol: 5.80,
    diesel: 6.20
};

const atualizarValor = () => {
    const tipo = document.getElementById("combustivel").value;
    const litrosInput = document.getElementById("litros").value;
    const litros = parseFloat(litrosInput);

    if (!tipo) {
        alert("Selecione um tipo de combustível!");
        return;
    }

    if (litrosInput === "") {
        alert("Digite a quantidade de litros!");
        return;
    }

    if (isNaN(litros) || litros <= 0) {
        alert("Digite um valor válido e positivo!");
        return;
    }

    const precoPorLitro = precos[tipo];

    calcularAbastecimento(precoPorLitro, litros);
};

const calcularAbastecimento = (preco, litros) => {
    const total = preco * litros;

    const valorFormatado = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    document.getElementById("resultado").textContent = valorFormatado;
};

document.getElementById("combustivel")
    .addEventListener("change", atualizarValor);

document.getElementById("litros")
    .addEventListener("input", atualizarValor);

document.getElementById("formCombustivel")
    .addEventListener("submit", (e) => {
        e.preventDefault();
    });