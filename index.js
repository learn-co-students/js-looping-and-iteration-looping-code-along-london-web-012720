// Code your solutions in this file

function writeCards(names, celebrationType){
let thank_you = []

for (let i = 0; i < names.length; i++ )
{ 
    thank_you.push( `Thank you, ${names[i]}, for the wonderful ${celebrationType} gift!`)
}
return thank_you;
}


function countDown(number){
    while(number > -1){
        console.log(number--)
    }
}