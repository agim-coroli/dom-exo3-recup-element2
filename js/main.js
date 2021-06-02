// 1. Affiche le contenu textuel du second h1
let tirer = document.getElementsByTagName("h1")[1].innerText
console.log(tirer);



// 2. Affiche le contenu textuel du dernier li
let tirer2 = document.getElementsByTagName("li")[3].innerText
console.log(tirer2);



// 3. Affiche le contenu textuel du premier p en majuscule
let tirer3 = document.getElementsByTagName("ul")[0].previousElementSibling.innerText.toUpperCase()
console.log(tirer3);



// 4. Avec l'aide d'un forEach 
let tab = Array.from(document.getElementsByTagName("li"));

tab.forEach(elt => {
    console.log(elt.innerText.toUpperCase());
});

