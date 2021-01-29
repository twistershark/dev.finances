const Modal = {
  open(){
    document
      .querySelector('.modal-overlay')
      .classList.add('active');
  },
  close(){
    document
      .querySelector('.modal-overlay')
      .classList.remove('active');
  }
}

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: '23/10/2021',
  },
  {
    id: 2,
    description: "Criação de Website",
    amount: 500000,
    date: '25/01/2021',
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: '28/01/2021',
  },
];

const DOM = {
  tableBody: document.querySelector('#data-table tbody'),
  addTransaction(transaction) {
    const newTableRow = document.createElement('tr');
    newTableRow.innerHTML = this.innerHTMLContent(transaction);
    this.tableBody.appendChild(newTableRow);
  },
  innerHTMLContent(transaction) {
    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${transaction.amount < 0 ? 'expense' : 'income'}">
        ${transaction.amount}
      </td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover transação">
      </td>
    `;

    return html;
  }
}

transactions.forEach(transaction => DOM.addTransaction(transaction));

// Criar objeto de transações
// Armazenar transações em um array
// Pegar objeto do JS e colocar no HTML