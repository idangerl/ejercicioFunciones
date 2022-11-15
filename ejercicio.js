const siempreTrue = () => true;
console.log(siempreTrue());

const promesa = new Promise((resolve, reject) => {
  if (true) {
    resolve();
  }
  reject();
});

promesa.then(() =>
  setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000)
);

function* pares() {
  i=0
  while(true){
    i=i+2
    if(i>10){
        return
    }
    yield i
  }
}

const gen = pares()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
