
   
const alunos = [
	{
		nome: 'Lucas',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Bruno',
		nota: 10,
		turma: '1B',
	},
	{
		nome: 'Andreia',
		nota: 7,
		turma: '2C',
	},
    {
		nome: 'Tiago',
		nota: 9,
		turma: '2C',
	},
    {
		nome: 'Diego',
		nota: 3,
		turma: '2C',
	},
    
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 7));