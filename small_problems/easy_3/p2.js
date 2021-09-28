function logInBox(text, maxWidth) {
  console.log(`+${'-'.repeat(text.length + 2)}+`);
  console.log(`|${' '.repeat(text.length + 2)}|`);
  console.log(`| ${text.slice(0, maxWidth)} |`);
  console.log(`|${' '.repeat(text.length + 2)}|`);
  console.log(`+${'-'.repeat(text.length + 2)}+`);
}

logInBox('To boldly go where no one has gone before.');