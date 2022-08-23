addPlayer('select-messi', 'messi');
addPlayer('select-neymar', 'neymar');
addPlayer('select-pedri', 'pedri');
addPlayer('select-ronaldinho', 'ronaldinho');
addPlayer('select-ronaldo', 'ronaldo');
addPlayer('select-sadio', 'sadio');



document.getElementById('calculate').addEventListener('click', function () {
    const perPlayer = converter('perPlayer-field');
    const expensesTotal = 5 * perPlayer;

    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = expensesTotal;


})




document.getElementById('calculate-total').addEventListener('click', function () {
    const expensesTotalSt = document.getElementById('player-expenses').innerText;
    const expensesTotal = parseFloat(expensesTotalSt);
    const managerField = converter('manager-field');
    const coachField = converter('coach-field');
    const totalAmount = expensesTotal + managerField + coachField;
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = totalAmount;
})
