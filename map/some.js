const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Don black man ',
        height: 215,
        mass: 120,
        eye_color: 'brown',
        gender: 'male',
    },
];

// 1. Are some characters male
const areMale = characters.some((characters) => {
    return characters.gender === 'male';
})
console.log(areMale)

// 2. Is there at least character with brown eyes
const oneBrownEyes = characters.some((character) => character.eye_color === 'brown');
console.log(oneBrownEyes)

// 3. Is there at least one character taller than 200
const tallerThanATree = characters.some((character) => character.height > 200);
console.log(tallerThanATree)

// 4. Is there a least one character with mass < 50
const oneMassLessThan50 = characters.some((character) => character.mass < 50);
console.log(oneMassLessThan50);
