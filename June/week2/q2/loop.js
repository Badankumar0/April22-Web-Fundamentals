//Q2. In how many ways can we loop in an array describe each with an example ?

let arr = [1,2,3,4,5];
//1. for loop
let i=0;
for(i=0;i<arr.length;i++){
    console.log('for loop =',arr[i]);
}

// 2. for loop of methode 
for(let elements of arr){
    console.log('for loop using method =',elements);
}

// 3.While loops: 
let j=0;
while(j<arr.length){
    console.log('while loop =',arr[j]);
    j++;
}
