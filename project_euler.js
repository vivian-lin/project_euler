//Problem 1: Multiples of 3 and 5
var sum = 0;
function find_sum(number){
  for (var i = 0; i < number; i++) {
    if (i%3===0){
      sum += i;
    }
    else if (i%5===0){
      sum += i;
    }
  }
}
find_sum(1000)
return sum
///////////////////////////////////////////////////////
//Problem 2: Even Fibonacci numbers
var x = 0;
var y = 1;
var z = 0;
var sum = 0
function add_even_fibonacci(number){
  for (var i = 0; z < number; i++) {
    z = x + y;
    x = y;
    y = z;
    if (z%2===0){
      sum += z
    }
  }
}
add_even_fibonacci(4000000)
return sum
///////////////////////////////////////////////////////
//Problem 3: Largest prime factor
var factors = [];


//Finds all the factors of a number and pushes them into factors []
function find_factors(number, array){
  var max_number_to_check = number;
  for (var i = 1; i < max_number_to_check; i++){
    if (number % i === 0){
      array.push(i);
      max_number_to_check = number/i;
      array.push(max_number_to_check);
    }
  }
}

//Check if a number is prime
function check_prime(number){
  var factors_array = [];
  find_factors(number, factors_array);
  return factors_array.length === 2;
}

var prime_array = [];
//Scans through array factors [] and checks if number is prime
function scan_array(array){
  for (var i = 0; i < array.length; i++) {
    if (check_prime(array[i])){
      prime_array.push(array[i]);
    }
  }
}
