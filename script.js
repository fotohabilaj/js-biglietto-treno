console.log("hello");


//km? eta? const int promt

const age = parseInt(prompt("Quanti anni hai?"));
const distance = parseInt(prompt("Quanti km devi fare?"));

console.log(age);
console.log(distance);




//km*0,21
let initialprice = distance*0.21;

console.log(initialprice);




if (age<18) {
   let price = initialprice-((initialprice/100)*20);
   console.log(price  + "€");
//if eta<18(20%) ${numero arrotondato}${euro}   
} else if (age>65) { 
    let price = initialprice-((initialprice/100)*40);
   console.log(price + "€");
//else if eta>65(40%) ${numero arrotondato}${euro}   
} else {
    console.log(initialprice + "€");
   //else ${numero arrotondato}${euro} 
}
