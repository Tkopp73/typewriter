const sentence = 'hello there from lighthouse labs';

const typeWriter  = string => {
  for (let x = 0; x < string.length; x++){
    setTimeout(() => {
      process.stdout.write(string[x]);
    }, 1000);
  };
};

typeWriter(sentence);

