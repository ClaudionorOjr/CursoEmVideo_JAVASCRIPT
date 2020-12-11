// Recursividade
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1) // Chamada recursiva
    }
}

console.log(fatorial(5))