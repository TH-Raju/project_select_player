//  this function is create for adding players into list 

function addPlayer(selectName, plyerName) {
    document.getElementById(selectName).addEventListener('click', function () {
        const playersName = document.getElementById(plyerName).innerText;

        const para = document.createElement("li");
        const node = document.createTextNode(playersName);
        para.appendChild(node);
        const element = document.getElementById('player-show');
        element.appendChild(para);

        document.getElementById(selectName).disabled = true;

    })
}


document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerIn = document.getElementById('perPlayer-field').value;
    const perPlayer = parseFloat(perPlayerIn);
    const expensesTotal = 5 * perPlayer;

    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = expensesTotal;
    console.log(typeof (perPlayer));


})
