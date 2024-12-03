let num = [5,8,2,9,3]
num[5] = 7
//for(let pos = 0; pos < num.length; pos++) {
for(let pos in num){
    console.log(num[pos])
}