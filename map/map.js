const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// Map 
// 1. Get array of all names 
const names = characters.map((character) => character.name);

console.log(names)
// 2. Get array of all heights
const heights = characters.map(character => character.height);
console.log(heights);
// 3. Get array of objects with jus tname and height properties
const minifiedRecords = characters.map(character => ({
    name: character.name,
    height: character.height
}));
console.log(minifiedRecords)
// 4. Get total numbers of characters in all the characters names 
const firstNames = characters.map(character => character.name.split(" ")[0]);
console.log(firstNames);

// 5. Get total numbers of characters in all the characters last names 
const lastNames = characters.map(character => character.name.split(" ")[1]);
console.table(lastNames);
// 6. Display data as a table
console.table(characters);

// 7. Display remaining 3 attributes. 
const restRecords = characters.map(character => ({
    mass: character.mass,
    eye_color: character.eye_color,
    gender: character.gender,
}));
// normal log
console.log(restRecords);
// console table
console.table(restRecords);

