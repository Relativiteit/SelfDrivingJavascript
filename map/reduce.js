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

// !! Make sure the height and mass are INTEGERS!!!
// 1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
console.log(totalMass);
// You can rename the callback function and starting value of reduce to whatever string you want 
// 2. Height of all characters
const simpleHeight = characters.reduce((optell, hudig) => optell + hudig.height, 1000);
console.log(simpleHeight);
// You can give a initial value of a empty object too !
// 3. Get total number of character ny eye color IMPORTANT
const charactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color
    if (acc[color]) {
        acc[color] += 1
    } else {
        acc[color] = 1
    }
    return acc
}, {})
console.log(charactersByEyeColor);
// 4. Get the total number of characters in all the characters names 
const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0);
console.log(totalNameCharacters);


