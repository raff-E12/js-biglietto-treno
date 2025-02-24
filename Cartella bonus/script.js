//Calcolo del biglietto e scrittura dei relativi passaggi

//I possibili risultati da indicare in calcolo
let Number_Indicator_KM = 0;
let Age_Users = 0;
const Price_KM_Standard = 0.21;
const text_price = document.getElementById('price-txt');

//Interazione di Finestra verso L'utente per lo stampo dei relativi valori

const Window_Prompt_message_1 = window.prompt('Quanti Chilometri Devi Percorre?', Number_Indicator_KM);
const Window_Prompt_message_2 = window.prompt('Inserite la vostra età?', Age_Users);
let Message_Prompt_Final;
let Calc_km_Total = 0;
let Number_Price = 0;

//Il tipo di condizione da adottare da adottare a seguente del tipo di età

//Condizione applicata ai minorenni
if (Number(Window_Prompt_message_2) < 18) {
    Calc_km_Total = Number(Window_Prompt_message_1) * Price_KM_Standard;
    // Calcolo della percentuale del 20%
    Message_Prompt_Final = (Calc_km_Total * 20) / 100;
    Number_Price = '€' + Message_Prompt_Final.toFixed(2);
} 
//Condizione Applicata agli adulti
else if(Number(Window_Prompt_message_2) <= 60){
    Calc_km_Total = Number(Window_Prompt_message_1) * Price_KM_Standard;
    // Calcolo della percentuale del 40%
    Message_Prompt_Final = (Calc_km_Total * 40) / 100;
    Number_Price = '€' + Message_Prompt_Final.toFixed(2);
} 
//Applicazione applicata In caso di valore nullo
else{
    Number_Price = '€' + 0;
}

//Stampo dell'importo calcolato dalla condizione in variabile
text_price.textContent = Number_Price;