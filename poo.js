/*

	?????????

*/

// Objeto de forma literal
function criaPessoa (nome, sobrenome, idade){
	return{
		// nome: nome,
		// sobrenome: sobrenome,
		// idade: idade

		// quando os nomes forem repetidos,
		// nao há a necessidade de repetição
		// podendo ficar assim:
		nome, sobrenome, idade
	};
}
const pessoa1 = criaPessoa('Paulo', 'Roberto', 30);
const pessoa2 = criaPessoa('Sandra', 'Silva', 25);
const pessoa3 = criaPessoa('João', 'Paulo', 34);
const pessoa4 = criaPessoa('Victor', 'Santoa', 12);
const pessoa5 = criaPessoa('Flavia', 'Caetano', 23);

console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5);

/*

	função dentro de objeto

*/ 

const novaPessoa = {
	nome: 'Ronaldo',
	sobrenome: 'Silva',
	idade: 12,

	fala(){
		console.log (`${this.nome}... brilha muito no Corinthians.`);
	},

	incrementaIdade(){
		this.idade++;
		console.log (`Idade ${this.idade}`);
	}
}
novaPessoa.fala();
novaPessoa.incrementaIdade();