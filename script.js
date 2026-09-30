//kopplar variabeln products till div med id products i HTML
const products = document.getElementById("products");

//en funktion som hämtar data från JSON filen
//funktionen har en for-loop i sig som går igenom varje objekt i JSON filen och skapar nya HTML taggar och lägger in datan i dem för varje objekt som finns i filen
async function getProducts() {
    try{
        const response = await fetch("produkter.json");

        if(!response.ok){
            throw new Error("Något gick fel vid hämtningen");
        }

        const data = await response.json();
        
        for (let i = 0; i < data.produkter.length; i++) {
            const article = document.createElement("article");

            const name = document.createElement("h2");
            name.textContent = data.produkter[i].namn;

            const imgProduct = document.createElement("img");
            imgProduct.src = data.produkter[i].bild;
            imgProduct.alt = data.produkter[i].namn;

            const productDescription = document.createElement("p");
            productDescription.textContent = data.produkter[i].beskrivning;

            const type = document.createElement("p");
            type.textContent = data.produkter[i].typ;

            const price = document.createElement("p");
            price.textContent = data.produkter[i].pris + " kr";

            products.appendChild(article);
            article.appendChild(name);
            article.appendChild(imgProduct);
            article.appendChild(productDescription);
            article.appendChild(type);
            article.appendChild(price);
        }
    }

    catch(error){
        console.error("Fel", error);
    }
}

//en funktion som anropar funktionen getProducts
function init(){
    getProducts();
}

//anropar funktionen init när sidan laddas in
window.onload = init;