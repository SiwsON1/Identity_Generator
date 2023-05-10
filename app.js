const fs = require('node:fs/promises');

const genders =['M', 'F'];

const maleNames = ['Przemek', 'Wojtek','Tomek','Robert','Łukasz','Aleksander'];

const femaleNames = ['Agnieszka', 'Leokadia','Justyna','Julia','Matylda','Aleksandra'];

const lastNames = ['Wojciechowski', 'Randomowy' , 'Przypadkowy', 'Obliczalny', 'Strzelecki' ];

//let Age = Math.floor(Math.random() * (79 - 18)) + 18;

const randChoice = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
};

const people = [];

for (let i = 0; i < 21; i++) {
  const gender = randChoice(genders);
  
  let firstName;
  if(gender === 'M') {
    firstName = randChoice(maleNames);
  }else {
    firstName = randChoice(femaleNames);
  }

  const lastName = randChoice(lastNames);

  const age = Math.floor(Math.random() * (79 - 18)) + 18;

  const person ={
    firstName,
    lastName,
    gender,
    age
  }
  people.push(person);

  }

  const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});