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
// 1. Check if all characters have brown eyes
const allBrownEyes = characters.every((character) => {
    return character.eye_color === 'brown';
});
console.log(allBrownEyes)

// 2. Does every character weigh more than 40?
const greaterWeight = characters.every((character) => {
    return character.mass > 40;
});
console.log(greaterWeight);

// 3. Is every character shorter than 200?
const isShorter = characters.every((character) => {
    return character.height < 200;
});
console.log(isShorter);

// 4. Is every character male 
const isMale = characters.every((character) => {
    return character.gender === 'male';
});
console.log(isMale)