async function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length !== 8) {
        alert("Por favor, digite um CEP válido com 8 dígitos.");
        return;
    }

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (dados.erro) {
            alert("CEP não encontrado.");
            return;
        }

        // Preenchendo os campos
        document.getElementById('rua').innerText = dados.logradouro;
        document.getElementById('bairro').innerText = dados.bairro;
        document.getElementById('cidade').innerText = dados.localidade;
        document.getElementById('uf').innerText = dados.uf;
        document.getElementById('cep-res').innerText = dados.cep;

    } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        alert("Ocorreu um erro na consulta.");
    }
}
