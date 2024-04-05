// participantes
let participantes = [
  {
    nome: "Bruno Chagas",
    email: "bruno@mail.com",
    dataInscricao: new Date(2024, 2, 1, 19, 23),
    dataCheckIn: null,
  },
  {
    nome: "Mayk Brito",
    email: "mayk@mail.com",
    dataInscricao: new Date(2024, 2, 23, 19, 23),
    dataCheckIn: null,
  },
  {
    nome: "Ana Souza",
    email: "ana@mail.com",
    dataInscricao: new Date(2024, 0, 3, 19, 23),
    dataCheckIn: new Date(2024, 0, 4, 20, 20),
  },
  {
    nome: "João Silva",
    email: "joao@mail.com",
    dataInscricao: new Date(2023, 11, 4, 19, 23),
    dataCheckIn: new Date(2023, 11, 5, 20, 20),
  },
  {
    nome: "Maria Oliveira",
    email: "maria@gmail.com",
    dataInscricao: new Date(2023, 10, 5, 19, 23),
    dataCheckIn: new Date(2023, 10, 6, 20, 20),
  },
  {
    nome: "Pedro Santos",
    email: "pedro@mail.com",
    dataInscricao: new Date(2023, 9, 6, 19, 23),
    dataCheckIn: new Date(2023, 9, 7, 20, 20),
  },
  {
    nome: "Carla Lima",
    email: "carla@mail.com",
    dataInscricao: new Date(2023, 8, 7, 19, 23),
    dataCheckIn: new Date(2023, 8, 8, 20, 20),
  },
  {
    nome: "Lucas Sousa",
    email: "lucas@mail.com",
    dataInscricao: new Date(2023, 7, 8, 19, 23),
    dataCheckIn: new Date(2023, 7, 9, 20, 20),
  },
  {
    nome: "Paula Costa",
    email: "paula@mail.com",
    dataInscricao: new Date(2023, 6, 9, 19, 23),
    dataCheckIn: new Date(2023, 6, 10, 20, 20),
  },
  {
    nome: "Gabriel Almeida",
    email: "gabriel@mail.com",
    dataInscricao: new Date(2023, 5, 10, 19, 23),
    dataCheckIn: new Date(2023, 5, 11, 20, 20),
  },
]

// criar um novo participante

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

  let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

  //conficional
  if (participante.dataCheckIn == null) {
    dataCheckIn = `
    <button
      data-email="${participante.email}"
      onclick="fazerCheckIn(event)"
    >
      confirmar check-in
    </button>
    `
  }

  //Retornar o HTML com as novas informações //
  return `
  <tr>
    <td>
      <strong>
        ${participante.nome}
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}

//Atualizar a lista com novos participantes
const atualizarLista = (participantes) => {
  let output = ""
  for (let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }

  // substituir informação do HTML
  document.querySelector("tbody").innerHTML = output
}

atualizarLista(participantes)

// Inscrição
const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {
    nome: dadosDoFormulario.get("nome"),
    email: dadosDoFormulario.get("email"),
    dataInscricao: new Date(),
    dataCheckIn: null,
  }

  // Verificar se o participante já existe
  const participanteExiste = participantes.find((p) => {
    return p.email == participante.email
  })

  if (participanteExiste) {
    alert("Email já cadastrado!")
    return
  }

  // Atualizar a lista de participantes
  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // Limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
  //Confirmar se  realmente quer o check-in
  const mensagemConfirmacao = "tem certeza que deseja fazer o check-in?"

  if (confirm(mensagemConfirmacao) == false) {
    return
  }

  // Encontrar o participante dentro da lista
  const participante = participantes.find((p) => {
    return p.email == event.target.dataset.email
  })
  // Atualizar o check-in do participante
  participante.dataCheckIn = new Date()

  // atualizar a lista de participantes
  atualizarLista(participantes)
}
