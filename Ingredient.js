class Ingredient {
    constructor(name, measure, grup, photo) {
        this.name = name; // nazwa składnika
        this.quantity; // ilość
        this.measure = measure; // jednostka miary
        this.grup = grup; // grupa produktów
        this.image = photo; // zdjęcie składnika
    }

    onePosition(ilosc) {
        if (ilosc == 0) {
            ilosc = "";
            this.measure = "";
            return `- ${this.name}<br>`
        }
        return `- ${this.quantity = ilosc} ${this.measure} - ${this.name}<br>`
    }

    addImageIngredient() {
        let img = document.createElement("img");
        img.src = this.image;
    }

    // addDivIngredient() {
    //     let div = document.createElement("div");

    //     div.innerHTML = `1. Nazwa: <b>${this.name}</b>;<br> 2. Ilość: ${this.quantity};<br>  3. Jednostka miary: ${this.measure};<br>`;
    //     div.style.marginBottom = "30px";
    //     div.style.marginTop = "10px";
    //     this.addImageIngredient();
    // }
}
