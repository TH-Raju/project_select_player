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

function converter(field) {
    const stringNumber = document.getElementById(field).value;
    const floatNumber = parseFloat(stringNumber);
    return floatNumber;
}



