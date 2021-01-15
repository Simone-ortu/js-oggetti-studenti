// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.

var studente = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 25
};
for (var k in studente) {
    console.log(k + ': ' + studente[k]);
}

var classe = [
    {
        nome: 'Mario',
        cognome: 'Rossi',
        eta: 35
    },
    {
        nome: 'Marco',
        cognome: 'Neri',
        eta: 40
    },
    {
        nome: 'Giuseppe',
        cognome: 'Verdi',
        eta: 30
    },
    {
        nome: 'Luca',
        cognome: 'Bianchi',
        eta: 20
    }
];

for (var i = 0; i < classe.length; i++) {
    console.log(classe[i].cognome);
    console.log(classe[i].nome);
    
    
}

var nomeInsert = prompt('Inserire nome');
var cognomeInsert = prompt('Inserire cognome');
var etaInsert = parseInt(prompt('Inserire etá;'));

classe.push({nome : nomeInsert , cognome : cognomeInsert , eta : etaInsert});

console.log(classe);