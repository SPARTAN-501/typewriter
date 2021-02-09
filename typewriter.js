const sentence = "hello there from lighthouse labs\n";

/*
for (const char of sentence) {
  process.stdout.write(char);
}
*/

/*
setTimeout(() => {
  // print the char here
  for (const char of sentence) {
    process.stdout.write(char);
  }
}, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
*/

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}