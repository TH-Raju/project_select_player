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


