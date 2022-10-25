const sentence = 'wanna play a game?';
let array = sentence.split("");
let delay = 0;

for (let x = 0; x < array.length; x++){
  setTimeout(() => {
    process.stdout.write(array[x]);
  }, delay);
  delay += 50;
};


setTimeout(() => {
  process.stdout.write('\n');

}, 3000);
