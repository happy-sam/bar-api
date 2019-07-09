const btnSearch = document.querySelector("#btn-search");
const btnAddDrink = document.querySelector("#btn-add-drink");
const tbodyDrinks = document.querySelector(".tbody-drinks");
const inputAddDrink = document.querySelector("#input-add-drink");
let inputDrink = document.querySelector("#input-drink");
let number = 0;
// let btnRemove;

let drinks = [manhattan, boomerang, cowboy, gunny, egzotycznyKruszonzWinem];
let ingredient = [limonka, whisky, slodkiWermut, kostkiLodu];

let fotoDrink = document.querySelector("#foto-drink");
let descriptionDrink = document.querySelector("#description-drink");

let oneDrink = "";

for (let i = 0; i < drinks.length; i++) {
    let inputOneDrink = drinks[i];
    let optionElement = document.createElement("option");
    optionElement.setAttribute("value", inputOneDrink.name);
    optionElement.setAttribute("data-id", inputOneDrink.id);
    optionElement.innerHTML = inputOneDrink.name;
    inputDrink.appendChild(optionElement);
}

let choiceDrink = () => {
    if (inputDrink.value != "") {
        while (fotoDrink.firstChild) {
            fotoDrink.removeChild(fotoDrink.firstChild);
        }
        while (descriptionDrink.firstChild) {
            descriptionDrink.removeChild(descriptionDrink.firstChild);
        }

        let inputDrinkValue = inputDrink.value;
        for (let i = 0; i < drinks.length; i++) {
            if (drinks[i].name == inputDrinkValue) {
                oneDrink = drinks[i];
            }
        }
        fotoDrink.appendChild(oneDrink.addImage());
        descriptionDrink.appendChild(oneDrink.addDiv());
    }
}


let addDrink = function () {

    let btnRemove = document.createElement("button");
    btnRemove.classList.add("btn", "btn-danger", "remove");
    btnRemove.textContent = "Usuń";

    if (inputAddDrink.value > 0 && oneDrink != "") {

        let addTrToList = [++number, oneDrink.name, inputAddDrink.value, btnRemove.outerHTML];
        let tr = document.createElement("tr");
        for (let i = 0; i < addTrToList.length; i++) {
            let td = document.createElement("td");
            td.innerHTML = addTrToList[i];
            tr.appendChild(td);
        }

        tbodyDrinks.appendChild(tr);
        inputAddDrink.value = "";
    }

}

btnSearch.addEventListener("click", choiceDrink);
btnAddDrink.addEventListener("click", addDrink);
