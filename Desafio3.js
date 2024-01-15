// Definindo a classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataques = {
        mago: 'magia',
        guerreiro: 'espada',
        monge: 'artes marciais',
        ninja: 'shuriken',
        // Adicione mais tipos de heróis conforme necessário
      };
  
      let ataque = ataques[this.tipo] || 'usou um ataque indefinido';
  
      // Exibindo a mensagem de ataque
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  
    aventura() {
      for (let i = 0; i < 3; i++) {
        // Realiza 3 ataques durante a aventura
        this.atacar();
  
        // Tomada de decisão simples com base na idade do herói
        if (this.idade > 50) {
          console.log(`O ${this.tipo} ${this.nome} está cansado após tantos anos de aventuras.`);
          break; // Sai do loop se o herói estiver cansado
        }
      }
    }
  }
  
  // Exemplo de uso da classe
  let mago = new Heroi('Gandalf', 100, 'mago');
  let guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
  
  mago.aventura();       // Saída: Realiza 3 ataques e exibe mensagens de acordo
  guerreiro.aventura();  // Saída: Realiza 3 ataques e exibe mensagens de acordo
  