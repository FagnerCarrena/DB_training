
function escolhaMaquina() {
  const escolha = ["Pedra", "Papel", "Tesoura"];
  const randomico = Math.floor(Math.random() * escolha.length);
  return escolha[randomico];
}


function vencedor(escolhaJogador, escolhaMaquina) {
  if (escolhaJogador === escolhaMaquina) {
    return "Empate!";
  } else if (
    (escolhaJogador === "Pedra" && escolhaMaquina === "Tesoura") ||
    (escolhaJogador === "Papel" && escolhaMaquina === "Pedra") ||
    (escolhaJogador === "Tesoura" && escolhaMaquina === "Papel")
  ) {
    return "Você venceu!";
  } else {
    return "Você perdeu!";
  }
}


function DB_Pcd(escolhaJogador) {
  const maquinaEscolha = escolhaMaquina(); 
  console.log(`Você escolheu: ${escolhaJogador}`);
  console.log(`A máquina escolheu: ${maquinaEscolha}`);

  const resultado = vencedor(escolhaJogador, maquinaEscolha);
  console.log(resultado);
}


DB_Pcd("Tesoura");
