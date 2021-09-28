function greetings(name, work) {
  return `Hello, ${name.join(' ')}! Nice to have a ${work.title} ${work.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.