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

// SORT
// 1. Sort by mass 
const byMass = characters.sort((a, b) => {
    return a.mass - b.mass
});
// console.log(byMass);

// 2. Sort by height 
const byHeight = characters.sort((a, b) => {
    return a.height - b.height
});
console.log(byHeight);
