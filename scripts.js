const Modal = {
  open() {
    // para abrir modal adicionar a class active
    document.querySelector('.modal-overlay').classList.add('active');
  },
  close() {
    //fechar o modal
    // remover a class active do modal
    document.querySelector('.modal-overlay').classList.remove('active');
  },
};

const transactions = [
  {
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021',
  },
  {
    description: 'Website',
    amount: 500000,
    date: '23/01/2021',
  },
  {
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021',
  },
  {
    description: 'App',
    amount: 200000,
    date: '23/01/2021',
  },
];

const Transaction = {
  all: transactions,

  add(transaction) {
    Transaction.all.push(transaction);

    App.reload();
  },

  remove(index) {
    Transaction.all.splice(index, 1);

    App.reload();
  },

  incomes() {
    let income = 0;
    // pegar todas as transações
    Transaction.all.forEach((transaction) => {
      // para cada transação, se ela for maior que zero
      if (transaction.amount > 0) {
        // somar a uma variavel e retornar a variavel
        income += transaction.amount;
      }
    });

    return income;
  },
  expenses() {
    let expense = 0;
    // pegar todas as transações
    Transaction.all.forEach((transaction) => {
      // para cada transação, se ela for menor que zero
      if (transaction.amount < 0) {
        // somar a uma variavel e retornar a variavel
        expense += transaction.amount;
      }
    });

    return expense;
  },
  total() {
    return Transaction.incomes() + Transaction.expenses();
  },
};

//substituir os dados do HTML com os dados do JS
//pegar transações do objeto transactions e colocar no HTML
const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
    const tr = document.createElement('tr');
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionsContainer.appendChild(tr);
    console.log(tr.innerHTML); //executar linha
  },
  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? 'income' : 'expense';

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
              <img src="./assets/minus.svg" alt="Remover transação">
            </td>
           `;

    return html;
  },

  updateBalance() {
    document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(
      Transaction.incomes()
    );
    document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(
      Transaction.expenses()
    );
    document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(
      Transaction.total()
    );
  },

  clearTransactions() {
    DOM.transactionsContainer.innerHTML = '';
  },
};

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? '-' : '';

    value = String(value).replace(/\D/g, '');

    value = Number(value) / 100;

    value = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return signal + value;
  },
};

const Form = {
  submit(event) {
    event.preventDefault()

    // verificar se todas as informações foram preenchidas
    // formatar os dados para salvar 
    // salvar
    // apagar os dados do formulario
    // modal feche
    // atualizar a aplicação
  }
}

const App = {
  init() {
    Transaction.all.forEach((transaction) => {
      DOM.addTransaction(transaction);
    });

    DOM.updateBalance();
  },
  reload() {
    DOM.clearTransactions();

    App.init();
  },
};

App.init();
