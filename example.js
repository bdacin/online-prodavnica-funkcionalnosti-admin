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

// Popunjavanje tabele

const tabela = document.querySelector("#artikli");

for (let artikal of artikli) {
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

    tabela.appendChild(tr);
}


// Tabela borders
tabela.style.border = "1px solid black";
tabela.style.borderCollapse = "collapse";

const cells = tabela.querySelectorAll("th, td");
cells.forEach(cell => {
    cell.style.border = "1px solid black";
});

// Forma plavi okvir
const forma = document.querySelector("#add-form");
if (forma) {
    forma.style.border = "2px solid blue";
    forma.style.padding = "10px";
    forma.style.width = "fit-content";
}

// Detalji crveni okvir
const detalji = document.querySelector("#detalji");
if (detalji) {
    detalji.style.border = "2px solid red";
    detalji.style.padding = "10px";
    detalji.style.width = "fit-content";
}