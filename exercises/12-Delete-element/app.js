let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

function deletePerson(nombre) {
    let newArray = people.filter((element) => element != nombre);
    return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
