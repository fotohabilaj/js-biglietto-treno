console.log("hello");


//km? eta? const int promt

const age = parseInt(prompt("Quanti anni hai?"));
const distance = parseInt(prompt("Quanti km devi fare?"));

console.log(age);
console.log(distance);




//km*0,21
const initialprice = distance*0.21 ;

console.log(initialprice) ;

let price = initialprice

if (age<18) {
    price = initialprice-((initialprice/100)*20) ;
   
//if eta<18(20%) ${numero arrotondato}${euro}   
} else if (age>65) { 
    price = initialprice-((initialprice/100)*40) ;

//else if eta>65(40%) ${numero arrotondato}${euro}   
}

 console.log(price.toFixed(2) + "€") ;