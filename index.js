// Code your solutions in this file

function writeCards(names) {
  const arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return arr;
}

function countDown(num) {
  let count = num;
  while (count > -1) {
    console.log(count);
    count--;
  }
}
