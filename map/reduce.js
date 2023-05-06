
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
];

// !! Make sure the height and mass are INTEGERS!!!
// 1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
console.log(totalMass);
// You can rename the callback function and starting value of reduce to whatever string you want 
const simpleMass = characters.reduce((optell, hudig) => optell + hudig.height, 1000);
console.log(simpleMass);


