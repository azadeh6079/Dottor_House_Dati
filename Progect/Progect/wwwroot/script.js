

function Paziente(id, nome, cognome, sesso, indirizzo, dataDiNascita) {
    this.id = id;
    this.nome = nome;
    this.cognome = cognome
    this.sesso = sesso;
    this.indirizzo = indirizzo;
    this.dataDiNascita = dataDiNascita;

}

var pazienti = [
    new Paziente(1, "Marco", "Rossi", "M", "Monte san giovanni 10", ),
    new Paziente(2, "Alberto", "Faust", "M", "Via commerciale 23", ),
    new Paziente(3, "Piero", "Porta", "M", "Via udine 56", ),
    new Paziente(4, "Federico", "Ponte", "M", "Via carducci 90", ),
    new Paziente(5, "Marta", "Capriglia", "F", "Via miramare 234", ),
    new Paziente(6, "Eli", "Lonza", "F", "Via stramare 56", ),
    new Paziente(7, "Giorga", "Bosdachini", "F", "via giulia 34", ),
    new Paziente(8, "Mery", "Lucconi", "F", "Via moreri 90", ),
    new Paziente(9, "Sabrina", "Bianchi", "F", "San giusto 56", ),
    new Paziente(10, "Silvia", "Lupo", "F", "Via mazini 13", ),
];

