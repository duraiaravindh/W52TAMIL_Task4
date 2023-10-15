//1) Print odd numbers in an array


var oddNumber = n => {
        for (var i=0; i<n.length;i++){
        if(n[i]%2 !== 0){
            console.log(n[i]);
        }
    }
};
oddNumber([66,45,12,2,4]);

//2)Sum of all numbers in an array

let number = [1,2,3,4,5];
var sumNumber = n => {
    let sum=0;
    for (let i=0; i<n.length;i++){
        sum +=n[i];
    }
    console.log(sum);
};
sumNumber(number);

//3) Return all the palindromes in an array

var isPolindrom = str_arr =>{
    str_arr.forEach(str =>{
        var reverse_str = str.split("").reverse().join("");
        if(str === reverse_str){
            console.log(`${str} is a polindrom`);
        } else{
            console.log(`${str} is not a polindrom`);
        }
    });
};

isPolindrom(["raja","madam"]);

//4) Convert all the strings to title caps in a string array

let titleCase = str_arr =>{
    str_arr.forEach(str => {
        let new_str = str[0].toUpperCase()+str.slice(1);
        console.log(new_str);
    });
};
titleCase(["durai","aravindh","raj"]);

//5)Return all the prime numbers in an array

var isPrime = num_arr =>{
    num_arr.forEach(num =>{
        if(num <=1){
            return false;
        }
        for(let i=2; i<num/2; i++){
            if(num%i ===0){
                return false;
            }
        }
        console.log(num);
    });
};
isPrime([1,13,19]);
