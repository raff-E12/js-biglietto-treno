# Progetto della settimana - Biglietto del treno

## Descrizione
Il programma si concentra sul calcolo dei biglietti del treno, in cui l'utente inserisce due valori:
1. L'età
2. Il numero di chilometri che intende percorrere

Di seguito vengono descritti i passaggi principali per il calcolo del prezzo del biglietto.

## Passaggi

### 1. Creazione delle variabili
Ho iniziato creando le variabili necessarie per gestire i dati e i calcoli richiesti.

### 2. Acquisizione dei dati dell'utente
Le variabili vengono utilizzate per tenere traccia dei valori inseriti dall'utente tramite `prompt`, che saranno poi utilizzati nella logica condizionale.

### 3. Applicazione delle condizioni
Una volta raccolti i valori, si procede con la logica condizionale:
1. **Verifica dell'età:**
   - Controllo se l'utente è minorenne o adulto.
2. **Calcolo del costo base:**
   - Il costo del viaggio è determinato moltiplicando il numero di chilometri per il prezzo fisso di **0.21 €/km**.
3. **Applicazione dello sconto:**
   - Se l'utente è minorenne, si applica uno sconto del **20%**.
   - Se l'utente è adulto, si applica uno sconto del **40%**.
   - Lo sconto si calcola moltiplicando il costo base per la percentuale di sconto e dividendo per 100.

### 4. Arrotondamento e stampa del risultato
Dopo aver applicato lo sconto, utilizzo il metodo `.toFixed(2)` per arrotondare il valore a due decimali. Questo permette di avere una visualizzazione chiara e corretta del prezzo finale, che viene poi stampato a schermo.
