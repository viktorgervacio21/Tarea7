function generateFibonacci(limit){
    const fibo=[0,1];

    for(let i = 2; i< limit; i++){
    fibo[i]=fibo[i-1]+fibo[i-2];
    }

    return fibo;
}
const fiboSerie= generateFibonacci(100);
const ul = document.getElementById("fibo");

fiboSerie.forEach(Number =>{
    const li =document.createElement("li");
    li.innerHTML = Number;
    ul.append(li);
});