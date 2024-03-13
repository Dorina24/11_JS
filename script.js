console.log(`Hello!`)

//    IF ___________________________________________________
let isChoreDone = false;
let hasEaten = false;

if (isChoreDone && hasEaten) {
    console.log('Te poti uita la desene animate!')
}

if(!isChoreDone || !hasEaten){
   if(!isChoreDone)
   {console.log('Inca mai ai de lucru! Poti sa te uiti la DA dupa ce ai terminat treaba')}

   if(!hasEaten)
   {console.log('Inca nu ai terminat de mancat! Te poti uita la DA dupa ce farfuria este goala')}   
}

//IF ... ELSE ______________________________________________
if (isChoreDone && hasEaten) {
    console.log('Te poti uita la desene animate!')
}
else
{if(!isChoreDone)
    {console.log('Inca mai ai de lucru! Poti sa te uiti la DA dupa ce ai terminat treaba')}
 
    if(!hasEaten)
    {console.log('Inca nu ai terminat de mancat! Te poti uita la DA dupa ce farfuria este goala')} 
}

//   IF - ELSE IF - ELSE ___________________________________
let number = -13;
if (number >0) {
    console.log('Numarul este pozitiv.')
}     
      else if (number<0)  { 
        console.log("Numarul ales este negativ.")
       }   
            else{
                console.log('Numarul ales este zero')
            }

//SWITCH_________________________________________________

const dayOfTheWeek = 2;
switch (dayOfTheWeek)
{ case 1:
       console.log('Ziua este luni');
        break;
  case 2:
        console.log('Ziua saptamanii este marti.')
        break; 
  default:
        console.log('Nu stiu ce zi a saptamanii este aceasta!');
        break;    
}

// Bucla WHILE _________________________________________________

const numbers = [2, 99, 34, 25, 1, -23];
let smallestNumber = Number.MAX_SAFE_INTEGER;    // am pus MAX_SAFE_INTEGER pentru a garanta ca MAX este unul din numerele din lista
let currentIndex = 0;

while (currentIndex < numbers.length)
 {   if(numbers[currentIndex] < smallestNumber)
    {smallestNumber = numbers[currentIndex]};

    currentIndex++;
 }
 console.log('Cel mai mic numar din lista este: ', smallestNumber);

 //  Bucla DO  --- WHILE ________________________________________
  //aflarea celui mai mic numar dintr0un array
 let n=10;
 let num = 0;
 do {
        num++;
        console.log(num);
      
 } 
        while(num<n);

// FOR ________________________________________________

let times = 10;
for (let i=0; i<10; i++)
{
    console.log(`Hello ${i}!`);
}

// //aflarea celui mai mic numar dintr0un array cu FOR
let smallestNr = Number.MAX_SAFE_INTEGER;

for (let i=0; i< numbers.length; i++)
{ if(numbers[i] < smallestNr)
     {smallestNr = numbers[i];}
}
console.log('Cel mai mic numar din lista:', smallestNr); 

// FOR--OF__________________________________________________
const numbers2 = [22,11,4,29];
let min=numbers2[0];
for (const num of numbers2)
{if (num<min)
{min=num;}
}
console.log(`Cel mai mic numar din colectie este ${min}`);

//   FOR ... IN __________________________________________________
const myCar =
{
    brand: 'Volvo',
    model: 'XC90',
    manufactureYear : 2012
};

for (const property in myCar)
{
    console.log(`${property} are valoarea ${myCar[property]}`);
}

//BREAK  SI  CONTINUE ______________________________________________

const number3=[1,2,3,4,5,6];
const numberToFind = 3;
let isNumberInArray = false;

for (const num of number3)
{   if(numberToFind === num)
    {
        isNumberInArray = true;
        break
    }
}
console.log(`${numberToFind} este in array:  ${isNumberInArray}`);

for(const num of number3)
{
    if(num%2>0)
    {continue;}
    }
console.log(`numarul ${num} este par, iar dublul lui este ${num*2}`);