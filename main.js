//let array1 = ["🍔" , "old wild west" , "bacon" , "cheddar",];
//console.log(array1);
let oggetto2 = {
    tipoPiatto: "panino",
    catedoria: "fast food",
    costo: 8,
    successo: true,
    rating: 4
};
//console.log(oggetto2);
let giochi1 = {
    Multiplayer: "Minecraft",
    singolPlayer: "DarkSouls",
};
//console.log(giochi1);
let azienda1 = {
    Nome:"Pinco palla srl",
    Luogo:"Lombardia",
    Settore:"Software House",
    NumeroSedi:"50",
    Dipendenti:"100",
    Telefono:" 📱 +39 ........ ",
    Vendita:"computer 💻",
};
//console.log(azienda1.Nome);
//console.log(azienda1.Luogo);
//console.log(azienda1.Settore);
//console.log(azienda1.NumeroSedi);
//console.log(azienda1.Telefono);
//console.log(azienda1.Vendita);
//console.log(azienda1.Dipendenti);

let mioArray3 = [59,"ciao",false]

let utente1 = {
    Nome: "Pippo",
    cognome: "Rossi",
    età: 50,
    email: "pipporossi@pipporossi.it",
    indirizzo: {
        città: "Milano",
        via: "Anfossi",
        civico: 23,
    }
};
//console.log(utente1.indirizzo.città);
//console.log(utente1.indirizzo.via);
//console.log(utente1.indirizzo.civico);
// let oggetto1 = {};

let utente2 = {
    nome: "alessandro",
    cognome: "ossena",
    età:16,
    email:"alessandro.ossena@myenaip.eu",
    DataDiNascita: new Date(2009, 4, 31),
    
    hobby:"disegni geometrici",
    scuola:"Enaip via dei giacinti",
    stage: {
        via:"stage via alessandro tadino",
        civico: 23,
        azienda: "Caf Cisl",
        
    }

};
//Nome_Cognome_età_DataDiNascita
//console.log(utente2.nome);
//console.log(utente2.cognome);
//console.log(utente2.età);
//console.log(utente2.DataDiNascita);
//email
//console.log(utente2.email);
//hobby
//console.log(utente2.hobby);
//Stage
//console.log(utente2.stage.azienda);
//console.log(utente2.stage.via);
//console.log(utente2.stage.civico);
//MeseDiNascita
//console.log(utente2.DataDiNascita.getMonth());



//`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
//{
  //"latitude": 41.875,
  //"longitude": 12.5,
  //"generationtime_ms": 0.0536441802978516,
  //"utc_offset_seconds": 0,
  //"timezone": "GMT",
  //"timezone_abbreviation": "GMT",
  //"elevation": 58,
  //"current_weather_units": {
    //"time": "iso8601",
    //"interval": "seconds",
    //"temperature": "°C",
    //"windspeed": "km/h",
    //"winddirection": "°",
    //"is_day": "",
    //"weathercode": "wmo code"
  //},
  //"current_weather": {
    //"time": "2025-10-16T10:30",
    //"interval": 900,
    //"temperature": 21.9,
    //"windspeed": 6.8,
    //"winddirection": 25,
    //"is_day": 1,
    //"weathercode": 2
  //}
//}

// Roma Piazza di Santa Francesca Romana 00186 Roma RM
const lat = 41.890501;
const lon = 12.490428;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

console.log(url);
//prendi i dati dall'url fornito e stampa l'oggetto
fetch(url).then(function(response) {
    if (!response.ok) {
      throw new Error("Errore nella risposta HTTP: " + response.status);
    }
    return response.json();
  }).then(function(data) {
    console.log("Dati ricevuti dal server:");
    console.log(data);
  })

