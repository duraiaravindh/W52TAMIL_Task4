//Do the below programs in anonymous function & IIFE

//1) Print odd numbers in an array

//Anonymous function :
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var oddNumber = function (n) {
    for (var i = 0; i < n.length; i++) {
        if (n[i] % 2 !== 0) {
            console.log(n[i]);
        }
    }
};
oddNumber(numbers);

//IIFE :
(function (n) {
    for (var i = 0; i < n.length; i++) {
        if (n[i] % 2 !== 0) {
            console.log(n[i]);
        }
    }

})([11, 12, 13, 14, 15, 16, 17, 18]);


//2) Sum of all numbers in an array

//Anonymous function :
let number = [20, 20, 20, 20, 20];
let sumNumber = function (n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    console.log(sum);
};
sumNumber(number);

//IIFE :
let number1 = [20, 20, 20, 20, 20];
(function (n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    console.log(sum);
})(number1);



//3 Rotate an array by k times

//Anonymous function :
var rotate = function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
    console.log(nums);
};
rotate([1, 2, 3, 4, 5, 6, 7], 4);

//IIFE :
(function (nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    console.log(nums)
})([1, 2, 3, 4, 5, 6, 7], 3)


//4) Remove duplicates from an array

//Anonymous function :
var findDuplicates = function (arr) {
    let result = [];
    arr.forEach(function (element, index) {
        if (arr.indexOf(element) === index) {
            result.push(element);
        }
    });
    return result;
};
console.log(findDuplicates([1, 2, 3, 4, 5, 1, 2]));

//IIFE :
(function (arr) {
    let result = [];
    arr.forEach(function (element, index) {
        if (arr.indexOf(element) === index) {
            result.push(element);
        }
    });
    console.log(result);
})([1, 2, 3, 4, 5, 1, 2]);

//5) Convert all the strings to title caps in a string array

//Anonymous function :
var titleCase = function (str_arr) {
    str_arr.forEach(str => {
        let new_str = str[0].toUpperCase() + str.slice(1);
        console.log(new_str);
    });
};
titleCase(["durai", "aravindh"]);


//IIFE :
(function (str_arr) {
    str_arr.forEach(str => {
        let new_str = str[0].toUpperCase() + str.slice(1);
        console.log(new_str);
    });
})
    (["durai", "aravindh"]);


//6) Return all the palindromes in an array

//Anonymous function :
var polindrom = function (str_arr) {
    str_arr.forEach(str => {
        var reverse_str = str.split("").reverse().join("");
        if (str === reverse_str) {
            console.log(`${str} is a polindrom`);
        } else {
            console.log(`${str} is not a polindrom`);
        }
    });
};
polindrom(["durai", "civic", "madam"]);

//IIFE :
(function (str_arr) {
    str_arr.forEach(str => {
        var reverse_str = str.split("").reverse().join("");
        if (str === reverse_str) {
            console.log(`${str} is a polindrom`);
        } else {
            console.log(`${str} is not a polindrom`);
        }
    });
})
    (["durai", "civic", "madam"]);

//7) Return all the prime numbers in an array

//Anonymous function :
    var prime = function (num_arr) {
        num_arr.forEach(num => {
            if (num <= 1) {
                return false;
            }
            for (let i = 2; i < num / 2; i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            console.log(num);
        });
    };
prime([1, 13, 19]);

//IIFE :

(function (num_arr) {
    num_arr.forEach(num => {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i < num / 2; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        console.log(num);
    });
})
    ([1, 13, 19]);

//8) Return median of two sorted arrays of same size

//Anonymous function :
var findMedian = (arr1, arr2) => {
    let compare = (i, j) => {
        return i - j;
    };
    let arr = arr1.concat(arr2).sort(compare);
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    }
    return arr[math.floor(arr.length)];
};
console.log(findMedian([1, 2, 3], [2, 3, 4]));

//IIFE :
(function (arr1, arr2) {
    let compare = (i, j) => {
        return i - j;
    };
    let arr = arr1.concat(arr2).sort(compare);
    if (arr.length % 2 === 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2 - 2]) / 2;
    }
    return arr[math.floor(arr.length)];
});
([1, 2, 3], [2, 3, 4]);