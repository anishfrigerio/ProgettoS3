// funzione per i tasti dei numeri e degli operatori
function inserisciOutput(x){
    document.getElementById('risultato').innerHTML += x;
}
// funzione per il tasto 'C'
function cancellaTutto(){
    document.getElementById('risultato').innerHTML = '';
}
// funzione per il tasto '='
function calcolo(){
    let y = document.getElementById('risultato').innerText;
    document.getElementById('risultato').innerHTML = Math.round(eval(y));
}                                                             
/* potrei non usare Math.round() visto che i problemi che mi risolve ci sono lo stesso 
    con numeri molto grandi, basta che ha almeno 16 cifre il numero ed inizia ad uscire
    dallo spazio */
