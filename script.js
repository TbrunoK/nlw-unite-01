// objeto javascript //
const participante = {
  nome: "Bruno Chagas",
  email: "bruno@mail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

// array //
let participantes = [
  nome: "Bruno Chagas",
  email: "bruno@mail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)
]

const criarNovoParticipante = (participante) => {
  return `
      <tr>
        <td>
          <strong>
            ${participante.nome}
          </strong>
        </td>
        <br />
        <small>
          ${participante.email}
        </small>
        <td> ${participante.dataInscricao}</td>
        <td> ${participante.dataCheckIn}</td>
      </tr> 
  `
}

const atualizarLista = (participante) => {
// substituir informação do HML //

  document.querySelector("tbody").innerHTML = criarNovoParticipante(participante)
}

atualizarLista(participante)
