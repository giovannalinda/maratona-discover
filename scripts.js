const Modal = {
  open(){
    // para abrir modal adicionar a class active 
    document
    .querySelector('.modal-overlay')
    .classList
    .add('active')
  },
  close(){
    //fechar o modal
    // remover a class active do modal
    document
    .querySelector('.modal-overlay')
    .classList
    .remove('active')
  }
}

const transactions = [
  {
  id: 1,
  description:'Luz',
  amount: -50000,
  date: '23/01/2021'
},
{
  id: 2,
  description:'Website',
  amount: 500000,
  date: '23/01/2021'
},
{
  id: 3,
  description:'Internet',
  amount: -20000,
  date: '23/01/2021'
},
]

const Transaction = {
  incomes() {
    //somar as entradas
  },
  expenses() {
    //somar as saídas
  },
  total() {
    //entradas - saídas
  }
}

//substituir os dados do HTML com os dados do JS
//pegar transações do objeto transactions e colocar no HTML
const DOM = {
  innerHTMLTransaction() {

    const html = `
    <tr>
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="day">23/01/2021</td>
            <td>
              <img src="./assets/minus.svg" alt="Remover transação">
            </td>
      </tr>
    `

  }
}