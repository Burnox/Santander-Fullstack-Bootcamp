const alunos = [
  {
    nome: 'Bruno',
    nota: 8,
    turma: '1A'
  },
  {
    nome: 'Mayara',
    nota: 9,
    turma: '1A'
  },
  {
    nome: 'Renata',
    nota: 7,
    turma: '2B'
  },
  {
    nome: 'Mara',
    nota: 5,
    turma: '2B'
  },
  {
    nome: 'Maria',
    nota: 2,
    turma: '3C'
  }
]

const mediaFinal = 6

function alunosAprovados(arr) {
  let aprovados = []

  for (let i = 0; i < arr.length; i++) {
    const { nome, nota } = arr[i] //Object Deconstruction

    if (nota >= mediaFinal) {
      aprovados.push(nome)
    }
  }

  //   for (let aluno of arr) {
  //     if (aluno.nota >= mediaFinal) {
  //       aprovados.push(aluno.nome)
  //     }
  //   }

  return aprovados
}

console.log(alunosAprovados(alunos))
