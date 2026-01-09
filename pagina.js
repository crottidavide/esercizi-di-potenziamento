
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
     else if (genere === "non binario") {
         messaggio.innerHTML = "benvenut*! " + nome;
         messaggio.style.border = "3px dashed lightgrey";
          

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
//esercizio2
function confronta() {
    
    let num1 = Number(document.getElementById("input1").value);
    let num2 = Number(document.getElementById("input2").value);

    if (Number(num1) > Number(num2)) {
       
        document.getElementById("quadrato1").style.backgroundColor = "green";
        document.getElementById("quadrato2").style.backgroundColor = "white";
    } else if (Number(num2) > Number(num1)) {
        document.getElementById("quadrato2").style.backgroundColor = "green";
        document.getElementById("quadrato1").style.backgroundColor = "grey";
    } else {
        document.getElementById("quadrato1").style.backgroundColor = "yellow";
        document.getElementById("quadrato2").style.backgroundColor = "yellow";
    }
}
