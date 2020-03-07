// Code your solutions in this file
function writeCards(names, celebration) {
  let thank_you = [];
  for (let i = 0; i < names.length; i++) {
    thank_you.push(
      `Thank you, ${names[i]}, for the wonderful ${celebration} gift!`
    );
  }
  return thank_you;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num--);
  }
}
