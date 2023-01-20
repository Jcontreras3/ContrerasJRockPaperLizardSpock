
function GetApi(){
    
    fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption")
    .then(Response => Response.text())
    .then(data => {cpuInput = data})
}

let cpuInput = "";

export{GetApi, cpuInput}