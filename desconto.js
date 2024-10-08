
function calcularValorTotal(nomeProduto, precoUnitario, quantidade) {
    let valorTotal = precoUnitario * quantidade;
    let desconto = 0;
  
    
    if (quantidade > 50) {
      desconto = 0.25;
    } else if (quantidade >= 21) {
      desconto = 0.20; 
    } else if (quantidade >= 11) {
      desconto = 0.10; 
    }
  
    
    valorTotal = valorTotal - (valorTotal * desconto);
  
    console.log(`Produto: ${nomeProduto}`);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Valor total a ser pago: R$ ${valorTotal.toFixed(2)}`);
  }
  
const nomeProduto = "oculos";
const precoUnitario = 10.00; 
const quantidade = 55; 

  
  calcularValorTotal(nomeProduto, precoUnitario, quantidade);
  