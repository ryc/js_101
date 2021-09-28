function triangle(num) {
  let count = 1;

  do {
    console.log(`${'*'.repeat(count).padStart(num, ' ')}`);
    count += 1;
  } while (count <= num);
}

triangle(5);
triangle(1);
triangle(9);