const jantar = number(prompt("Valor do Jantar R$: "))
const garcom = jantar * 0.10
const total = jantar + garcom
alert(`Taxa Garçom R$: ${garcom.toFixed(2)}\nTotal R$: ${total.toFixed(2)}`)