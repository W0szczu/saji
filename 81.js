
let mojaZmienna = true;


console.log(mojaZmienna);


if (mojaZmienna) {
  console.log("Zmienna ma wartość true");
}


if (!mojaZmienna) {
  console.log("Zmienna ma wartość false");
} else {
  console.log("Zmienna ma wartość true");
}


mojaZmienna = false;


console.log("Po zmianie zmiennej:");

if (mojaZmienna) {
  console.log("Zmienna ma wartość true");
} else {
  console.log("Zmienna ma wartość false");
}
