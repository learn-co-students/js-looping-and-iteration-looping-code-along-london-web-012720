 function writeCards(array, event) {
     const array2 = []
     for (let i = 0; i < 3; i++) {
         array2.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
     };
     return array2
 };

 function countDown(number) {

     let countup = 0;
     while (countup < 11) {
         console.log(countup++);
     }
 }