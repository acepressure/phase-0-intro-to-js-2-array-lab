const cats = ["Milo", "Otis", "Garfield"];
function catsArray(members) {
    [cats];
}

function catsLength(cats) {
    cats.length;
}

function destructivelyAppendCat(members) {
    cats.push("Ralph");
}

function destructivelyPrependCat(members) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(members) {
    cats.pop();
}

function destructivelyRemoveFirstCat(members) {
    cats.shift();
}

function appendCat(members) {
    const cat = [...cats, "Broom"];
    return cat;
}

function prependCat(members) {
    const cat = ["Arnold", ...cats];
    return cat;
}

function removeLastCat(members) {
    const cat = cats.slice(0, 2);
    return cat;
}

function removeFirstCat(members) {
    const cat = cats.slice(1);
    return cat;
}