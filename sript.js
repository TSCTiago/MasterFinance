const Modal = {
    open() {
        document.querySelector('.modal-overlay')
            .classList.add('active')
    },
    close() {
        document.querySelector('.modal-overlay')
            .classList.remove('active')

    }
}

const transactions = [
    {
    id: 1,
    description: 'Luz',
    amount: -500000,
    date: '23/01/2022',
    },
    {
    id: 2,
    description: 'website',
    amount: 500000,
    date: '23/01/2022',
    },
    {
    id: 3,
    description: 'internet',
    amount: -20000,
    date: '23/01/2022',
    },
]


const Transaction = {
    incomes() {

    },

    expenses() {

    },

    total() {

    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction){
        const CSSclasse = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclasse}">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="assets/minus.svg" alt="remover transação">
            </td>
            `
            return html
    }
}
 const Utils = {
     formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace()
     }
 }

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})