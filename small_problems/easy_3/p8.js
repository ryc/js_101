function getGrade(g1, g2, g3) {
  let mean = (g1 + g2 + g3) / 3;

  if (mean >= 90 && mean <= 100) {
    return 'A';
  } else if (mean >= 80 && mean < 90) {
    return 'B';
  } else if (mean >= 70 && mean < 80) {
    return 'C';
  } else if (mean >= 60 && mean < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(89, 89, 89));
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"