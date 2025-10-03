function cadastrar() {
  let nome = document.getElementById("nome").value;
  let estado = document.getElementById("estado").value;
  let cidade = document.getElementById("cidade").value;
  let preco = document.getElementById("preco").value;


  let tipo = document.querySelector("input[name='tipo']:checked");
  tipo = tipo ? tipo.value : "Não selecionado";


  console.log("Nome:", nome);
  console.log("Estado:", estado);
  console.log("Cidade:", cidade);
  console.log("Preço de Compra:", preco);
  console.log("Tipo:", tipo);

  
  alert(`Fornecedor cadastrado:\nNome: ${nome}\nEstado: ${estado}\nCidade: ${cidade}\nPreço: ${preco}\nTipo: ${tipo}`);
}
