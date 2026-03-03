'use strict';

// Klasa i niz artikala
class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}

const artikli = [
    new Artikal("Monitor", 165, "24 inča, IPS panel"),
    new Artikal("TV", 650, "55 inča, Smart TV"),
    new Artikal("Miš", 20, "Bežični optički miš")
];

// Selektori
const tabela = document.querySelector("#artikli");
const detalji = document.querySelector("#detalji");
const forma = document.querySelector("#add-form");
const inputNaziv = document.querySelector("#naziv");
const inputCena = document.querySelector("#cena");
const inputOpis = document.querySelector("#opis");

// Funkcija za pravljenje jednog reda
function napraviRed(artikal) {
    const tr = document.createElement("tr");

    const tdNaziv = document.createElement("td");
    const tdCena = document.createElement("td");
    const tdOpis = document.createElement("td");

    tdNaziv.textContent = artikal.naziv;
    tdCena.textContent = artikal.cena;
    tdOpis.textContent = artikal.opis;

    tr.appendChild(tdNaziv);
    tr.appendChild(tdCena);
    tr.appendChild(tdOpis);

    // Klik na red 
    tr.addEventListener("click", function () {
        detalji.textContent =
            "Naziv: " + artikal.naziv +
            ", Cena: " + artikal.cena +
            ", Opis: " + artikal.opis;
    });

    return tr;
}

for (let artikal of artikli) {
    tabela.appendChild(napraviRed(artikal));
}

forma.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const naziv = inputNaziv.value;
    const cena = inputCena.value;
    const opis = inputOpis.value;

    const noviArtikal = new Artikal(naziv, cena, opis);

    tabela.appendChild(napraviRed(noviArtikal));

    forma.reset();
});


// Tabela
tabela.style.border = "1px solid black";
tabela.style.borderCollapse = "collapse";

const cells = tabela.querySelectorAll("th, td");
cells.forEach(cell => {
    cell.style.border = "1px solid black";
});

// Forma – plavi okvir
if (forma) {
    forma.style.border = "2px solid blue";
    forma.style.padding = "10px";
    forma.style.width = "fit-content";
}

// Detalji – crveni okvir
if (detalji) {
    detalji.style.border = "2px solid red";
    detalji.style.padding = "10px";
    detalji.style.width = "fit-content";
}