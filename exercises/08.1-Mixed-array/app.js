let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

let nuevo = []
for (let i = 0; i < mix.length; i++){
    let item = mix[i]
    nuevo.push(typeof item);
}
console.log(nuevo)