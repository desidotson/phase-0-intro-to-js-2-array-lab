const cats = [ "Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
  }
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat () {
    cats.shift();
}
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}
function prependCat(name) {
    const copyNewCats = [name, ...cats];
     return copyNewCats;
}
function removeLastCat() {
    const copyCatsUsingSlice = cats.slice(0, cats.length - 1);
    return copyCatsUsingSlice;
}
function removeFirstCat() {
    const copyCatsUsingSlice2 = cats.slice(1);
    return copyCatsUsingSlice2;
}