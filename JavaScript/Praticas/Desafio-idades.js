let cont = 0;
let n = 0;
let soma = 0;

do {
  n = parseInt(gets());
  
  if(n > 0){
    soma = soma + n;
    cont = cont + 1;
  }

}while (n > 0);

let media = soma / cont;

print(media.toFixed(2));
