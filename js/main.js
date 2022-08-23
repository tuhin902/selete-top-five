const playerArray = [];

// selet five player display 

function display(selectedPlayer) {
    const tableBody = document.getElementById('selected-name');

    tableBody.innerHTML = '';
    for (i = 0; i < selectedPlayer.length; i++) {
        const name = playerArray[i];

        if (tableBody.childElementCount < 5) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
            tableBody.appendChild(tr);
        }
        else {
            alert("Maximum number of player are selected !");
        }
    }
}
function addToList(element) {
    // console.log(element.parentNode.children[0].innerText);
    const playerName = element.parentNode.children[0].innerText;

    playerArray.push(playerName);
    display(playerArray);
}
document.getElementById('calculate-btn').addEventListener('click', function () {

    playerExpense();

})

function playerExpense() {

    const perPlayerField = document.getElementById('per-player');
    const perPlayerAmountString = perPlayerField.value;
    const perPlayerAmount = parseFloat(perPlayerAmountString);
    perPlayerField.value = '';

    const playerExpenseTotal = document.getElementById('player-expense');
    // const previousPlayerExpenseTotalString = playerExpenseTotal.innerText;
    // const previousPlayerExpenseTotal = parseFloat(previousPlayerExpenseTotalString);

    const tableBody = document.getElementById('selected-name');
    const playerTotalExpense = perPlayerAmount * tableBody.childNodes.length;
    playerExpenseTotal.innerText = playerTotalExpense;

}

document.getElementById('calculate-total-btn').addEventListener('click', function () {


    const playerExpenseTotal = document.getElementById('player-expense');
    const playerExpenseTotalString = playerExpenseTotal.innerText;
    const playerExpenseTotalvalue = parseFloat(playerExpenseTotalString);

    // Manager amount 
    const managerField = document.getElementById('manager-field');
    const managerAmountString = managerField.value;
    const managerAmount = parseFloat(managerAmountString);
    managerField.value = '';
    // Coach amount 
    const coachField = document.getElementById('coach-field');
    const coachAmountString = coachField.value;
    const coachAmount = parseFloat(coachAmountString);
    coachField.value = '';

    // const playerCostSring = playerTotalExpense.innerText;
    // const playerCost = parseFloat(playerCostSring);

    const totalExpenses = playerExpenseTotalvalue + managerAmount + coachAmount;
    const getTotal = document.getElementById('total-expenses');
    getTotal.innerText = totalExpenses;


})

