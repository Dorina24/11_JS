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

//SWITCH__________________________

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