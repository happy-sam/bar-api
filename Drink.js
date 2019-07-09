class Drink {
    constructor(id, name, grup, ingredients, decoration, preparation, photo) {
        this.id = id;
        this.name = name; // nazwa drinka
        this.grup = grup; // grupa drinków
        this.ingredients = ingredients;  // składniki
        this.decoration = decoration;  // możliwa dekoracja - składniki
        this.preparation = preparation;  // sposób przygotowania
        this.image = photo;  // zdjęcie drinka
    }

    addImage() {  // dodanie zdjęcia
        let img = document.createElement("img");
        img.src = this.image;
        // return document.body.appendChild(img);
        return img;
    }

    addDiv() {  // dodanie diva z wszystkimi zmiennymi drinka
        let div = document.createElement("div");
        div.innerHTML = `<h1><b>${this.name}</b></h1><br>1. Składniki:<br> ${this.ingredients.join("")}<br> 2. Możliwa dekoracja:<br> - ${this.decoration}<br><br> 3. Sposób przygotowania:<br> ${this.preparation}<br>`;
        div.style.marginBottom = "30px";
        div.style.marginTop = "10px";
        return div;
    }
}

