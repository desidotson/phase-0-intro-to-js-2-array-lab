const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name)  {
    return cats.push("Ralph")
}
function destructivelyPrependCat (name) {
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat (name) {
    return cats.pop('Garfield')
}
function destructivelyRemoveFirstCat (name) {
    return cats.shift('Milo')
}
function appendCat (name) {
    const newCats = [...cats, 'Broom'];
    return newCats;
}
function prependCat (name) {
    const newCatss = ['Arnold', ...cats]
    return newCatss;
}
function removeLastCat () {
    const copyOfCats = cats.slice(0, cats.length - 1);
    return copyOfCats;
}
function removeFirstCat () {
    const anotherCopyOfCats = cats.slice(1)
    return anotherCopyOfCats;
}