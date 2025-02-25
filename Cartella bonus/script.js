//Calcolo del biglietto e scrittura dei relativi passaggi

//I possibili risultati da indicare in calcolo
let Number_Indicator_KM;
let Age_Users;
const Price_KM_Standard = 0.21;
const text_price = document.getElementById('price-txt');

//Interazione di Finestra verso L'utente per lo stampo dei relativi valori

let window_message_Km = window.prompt('Quanti Chilometri Devi Percorre?', Number_Indicator_KM);
let window_message_Age = window.prompt('Inserite la vostra età?', Age_Users);
let Message_Prompt_Final;
let Calc_km_Total = 0;
let Number_Price = 0;

//Il tipo di condizione verifica se l'utente ha messo il numero correttamente

if (!isNaN(Number(window_message_Km)) && !isNaN(Number(window_message_Age))) {

    //Il tipo di condizione da adottare da adottare a seguente del tipo di età

    //Condizione applicata ai minorenni
   if (Number(window_message_Km) < 18) {
    Calc_km_Total = Number(window_message_Km) * Price_KM_Standard;
    // Calcolo della percentuale del 20%
    Message_Prompt_Final = (Calc_km_Total * 20) / 100;
    Number_Price = '€' + Message_Prompt_Final.toFixed(2);
    } 
    //Condizione Applicata agli adulti
    else if(Number(window_message_Age) <= 60){
    Calc_km_Total = Number(window_message_Age) * Price_KM_Standard;
    // Calcolo della percentuale del 40%
    Message_Prompt_Final = (Calc_km_Total * 40) / 100;
    Number_Price = '€' + Message_Prompt_Final.toFixed(2);
    } 
   //Applicazione applicata In caso di valore nullo
    else{
    Number_Price = '€' + 0;
   }
} else{
   window.confirm('Hai inserito una parola, invece di un numero, mi raccomando riprova a rifare il passaggio');
   location.reload();
}

//Stampo dell'importo calcolato dalla condizione in variabile
text_price.textContent = Number_Price;