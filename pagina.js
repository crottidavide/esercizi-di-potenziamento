
function saluta() {
   
    let inputNome = document.getElementById("nomeUtente");
    let nome = inputNome.value;
    let genere = document.getElementById("genereUtente").value;
    let messaggio = document.getElementById("messaggio");

  
    if (nome === "") {
       
        messaggio.innerHTML = "Ehi, non hai inserito il nome!";
        inputNome.style.border = "2px solid red";
    } 
    else if (genere === "uomo") {
       messaggio.innerHTML = "benvenuto! " + nome;
        messaggio.style.border = "3px dashed blue";
    } 
    else if (genere === "donna") {
         messaggio.innerHTML = "benvenuta! " + nome;
         messaggio.style.border = "3px dashed pink";
          

    }
}
//esercizio3
let contatore=0;
function aumentanumero() {
   contatore=contatore+1  
document.getElementById("numero").innerHTML = contatore;
if (contatore>=1){
    document.getElementById("numero").style.color="green";
} 

}


function diminuiscinumero() {
   contatore=contatore-1
document.getElementById("numero").innerHTML = contatore;
if (contatore<0){
    document.getElementById("numero").style.color="red";
}

}
