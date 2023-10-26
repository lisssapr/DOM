"use strict"
//1
const getSqu = (arr) =>{

let sum = 0;
for(let elem of arr){
    sum += elem
}
return sum}

console.log(getSqu([2, 3, 4]))



//2 

function getS(num) {
    let array = [1];
    for (let i = 2, limit = num >> 1; i <= limit; ++i) {
        if (!(num % i)) array.push(i);
    }
    if (num !== 1)
    array.push(num);
return array;

}

console.log(getS("122" ));



//3

function spell(arr) {
    return arr.split('');
 }

 console.log(spell("Helloword")); 


//4

//5
function change(num5) {
       return num5.split('').reverse().join('');
  }
    
     console.log(change("wood hello")); 
    

     //6 

     function Big(arr) {
           return arr.charAt(0).toUpperCase() + arr.slice(1);
       }
      
      console.log(Big("word"))


      //7

      function Big(arr7) {
        let num7 = arr7.split(' ');
        for (let i = 0; i < num7.length; i++) {
          num7[i] = num7[i].charAt(0).toUpperCase() + num7[i].slice(1);
         }
        return num7.join(' ');
        }
        
         console.log(Big("word to you")); 


        
      function fillArray(length) {
            let arr7 = [];
            for (let i = 1; i <= length; i++) {
               arr7.push(i);
           }
          return arr7;
         }
       
       console.log(fillArray(77)); 

       //8
       function Sum(number) {
             let sum = 0;
            while (number > 0) {
                sum += number % 10;
                 number = Math.floor(number / 10);
             }
             return sum;
        }
         
         console.log(Sum(4644)); 


//9
 function Y(year) {
     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
 }

console.log(Y(20)); 

//10

function getday(sec) {
    return Math.floor(sec / (60 * 60 * 24));
}

console.log(getday(464646)); 
    
    
//11
function random(ar) {
    let arr = Math.floor(Math.random() * ar.length);
    return ar[arr];
}

console.log(random([355, 355, 222, 55, 53]));

//12
function Pro(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}

console.log(Pro(17)); 