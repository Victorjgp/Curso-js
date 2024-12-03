let num = [5,8,2,9,3]
num[5]= 7
console.log(num)

let pos = num.indexOf(7)
if( pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`Valor na posição ${pos}`)
}
