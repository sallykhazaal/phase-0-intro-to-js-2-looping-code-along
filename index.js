// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(array, event) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
  }
  return newArray;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");
function countDown(number) {
  let countDown = 10;
  while (countDown >= 0) console.log(countDown--);
}
