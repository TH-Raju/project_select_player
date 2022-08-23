//  this function is create for adding players into list 

function addPlayer(selectName, plyerName) {
    document.getElementById(selectName).addEventListener('click', function () {

        const playersName = document.getElementById(plyerName).innerText;



        const para = document.createElement("LI");
        const node = document.createTextNode(playersName);
        const element = document.getElementById('player-show');

        const totalPlayer = element.children.length;

        document.getElementById(selectName).style.backgroundColor = "rgb(125 211 252)";
        document.getElementById(selectName).disabled = true;

        if (totalPlayer == 5) {
            window.alert("You Cannot Choose More than 5 Plyers");
        }
        else {
            para.appendChild(node);
            const element = document.getElementById('player-show');
            element.appendChild(para);
        }
    })
}






// function for conver String to float 

function converter(field) {
    const stringNumber = document.getElementById(field).value;
    const floatNumber = parseFloat(stringNumber);
    return floatNumber;
}




